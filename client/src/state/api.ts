import { enquiryData } from "@/lib/schemas";
import { createNewUserInDatabase, saveProfileSetupStatus, withToast } from "@/lib/utils";
import { Enquiry, CarListing, User } from "@/types/prismaTypes";
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
  tagTypes: ["Users", "CarListings", "Enquiries"],
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

    //Car Listings related endpoints
    getCarListingById: build.query<CarListing, string>({
      query: (id) => `/carListings/${id}`,
      providesTags: (_result, _error, id) => [{ type: "CarListings", id }],
    }),
    getCarListings: build.query<CarListing[], void>({
      query: () => "/carListings",
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: "CarListings" as const, id })),
            { type: "CarListings", id: "LIST" },
          ]
          : [{ type: "CarListings", id: "LIST" }],
    }),
    createCarListing: build.mutation<CarListing, FormData>({
      query: (newCarListing) => ({
        url: `/carListings`,
        method: 'POST',
        body: newCarListing,
      }),
      invalidatesTags: (result) => [
        { type: "Users", id: result?.seller.id },
        { type: "CarListings", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Car has been listed for sale!",
          error: "Failed to list car! Please try again.",
        });
      },
    }),
    deleteCarListing: build.mutation<string, string>({
      query: (id) => ({
        url: `/carListings/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result) => [{ type: "Users", id: result }, { type: "CarListings", id: "LIST" }],
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
      providesTags: [{ type: "Enquiries", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch enquiries.",
        });
      },
    }),

    upsertEnquiry: build.mutation<Enquiry, { carListingId: string; enquiryData: enquiryData }>(
      {
        query: ({ carListingId, enquiryData }) => ({
          url: `/enquiries/${carListingId}`,
          method: 'PUT',
          body: enquiryData,
        }),
        async onQueryStarted({ carListingId }, { dispatch, queryFulfilled }) {
          const { data: enquiry, meta } = await queryFulfilled;

          // Update getCarListings
          dispatch(
            api.util.updateQueryData("getCarListings", undefined, (draft) => {
              const car = draft.find((c: CarListing) => c.id === carListingId);
              if (car) {
                if (!Array.isArray(car.enquiries)) {
                  car.enquiries = [];
                }
                const index = car.enquiries.findIndex((e: Enquiry) => e.id === enquiry.id);
                if (index !== -1) {
                  car.enquiries[index] = enquiry;
                } else {
                  car.enquiries.push(enquiry);
                }
              }
            })
          );

          // Update getCarListingById
          dispatch(
            api.util.updateQueryData("getCarListingById", carListingId, (draft) => {
              if (!Array.isArray(draft.enquiries)) {
                draft.enquiries = [];
              }
              const index = draft.enquiries.findIndex((e: Enquiry) => e.id === enquiry.id);
              if (index !== -1) {
                draft.enquiries[index] = enquiry;
              } else {
                draft.enquiries.push(enquiry);
              }
            })
          );
          const status = meta?.response?.status;
          let successMessage;
          if (status === 200) {
            successMessage = "Enquiry has been updated!";
          } else if (status === 201) {
            successMessage = "Enquiry has been sent!";
          }
          await withToast(queryFulfilled, {
            success: successMessage,
            error: "Failed to send/update enquiry! Please try again.",
          });
        },
      }
    ),
    deleteEnquiry: build.mutation<Enquiry, { referenceCode: string, carListingId: string }>({
      query: ({ referenceCode }) => ({
        url: `/enquiries/${referenceCode}`,
        method: 'DELETE',
      }),
      async onQueryStarted({ carListingId }, { dispatch, queryFulfilled }) {
        const { data: deletedEnquiry } = await queryFulfilled;
        dispatch(
          api.util.updateQueryData("getCarListings", undefined, (draft) => {
            const carListing = draft.find((c: CarListing) => c.id === carListingId);
            if (carListing && Array.isArray(carListing.enquiries)) {
              carListing.enquiries = carListing.enquiries.filter((e: Enquiry) => e.id !== deletedEnquiry.id);
            }
          })
        );
        dispatch(
          api.util.updateQueryData("getCarListingById", carListingId, (draft) => {
            if (Array.isArray(draft.enquiries)) {
              draft.enquiries = draft.enquiries.filter((e: Enquiry) => e.id !== deletedEnquiry.id);
            }
          })
        );
        await withToast(queryFulfilled, {
          success: "Enquiry has been deleted!",
          error: "Failed to delete enquiry! Please try again.",
        });
      }
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
    addCarListingFavourite: build.mutation<User, { cognitoId: string; carListingId: string }>({
      query: ({ cognitoId, carListingId }) => ({
        url: `/users/${cognitoId}/favourites`,  // Adjust URL path if necessary
        method: 'PATCH',  // Using PATCH for partial updates
        body: { carListingId },
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
    removeCarListingFavourite: build.mutation<User, { cognitoId: string; carListingId: string }>({
      query: ({ cognitoId, carListingId }) => ({
        url: `/users/${cognitoId}/favourites`,  // Adjust URL path if necessary
        method: 'DELETE',  // Using DELETE for removing a favourite
        body: { carListingId },
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

export const { useGetAuthUserQuery, useGetCarListingsQuery, useGetCarListingByIdQuery, useCreateCarListingMutation, useDeleteCarListingMutation, useGetEnquiriesQuery, useUpsertEnquiryMutation, useDeleteEnquiryMutation, useUpdateUserProfileMutation, useAddCarListingFavouriteMutation, useRemoveCarListingFavouriteMutation } = api;
