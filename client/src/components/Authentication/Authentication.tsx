"use client";
import { useGetAuthUserQuery } from "@/state/api";
import Notification from "../Notification";
import Favourite from "../Favourite";
import Profile from "./Profile";
import { useIsMobile } from "@/lib/hooks";
import SignInSignUp from "./SignInSignUp";

const Authentication = () => {
  const isMobile = useIsMobile();

  const { data: authUser, isLoading } = useGetAuthUserQuery();

  if (isLoading) return <SignInSignUp />;

  return (
    <>
      {authUser ? (
        <>
          {!isMobile && (
            <>
              <Notification />
              <Favourite favourites={authUser.userInfo.favourites} />
            </>
          )}
          <Profile
            userRole={authUser.userRole}
            userImage={"https://placehold.co/50x50"}
            username={authUser.cognitoInfo.username}
          />
        </>
      ) : (
        <SignInSignUp />
      )}
    </>
  );
};
export default Authentication;
