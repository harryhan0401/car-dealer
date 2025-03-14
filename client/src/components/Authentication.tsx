"use client";
import { useGetAuthUserQuery } from "@/state/api";
import Notification from "./Notification";
import Favourite from "./Favourite";
import Profile from "./Profile";
import { Button } from "./ui/button";
import Link from "next/link";

const Authentication = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();

  if (isLoading) {
    return null;
  }

  return (
    <>
      {authUser ? (
        <>
          <Notification />
          <Favourite noOfFavourites={authUser.userInfo.favourites.length} />
          <Profile
            cognitoId={authUser.cognitoInfo.userId}
            userRole={authUser.userRole}
            userImage={"https://placehold.co/50x50"}
            username={authUser.cognitoInfo.username}
          />
        </>
      ) : (
        <>
          <Button variant={"signIn"} asChild>
            <Link className="text-[16px]" href={"/signin"}>
              Sign in
            </Link>
          </Button>
          <Button asChild>
            <Link className="text-[16px]" href={"/signup"}>
              Sign up
            </Link>
          </Button>
        </>
      )}
    </>
  );
};
export default Authentication;
