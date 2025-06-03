"use client";

import { useAppSelector } from "@/state/redux";
import Filters from "./Filters/Filters";
import CarsList from "./CarsList";

const CarsDisplay = () => {
  const isFiltering = useAppSelector((state) => state.global.isFiltering);

  return (
    <div className="lg:flex lg:gap-10">
      <div
        className={`hidden ${isFiltering && "lg:block lg:flex-1/3 xl:flex-1/4"}`}
      >
        <Filters />
      </div>
      <div className={`${isFiltering ? "lg:flex-2/3 xl:flex-3/4" : "lg:flex"} w-full`}>
        <CarsList />
      </div>
    </div>
  );
};
export default CarsDisplay;
