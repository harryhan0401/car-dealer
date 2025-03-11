"use client";
import { useRadioQueryParams } from "@/lib/hooks";
import FilterHeader from "../FilterHeader";
import FilterLayout from "../FilterLayout";
import FilterRadio from "./FilterRadio";
import { FuelSelects } from "@/lib/constants";

const FilterFuel = () => {
  //Filter Fuel
  const { query: fuel, setQuery: setFuel } = useRadioQueryParams(
    "fuel",
    "",
    FuelSelects
  );

  const selectedFuels = fuel.trim() === "" ? [] : fuel.trim().split(",");
  return (
    <FilterLayout>
      <FilterHeader
        filterTitle="Fuel"
        handleResetClick={() => {
          if (selectedFuels.length > 0) setFuel(null);
        }}
      />
      <div className="mt-5">
        <FilterRadio
          selectedValues={selectedFuels}
          selections={FuelSelects}
          setValue={setFuel}
        />
      </div>
    </FilterLayout>
  );
};
export default FilterFuel;
