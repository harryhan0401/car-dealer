import FilterMakesModels from "@/components/Filters/FilterMakeModel/FilterMakesModels";
import FilterPrice from "@/components/Filters/FilterRange/FilterPrice";
import FilterMileage from "@/components/Filters/FilterRange/FilterMileage";
import FilterFuel from "@/components/Filters/FilterSelect/FilterFuel";
import FilterDrive from "@/components/Filters/FilterSelect/FilterDrive";
import FilterYear from "@/components/Filters/FilterRange/FilterYear";
import FilterTransmission from "./FilterSelect/FilterTransmission";
import ResetAll from "./ResetAll";
import { useGetAllSaleCarsQuery } from "@/state/api";

const Filters = () => {
  const { data: saleCars, isFetching: carFetching } = useGetAllSaleCarsQuery();
  return (
    <>
      {!carFetching && saleCars && (
        <div className="flex flex-col gap-5">
          <FilterMakesModels saleCars={saleCars} />
          <FilterPrice saleCars={saleCars} />
          <FilterMileage saleCars={saleCars} />
          <FilterFuel />
          <FilterTransmission />
          <FilterDrive />
          <FilterYear saleCars={saleCars} />
          <ResetAll />
        </div>
      )}
    </>
  );
};
export default Filters;
