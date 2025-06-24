"use client";
import { useAddSellCarFavouriteMutation } from "@/state/api";
import { User } from "@/types/prismaTypes";
import { HeartIcon } from "lucide-react";
import { useState } from "react";

const FavouriteForm = ({ authUser, sellCarId }: FavouriteFormProps) => {
  const [updateUserFavourites, { isLoading }] =
    useAddSellCarFavouriteMutation();

  const [isFavourite, setIsFavourite] = useState<boolean>(
    authUser.userInfo.favourites.some(
      (fav: { id: number }) => fav.id === sellCarId
    )
  );

  const handleClick = async () => {
    try {
      const cognitoId = authUser.cognitoInfo.userId;
      const res: User = await updateUserFavourites({
        cognitoId,
        sellCarId,
      }).unwrap();
      if (res) {
        const favourites = res.user.favourites.map(
          (fav: { id: number }) => fav.id
        );
        if (favourites.includes(sellCarId)) {
          setIsFavourite(true);
        } else {
          setIsFavourite(false);
        }
      } else {
        throw new Error("Unable to add new favourite. Please try again later.");
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
      aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
    >
      <HeartIcon
        className={`${isFavourite ? " text-white" : "text-primary"}`}
        size={20}
      />
    </button>
  );
};
export default FavouriteForm;
