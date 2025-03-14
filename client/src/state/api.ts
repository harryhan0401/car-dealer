import { createNewUserInDatabase } from "@/lib/utils";
import { User } from "@/types/prismaTypes";
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
  tagTypes: [],
  endpoints: (build) => ({
    getAuthUser: build.query<AppUser, void>({
      queryFn: async (_, _queryApi, _extraoptions, fetchWithBQ) => {
        try {
          const session = await fetchAuthSession();
          const { idToken } = session.tokens ?? {};
          const user = await getCurrentUser();
          const userRole = idToken?.payload["custom:role"] as string;
          const userEmail = idToken?.payload["email"] as string;
          const endpoint = userRole === "user" ?
            `/users/${user.userId}` : `/admins/${user.userId}`
          let userDetailsResponse = await fetchWithBQ(endpoint);

          //if user doesn't exist, create new user
          if (userDetailsResponse.error && userDetailsResponse.error.status === 404) {
            userDetailsResponse = await createNewUserInDatabase(
              user,
              userEmail,
              userRole,
              fetchWithBQ
            )
          }
          return {
            data: {
              cognitoInfo: { ...user },
              userInfo: userDetailsResponse.data as User,
              userRole
            }
          }
        } catch (error: any) {
          return { error: error.message || "Could not fetch user data" }
        }
      }
    })
  }),
});

export const { useGetAuthUserQuery } = api;
