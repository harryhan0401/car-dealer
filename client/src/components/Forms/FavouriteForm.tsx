"use client";
import { setFavourites } from "@/state";
import { useUpdateUserFavouritesMutation } from "@/state/api";
import { useAppSelector } from "@/state/redux";
import { User } from "@/types/prismaTypes";
import { HeartIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const FavouriteForm = ({
  authUser,
  saleCarId,
}: {
  authUser: AppUser;
  saleCarId: number;
}) => {
  const dispatch = useDispatch();
  const [updateUserFavourites, { isLoading }] =
    useUpdateUserFavouritesMutation();

  let userFavourites: number[] = useAppSelector(
    ({ global }) => global.favourites
  );

  if (userFavourites.length == 0) {
    userFavourites = authUser.userInfo.favourites.map(
      (fav: { id: number }) => fav.id
    );
  }

  const [isFavourite, setIsFavourite] = useState<boolean>(
    userFavourites.includes(saleCarId)
  );

  const handleClick = async () => {
    try {
      const cognitoId = authUser.cognitoInfo.userId;
      const res: User = await updateUserFavourites({
        cognitoId,
        saleCarId,
      }).unwrap();
      if (res) {
        const favourites = res.favourites.map((fav: { id: number }) => fav.id);
        if (favourites.includes(saleCarId)) {
          setIsFavourite(true);
        } else {
          setIsFavourite(false);
        }
        dispatch(setFavourites(favourites));
      } else {
        throw new Error(
          "Unable to add new favourite - line-45 FavouriteForm.tsx"
        );
      }
    } catch (error) {
      console.error("Error adding favourite:", error);
    }
  };
  return (
    <button
      className={`flex justify-center items-center border w-[40px] h-full ${isFavourite ? "bg-primary" : "border-primary"} rounded-sm `}
      disabled={isLoading}
      onClick={handleClick}
    >
      <HeartIcon
        className={`${isFavourite ? " text-white" : "text-primary"}`}
        size={20}
      />
    </button>
  );
};
export default FavouriteForm;
