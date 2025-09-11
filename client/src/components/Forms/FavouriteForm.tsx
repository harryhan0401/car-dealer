"use client";
import { useAddCarListingFavouriteMutation } from "@/state/api";
import { User } from "@/types/prismaTypes";
import { HeartIcon } from "lucide-react";
import { useState } from "react";

const FavouriteForm = ({ authUser, carListingId }: FavouriteFormProps) => {
  const [updateUserFavourites, { isLoading }] =
    useAddCarListingFavouriteMutation();

  const [isFavourite, setIsFavourite] = useState<boolean>(
    authUser.userInfo.favourites.some(
      (fav: { id: string }) => fav.id === carListingId
    )
  );

  const handleClick = async () => {
    try {
      const cognitoId = authUser.cognitoInfo.userId;
      const res: User = await updateUserFavourites({
        cognitoId,
        carListingId,
      }).unwrap();
      if (res) {
        const favourites = res.user.favourites.map(
          (fav: { id: string }) => fav.id
        );
        if (favourites.includes(carListingId)) {
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
