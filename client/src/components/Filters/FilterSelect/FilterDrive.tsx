"use client";
import { useRadioQueryParams } from "@/lib/hooks";
import FilterHeader from "../FilterHeader";
import FilterLayout from "../FilterLayout";
import FilterRadio from "./FilterRadio";
import { DriveSelects } from "@/lib/constants";

const FilterDrive = () => {
  //Filter Drive
  const { query: drive, setQuery: setDrive } = useRadioQueryParams(
    "drive",
    "",
    DriveSelects
  );
  const selectedDrives = drive.trim() === "" ? [] : drive.trim().split(",");
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
          selections={DriveSelects}
          setValue={setDrive}
        />
      </div>
    </FilterLayout>
  );
};
export default FilterDrive;
