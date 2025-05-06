"use client";
import { useGetAuthUserQuery } from "@/state/api";
import Notification from "./Notification";
import Favourite from "./Favourite";
import Profile from "./Profile";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFavourites } from "@/state";
import { useIsMobile } from "@/lib/hooks";

const Authentication = () => {
  const isMobile = useIsMobile();

  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (authUser && authUser.userInfo.favourites) {
      dispatch(
        setFavourites(authUser.userInfo.favourites)
      );
    }
  }, [authUser]);

  if (isLoading) {
    return null;
  }
  return (
    <>
      {authUser ? (
        <>
          {!isMobile && (
            <>
              <Notification />
              <Favourite />
            </>
          )}
          <Profile
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
