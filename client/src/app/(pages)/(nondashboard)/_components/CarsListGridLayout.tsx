"use client";
import CarCard from "@/components/Cards/CarCard";
import Pagination from "@/components/Pagination";
import { useQueryState } from "nuqs";
import { Skeleton } from "@/components/ui/skeleton";
import { useAppSelector } from "@/state/redux";
import { Car, CarListing } from "@/types/prismaTypes";

export default function CarsListGridLayout({
  itemsPerPage = 6, //If don't pass nay value to itemsPerPage prop, its default value is 6
}: CarsListGridLayoutProps) {
  const filteredCarListings = useAppSelector(
    ({ global }) => global.filteredCarListings
  ) as CarListing[];

  const [currentPage] = useQueryState("page");

  //Calculate the next range of cars to be displayed
  const startIndex = currentPage ? (Number(currentPage) - 1) * itemsPerPage : 0;
  const endIndex = startIndex + itemsPerPage;

  return (
    <>
      {filteredCarListings?.length == 0 ? (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {Array.from({ length: 6 }, (_, index) => (
            <Skeleton key={index} className="h-[900px] lg:h-[500px] w-full" />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {filteredCarListings
              ?.slice(startIndex, endIndex)
              .map((carListing, index) => (
                <CarCard
                  key={carListing.id}
                  {...carListing}
                  index={index}
                  isHighlight={index === 2 ? true : false}
                />
              ))}
          </div>
          <div className="mt-5 me-2">
            <Pagination
              numOfItems={filteredCarListings.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </>
      )}
    </>
  );
}
