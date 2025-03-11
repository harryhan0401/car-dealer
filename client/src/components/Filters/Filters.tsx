import MakesModels from "@/components/Filters/FilterMakeModel/MakesModels";
import FilterPrice from "@/components/Filters/FilterRange/FilterPrice";
import FilterMileage from "@/components/Filters/FilterRange/FilterMileage";
import FilterFuel from "@/components/Filters/FilterSelect/FilterFuel";
import FilterDrive from "@/components/Filters/FilterSelect/FilterDrive";
import FilterYear from "@/components/Filters/FilterRange/FilterYear";
import FilterTransmission from "./FilterSelect/FilterTransmission";
import ResetAll from "./ResetAll";

const Filters = ({ cars }: { cars: CarType[] }) => {
  return (
    <div className="flex flex-col gap-5">
      <MakesModels />
      <FilterPrice cars={cars} />
      <FilterMileage cars={cars} />
      <FilterFuel />
      <FilterTransmission />
      <FilterDrive />
      <FilterYear cars={cars} />
      <ResetAll />
    </div>
  );
};
export default Filters;
