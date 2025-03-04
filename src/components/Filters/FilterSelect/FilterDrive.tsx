"use client";
import FilterHeader from "../FilterHeader";
import FilterLayout from "../FilterLayout";
import FilterRadio from "./FilterRadio";

const FilterDrive = ({
  query,
  selections,
  setValue: setDrive,
}: FilterSelect) => {
  const selectedDrives = query.trim() === "" ? [] : query.trim().split(",");
  return (
    <FilterLayout>
      <FilterHeader
        filterTitle="Drive"
        handleResetClick={() => {
          if (selectedDrives.length > 0) setDrive(null);
        }}
      />
      <div className="mt-5">
        <FilterRadio
          selectedValues={selectedDrives}
          selections={selections}
          setValue={setDrive}
        />
      </div>
    </FilterLayout>
  );
};
export default FilterDrive;
