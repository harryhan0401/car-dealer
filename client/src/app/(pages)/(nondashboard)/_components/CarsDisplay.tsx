"use client";

import { useAppSelector } from "@/state/redux";
import Filters from "./Filters/Filters";
import CarsList from "./CarsList";

const CarsDisplay = () => {
  const isFiltersOpen = useAppSelector((state) => state.global.isFiltersOpen);

  return (
    <div className="w-full md:container lg:flex lg:gap-10">
      <div
        className={`hidden ${isFiltersOpen && "lg:block lg:flex-1/3 xl:flex-1/4"}`}
      >
        <Filters />
      </div>
      <div
        className={`${isFiltersOpen && "lg:flex-2/3 xl:flex-3/4"} flex flex-col w-full gap-5`}
      >
        <CarsList />
      </div>
    </div>
  );
};
export default CarsDisplay;
