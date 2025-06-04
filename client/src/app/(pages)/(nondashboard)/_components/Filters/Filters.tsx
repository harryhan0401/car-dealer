"use client";

import { useGetSellCarsQuery } from "@/state/api";
import FilterMakesModels from "./FilterMakeModel/FilterMakesModels";
import FilterMileage from "./FilterRange/FilterMileage";
import FilterPrice from "./FilterRange/FilterPrice";
import FilterYear from "./FilterRange/FilterYear";
import FilterDrive from "./FilterSelect/FilterDrive";
import FilterFuel from "./FilterSelect/FilterFuel";
import FilterTransmission from "./FilterSelect/FilterTransmission";
import ResetAll from "./ResetAll";

const Filters = () => {
  const { data: sellCars, isFetching: carFetching } = useGetSellCarsQuery();
  return (
    <>
      {!carFetching && sellCars && (
        <div className="flex flex-col gap-5">
          <FilterMakesModels sellCars={sellCars} />
          <FilterPrice sellCars={sellCars} />
          <FilterMileage sellCars={sellCars} />
          <FilterFuel />
          <FilterTransmission />
          <FilterDrive />
          <FilterYear sellCars={sellCars} />
          <ResetAll />
        </div>
      )}
    </>
  );
};
export default Filters;
