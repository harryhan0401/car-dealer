import { enquiryData } from "@/lib/schemas";
import { createNewUserInDatabase, saveProfileSetupStatus, withToast } from "@/lib/utils";
import { Enquiry, SellCar, User } from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers) => {
      const session = await fetchAuthSession();
      const { idToken } = session.tokens ?? {};
      if (idToken) {
        headers.set("Authorization", `Bearer ${idToken}`)
      }
      return headers;
    }
  }),
  reducerPath: "api",
  tagTypes: ["Users", "SellCars", "Enquiries"],
  endpoints: (build) => ({
    //Auth related endpoints
    /*
    This endpoint fetches the authenticated user's data
    and returns the user information along with their role.
    */
    getAuthUser: build.query<AppUser, void>({
      queryFn: async (_, _queryApi, _extraoptions, fetchWithBQ) => {
        try {
          const session = await fetchAuthSession();
          const { idToken } = session.tokens ?? {};
          const user = await getCurrentUser();
          const userRole = idToken?.payload["custom:role"] as string;
          const userEmail = idToken?.payload["email"] as string;
          const endpoint =
            userRole === "user" ? `/users/${user.userId}` : `/admins/${user.userId}`;
          let userDetailsResponse = await fetchWithBQ(endpoint);

          // if user doesn't exist, create new user
          if (userDetailsResponse.error && userDetailsResponse.error.status === 404) {
            userDetailsResponse = await createNewUserInDatabase(
              user,
              userEmail,
              userRole,
              fetchWithBQ
            );
          }
          const { isProfileSetup } = userDetailsResponse.data as User;
          saveProfileSetupStatus(isProfileSetup);
          return {
            data: {
              cognitoInfo: { ...user },
              userInfo: userDetailsResponse.data as User,
              userRole,
            },
          };
        } catch (error: any) {
          return { error: error.message || "Could not fetch user data" };
        }
      },
      providesTags: (result) =>
        result?.userInfo ? [{ type: "Users", id: result.userInfo.id }] : [],
    }),

    //Sell cars related endpoints
    getSellCarById: build.query<SellCar, number>({
      query: (id) => `/sellCars/${id}`,
      providesTags: (id) => [{ type: "SellCars", id }],
    }),
    getSellCars: build.query<SellCar[], void>({
      query: () => "/sellCars",
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: "SellCars" as const, id })),
            { type: "SellCars", id: "LIST" },
          ]
          : [{ type: "SellCars", id: "LIST" }],
    }),
    createSellCar: build.mutation<SellCar, FormData>({
      query: (newSellCar) => ({
        url: `/sellCars`,
        method: 'POST',
        body: newSellCar,
      }),
      invalidatesTags: (result) => [
        { type: "Users", id: result?.seller.id },
        { type: "SellCars", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Car has been listed for sale!",
          error: "Failed to list car! Please try again.",
        });
      },
    }),
    deleteSellCar: build.mutation<number, number>({
      query: (id) => ({
        url: `/sellCars/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result) => [{ type: "Users", id: result }, { type: "SellCars", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Car has been deleted!",
          error: "Failed to delete car! Please try again.",
        });
      },
    }),

    //Enquiries related endpoints
    getEnquiries: build.query<Enquiry[], { cognitoId: string }>({
      query: ({ cognitoId }) => ({
        url: "/enquiries",
        method: "POST",
        body: { cognitoId },
      }),
      providesTags: ["Enquiries"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch enquiries.",
        });
      },
    }),

    createEnquiry: build.mutation<Enquiry, { sellCarId: number; enquiryData: enquiryData }>({
      query: ({ sellCarId, enquiryData }) => ({
        url: `/enquiries/${sellCarId}`,
        method: "POST",
        body: enquiryData,
      }),
      async onQueryStarted({ sellCarId }, { dispatch, queryFulfilled }) {
        try {
          const { data: newEnquiry } = await queryFulfilled;

          dispatch(
            api.util.updateQueryData("getSellCars", undefined, (draft) => {
              const car = draft.find((c: SellCar) => c.id === sellCarId);
              if (car) {
                if (!Array.isArray(car.enquiries)) {
                  car.enquiries = [];
                }
                car.enquiries.push(newEnquiry);
              }
            })
          );

          await withToast(Promise.resolve({ data: newEnquiry }), {
            success: "Enquiry has been received!",
          });
        } catch (err) {
          await withToast(Promise.reject(err), {
            error: "Failed to send enquiry! Please try again.",
          });
        }
      },
    }),
    updateEnquiry: build.mutation<Enquiry, { enquiryId: number, enquiryData: enquiryData }>({
      query: ({ enquiryId, enquiryData }) => ({
        url: `/enquiries/${enquiryId}`,
        method: 'PUT',
        body: enquiryData,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Enquiry has been updated!",
          error: "Failed to update enquiry! Please try again.",
        });
      },
    }),

    //User related endpoints
    updateUserProfile: build.mutation<User, { cognitoId: string, userProfileData: FormData }>({
      query: ({ cognitoId, userProfileData }) => ({
        url: `/users/${cognitoId}`,
        method: 'PUT',
        body: userProfileData,
      }),
      invalidatesTags: (result) => [{ type: "Users", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Profile updated successfully!",
          error: "Failed to update profile! Please try again.",
        });
      },
    }),
    addSellCarFavourite: build.mutation<User, { cognitoId: string; sellCarId: number }>({
      query: ({ cognitoId, sellCarId }) => ({
        url: `/users/${cognitoId}/favourites`,  // Adjust URL path if necessary
        method: 'PATCH',  // Using PATCH for partial updates
        body: { sellCarId },
      }),
      invalidatesTags: (result) => [{ type: "Users", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        await withToast(Promise.resolve({ data }), {
          success: data?.message || "Added to favourites!",
          error: "Failed to add to favourites! Please try again.",
        });
      },
    }),
    removeSellCarFavourite: build.mutation<User, { cognitoId: string; sellCarId: number }>({
      query: ({ cognitoId, sellCarId }) => ({
        url: `/users/${cognitoId}/favourites`,  // Adjust URL path if necessary
        method: 'DELETE',  // Using DELETE for removing a favourite
        body: { sellCarId },
      }),
      invalidatesTags: (result) => [{ type: "Users", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Removed from favourites!",
          error: "Failed to remove from favourites! Please try again.",
        });
      },
    }),
  }),
});

export const { useGetAuthUserQuery, useGetSellCarsQuery, useGetSellCarByIdQuery, useCreateSellCarMutation, useDeleteSellCarMutation, useGetEnquiriesQuery, useCreateEnquiryMutation, useUpdateEnquiryMutation, useUpdateUserProfileMutation, useAddSellCarFavouriteMutation, useRemoveSellCarFavouriteMutation } = api;
