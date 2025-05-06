"use client";
import { Button } from "@/components/ui/button";
import { useDeleteSaleCarMutation } from "@/state/api";
import { SaleCar } from "@/types/prismaTypes";
import { Edit, Eye, Globe, Lock, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SellCarModal from "./SellCarModal";

const YourCars = ({ saleCars }: { saleCars: SaleCar[] }) => {
  const [deleteSaleCar] = useDeleteSaleCarMutation();
  const handleDelete = async (id: number) => {
    await deleteSaleCar(id);
  };
  return (
    <div className="card">
      <h2 className="text-2xl font-bold">Cars</h2>
      <p className="text-sm text-muted-foreground">View and manage your cars</p>
      <div className="overflow-x-auto w-full mt-4">
        <table className="w-full text-left table-auto">
          {saleCars.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={5} className="text-center py-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      No cars found
                    </p>
                    <SellCarModal>
                      <Button className="mt-2">Start adding your car</Button>
                    </SellCarModal>
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <>
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
                {saleCars.map(({ id, price, mileage, isPublic, car }) => (
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
                            href={`/salecars/${id}`}
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
            </>
          )}
        </table>
      </div>
    </div>
  );
};
export default YourCars;
