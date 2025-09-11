"use client";
import { Button } from "@/components/ui/button";
import { useDeleteCarListingMutation, useGetAuthUserQuery } from "@/state/api";
import { FaCarAlt } from "react-icons/fa";
import { Edit, Eye, Globe, Lock, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CarListingModal from "./CarListingModal";
import { CarListing } from "@/types/prismaTypes";

const YourCars = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [deleteCarListing] = useDeleteCarListingMutation();

  if (isLoading) return <p>Loading...</p>;
  if (!authUser) return <p>You are not authorized to view this page!</p>;

  const carSales = authUser.userInfo.carSales as CarListing[];

  const handleDelete = async (id: string) => {
    await deleteCarListing(id);
  };

  return (
    <div className="card flex flex-col justify-between">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <FaCarAlt />
        Cars
      </h2>
      {carSales.length === 0 ? (
        <div className="w-full">
          <CarListingModal>
            <Button className="w-full">Start adding your car</Button>
          </CarListingModal>
        </div>
      ) : (
        <table className="w-full text-left table-auto">
          <thead className="bg-gray-100">
            <tr className="text-left text-sm font-medium text-gray-500">
              <th className="px-2 py-4 w-60"></th>
              <th className="px-2 py-4">Make</th>
              <th className="px-2 py-4">Model</th>
              <th className="px-2 py-4">Price</th>
              <th className="px-2 py-4">Mileage</th>
              <th className="px-2 py-4">Is public?</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carSales.map(({ id, price, mileage, isPublic, car }) => (
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
                <td className="p-4">{car.make}</td>
                <td className="p-4">{car.model}</td>
                <td className="p-4">${price.toLocaleString()}</td>
                <td className="p-4">{mileage.toLocaleString()} miles</td>
                <td className="p-4">
                  {isPublic ? (
                    <Globe className="" size={20} />
                  ) : (
                    <Lock className="" size={20} />
                  )}
                </td>
                <td className="p-4">
                  <div className="flex flex-col items-center gap-2">
                    <Button asChild>
                      <Link
                        href={`/carListings/${id}`}
                        className="w-full h-full"
                      >
                        <span>
                          <Eye className="w-4 h-4" />
                        </span>
                        View
                      </Link>
                    </Button>
                    <Button className="bg-accent/90 hover:bg-accent">
                      <span>
                        <Edit className="w-4 h-4" />
                      </span>
                      Edit
                    </Button>
                    <Button
                      className="bg-red-500 hover:bg-red-600"
                      onClick={() => handleDelete(id)}
                    >
                      <span>
                        <Trash className="w-4 h-4" />
                      </span>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default YourCars;
