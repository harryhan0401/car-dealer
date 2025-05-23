import FilterMakesModels from "@/components/Filters/FilterMakeModel/FilterMakesModels";
import FilterPrice from "@/components/Filters/FilterRange/FilterPrice";
import FilterMileage from "@/components/Filters/FilterRange/FilterMileage";
import FilterFuel from "@/components/Filters/FilterSelect/FilterFuel";
import FilterDrive from "@/components/Filters/FilterSelect/FilterDrive";
import FilterYear from "@/components/Filters/FilterRange/FilterYear";
import FilterTransmission from "./FilterSelect/FilterTransmission";
import ResetAll from "./ResetAll";
import { useGetAllSellCarsQuery } from "@/state/api";

const Filters = () => {
  const { data: sellCars, isFetching: carFetching } = useGetAllSellCarsQuery();
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
