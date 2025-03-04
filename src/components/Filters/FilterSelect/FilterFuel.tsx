"use client";
import FilterHeader from "../FilterHeader";
import FilterLayout from "../FilterLayout";
import FilterRadio from "./FilterRadio";

const FilterFuel = ({ query, selections, setValue: setFuel }: FilterSelect) => {
  const selectedFuels = query.trim() === "" ? [] : query.trim().split(",");
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
          selections={selections}
          setValue={setFuel}
        />
      </div>
    </FilterLayout>
  );
};
export default FilterFuel;
