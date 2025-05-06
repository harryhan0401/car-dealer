import { createNewUserInDatabase, saveProfileSetupStatus } from "@/lib/utils";
import { SaleCar, User } from "@/types/prismaTypes";
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
  tagTypes: ["Users", "SaleCars"],
  endpoints: (build) => ({
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
    //sale cars related endpoints
    getSaleCars: build.query<SaleCar[], { take: number; skip: number; }>({
      query: ({ take, skip }) => {

        let url = `/saleCars?take=${take}&skip=${skip}`;
        return url;
      }
    }),
    getSaleCarById: build.query<SaleCar, number>({
      query: (id) => `/saleCars/${id}`,
      providesTags: (id) => [{ type: "SaleCars", id }],
    }),
    getAllSaleCars: build.query<SaleCar[], void>({
      query: () => "/saleCars/all",
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: "SaleCars" as const, id })),
            { type: "SaleCars", id: "LIST" },
          ]
          : [{ type: "SaleCars", id: "LIST" }],
    }),
    createSaleCar: build.mutation<SaleCar, FormData>({
      query: (newSaleCar) => ({
        url: `/saleCars`,
        method: 'POST',
        body: newSaleCar,
      }),
      invalidatesTags: (result) => [
        { type: "Users", id: result?.seller.id },
        { type: "SaleCars", id: "LIST" },
      ]
    }),
    deleteSaleCar: build.mutation<number, number>({
      query: (id) => ({
        url: `/saleCars/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result) => [{ type: "Users", id: result }, { type: "SaleCars", id: "LIST" }],
    }),

    //user related endpoints
    updateUserProfile: build.mutation<User, { cognitoId: string, userProfileData: FormData }>({
      query: ({ cognitoId, userProfileData }) => ({
        url: `/users/${cognitoId}`,
        method: 'PUT',
        body: userProfileData,
      }),
      invalidatesTags: (result) => [{ type: "Users", id: result?.id }]
    }),
    addSaleCarFavourite: build.mutation<User, { cognitoId: string; saleCarId: number }>({
      query: ({ cognitoId, saleCarId }) => ({
        url: `/users/${cognitoId}/favourites`,  // Adjust URL path if necessary
        method: 'PATCH',  // Using PATCH for partial updates
        body: { saleCarId },
      }),
      invalidatesTags: (result) => [{ type: "Users", id: result?.id }],
    }),
    removeSaleCarFavourite: build.mutation<User, { cognitoId: string; saleCarId: number }>({
      query: ({ cognitoId, saleCarId }) => ({
        url: `/users/${cognitoId}/favourites`,  // Adjust URL path if necessary
        method: 'DELETE',  // Using DELETE for removing a favourite
        body: { saleCarId },
      }),
      invalidatesTags: (result) => [{ type: "Users", id: result?.id }],
    }),
  }),
});

export const { useGetAuthUserQuery, useGetSaleCarsQuery, useGetSaleCarByIdQuery, useGetAllSaleCarsQuery, useCreateSaleCarMutation, useDeleteSaleCarMutation, useUpdateUserProfileMutation, useAddSaleCarFavouriteMutation, useRemoveSaleCarFavouriteMutation } = api;
