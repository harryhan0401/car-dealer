"use client";
import FilterHeader from "../FilterHeader";
import FilterLayout from "../FilterLayout";
import FilterRadio from "./FilterRadio";

const FilterTransmission = ({
  query,
  selections,
  setValue: setTransmission,
}: FilterSelect) => {
  const selectedTransmission =
    query.trim() === "" ? [] : query.trim().split(",");
  return (
    <FilterLayout>
      <FilterHeader
        filterTitle="Transmission"
        handleResetClick={() => {
          if (selectedTransmission.length > 0) setTransmission(null);
        }}
      />
      <div className="mt-5">
        <FilterRadio
          selectedValues={selectedTransmission}
          selections={selections}
          setValue={setTransmission}
        />
      </div>
    </FilterLayout>
  );
};
export default FilterTransmission;
