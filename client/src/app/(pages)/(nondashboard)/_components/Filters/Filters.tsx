"use client";

import { useGetCarListingsQuery } from "@/state/api";
import FilterMakesModels from "./FilterMakeModel/FilterMakesModels";
import FilterMileage from "./FilterRange/FilterMileage";
import FilterPrice from "./FilterRange/FilterPrice";
import FilterYear from "./FilterRange/FilterYear";
import FilterDrive from "./FilterSelect/FilterDrive";
import FilterFuel from "./FilterSelect/FilterFuel";
import FilterTransmission from "./FilterSelect/FilterTransmission";
import ResetAll from "./ResetAll";

const Filters = () => {
  const { data: carListings, isFetching: carFetching } = useGetCarListingsQuery();
  return (
    <>
      {!carFetching && carListings && (
        <div className="flex flex-col gap-5">
          <FilterMakesModels carListings={carListings} />
          <FilterPrice carListings={carListings} />
          <FilterMileage carListings={carListings} />
          <FilterFuel />
          <FilterTransmission />
          <FilterDrive />
          <FilterYear carListings={carListings} />
          <ResetAll />
        </div>
      )}
    </>
  );
};
export default Filters;
