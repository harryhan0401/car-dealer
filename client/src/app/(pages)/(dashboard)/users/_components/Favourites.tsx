"use client";
import { Button } from "@/components/ui/button";
import { SellCar, User } from "@/types/prismaTypes";
import { Heart, X } from "lucide-react";
import {
  useGetAuthUserQuery,
  useRemoveSellCarFavouriteMutation,
} from "@/state/api";
import { useAppDispatch } from "@/state/redux";
import { setFavourites } from "@/state";
import Link from "next/link";

const Favourites = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const dispatch = useAppDispatch();
  const [removeFavourite] = useRemoveSellCarFavouriteMutation();

  if (isLoading) return <p>Loading...</p>;
  if (!authUser) return <p>You are not authorized to view this page!</p>;

  const favourites = authUser.userInfo.favourites as SellCar[];

  const handleRemoveFavourite = async (sellCarId: number) => {
    try {
      if (!authUser) return;
      const cognitoId = authUser.cognitoInfo.userId;
      const res: User = await removeFavourite({
        cognitoId,
        sellCarId,
      }).unwrap();
      if (res) {
        const favourites = res.favourites.filter(
          (favourite: SellCar) => favourite.id !== sellCarId
        );
        dispatch(setFavourites(favourites));
      } else {
        throw new Error("Unable to remove favourite. Please try again later.");
      }
    } catch (error) {}
  };
  return (
    <div className="card flex flex-col">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-auto">
        <Heart />
        Favourites
      </h2>
      {favourites.length === 0 ? (
        <Button asChild>
          <Link className="cursor-default" href={"/"}>
            Browse Cars
          </Link>
        </Button>
      ) : (
        <div className="overflow-x-auto w-full mt-4">
          <table className="w-full text-left table-auto">
            <tbody>
              {favourites.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-4">
                    <Button className="mt-2" asChild>
                      <Link href={"/"}>Browse Cars</Link>
                    </Button>
                  </td>
                </tr>
              ) : (
                <>
                  {favourites.map(({ id, price, car }) => {
                    const title = `${car.make === "MercedesBenz" ? "Mercedes-Benz" : car.make} ${car.model} ${car.year} | ${car.transmission} ${car.fuel}`;
                    return (
                      <tr key={id} className="bg-gray-200">
                        <td className="p-4 w-70">
                          <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`/sellCars/${id}`}
                          >
                            {title}
                          </Link>
                        </td>

                        <td>${price.toLocaleString()}</td>
                        <td>
                          <div className="flex flex-col items-center gap-2">
                            <Button
                              className="bg-red-500 hover:bg-red-600"
                              onClick={() => handleRemoveFavourite(id)}
                            >
                              <span>
                                <X className="size-4" />
                              </span>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default Favourites;
