"use client";
import { useUpdateUserFavouritesMutation } from "@/state/api";
import { User } from "@/types/prismaTypes";
import { HeartIcon } from "lucide-react";
import { useState } from "react";

const FavouriteForm = ({
  authUser,
  saleCarId,
  refetchUser,
}: {
  authUser: AppUser;
  saleCarId: number;
  refetchUser: () => void;
}) => {
  const [updateUserFavourites, { isLoading }] =
    useUpdateUserFavouritesMutation();

  const userFavourites: number[] = authUser.userInfo.favourites.map(
    (fav: { id: number }) => fav.id
  );
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
      if (
        res.favourites.map((fav: { id: number }) => fav.id).includes(saleCarId)
      )
        setIsFavourite(true);
      else {
        setIsFavourite(false);
      }
      refetchUser();
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
