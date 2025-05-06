"use client";
import { Button } from "@/components/ui/button";
import { SaleCar, User } from "@/types/prismaTypes";
import { Eye, Trash } from "lucide-react";
import Image from "next/image";
import ViewCarModal from "./ViewCarModal";
import {
  useGetAuthUserQuery,
  useRemoveSaleCarFavouriteMutation,
} from "@/state/api";
import { useAppDispatch } from "@/state/redux";
import { setFavourites } from "@/state";
import Link from "next/link";

const Favourites = ({ favourites }: { favourites: SaleCar[] }) => {
  const dispatch = useAppDispatch();
  const [removeFavourite] = useRemoveSaleCarFavouriteMutation();
  const { data: authUser } = useGetAuthUserQuery();
  const handleRemoveFavourite = async (saleCarId: number) => {
    try {
      if (!authUser) return;
      const cognitoId = authUser.cognitoInfo.userId;
      const res: User = await removeFavourite({
        cognitoId,
        saleCarId,
      }).unwrap();
      if (res) {
        const favourites = res.favourites.filter(
          (favourite: SaleCar) => favourite.id !== saleCarId
        );
        dispatch(setFavourites(favourites));
      } else {
        throw new Error("Unable to remove favourite. Please try again later.");
      }
    } catch (error) {}
  };
  return (
    <div className="card">
      <h2 className="text-2xl font-bold">Favourites</h2>
      <p className="text-sm text-muted-foreground">
        View and manage your favourites
      </p>
      <div className="overflow-x-auto w-full mt-4">
        <table className="w-full text-left table-auto">
          {favourites.length > 0 && (
            <thead className="bg-gray-100">
              <tr className="text-left text-sm font-medium text-gray-500">
                <th className="px-2 py-4 w-60 min-w-60"></th>
                <th className="px-2 py-4 w-100 max-w-100">Title</th>
                <th className="px-2 py-4 w-70 max-w-70">Price</th>
                <th></th>
              </tr>
            </thead>
          )}
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
                {favourites.map(({ id, price, car }, index) => {
                  const title = `${car.make === "MercedesBenz" ? "Mercedes-Benz" : car.make} ${car.model} ${car.year} | ${car.transmission} ${car.fuel}`;
                  return (
                    <tr key={id} className="border-b">
                      <td className="h-40 p-4">
                        <div className="relative h-full w-full">
                          <Image
                            src={
                              car.make.toLowerCase() == "bmw"
                                ? "/bmw.jpg"
                                : car.make.toLowerCase() == "mercedesbenz"
                                  ? "/mercedes.jpg"
                                  : car.make.toLowerCase() == "audi"
                                    ? "/audi.jpg"
                                    : ""
                            }
                            fill
                            alt={car.model}
                            className="w-16 h-16 object-cover rounded"
                            priority
                          />
                        </div>
                      </td>
                      <td className="p-4">{title}</td>
                      <td className="p-4">${price.toLocaleString()}</td>
                      <td className="p-4">
                        <div className="flex flex-col items-center gap-2">
                          <ViewCarModal saleCar={favourites[index]}>
                            <Button className="w-full">
                              <span>
                                <Eye className="w-4 h-4" />
                              </span>
                              View
                            </Button>
                          </ViewCarModal>
                          <Button
                            className="bg-red-500 hover:bg-red-600 w-full"
                            onClick={() => handleRemoveFavourite(id)}
                          >
                            <span>
                              <Trash className="w-4 h-4" />
                            </span>
                            Remove Favourite
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
    </div>
  );
};
export default Favourites;
