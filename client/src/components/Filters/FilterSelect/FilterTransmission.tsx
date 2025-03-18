"use client";
import { useRadioQueryParams } from "@/lib/hooks";
import FilterHeader from "../FilterHeader";
import FilterLayout from "../FilterLayout";
import FilterRadio from "./FilterRadio";
import { TransmissionSelects } from "@/lib/constants";

const FilterTransmission = () => {
  //Filter Transmission
  const { query: transmission, setQuery: setTransmission } =
    useRadioQueryParams("transmission", "", TransmissionSelects);
  const selectedTransmission =
    transmission.trim() === "" ? [] : transmission.trim().split(",");
  return (
    <FilterLayout>
      <FilterHeader
        filterTitle="Transmission"
        isDisabled={selectedTransmission.length === 0}
        handleResetClick={() => {
          if (selectedTransmission.length > 0) setTransmission(null);
        }}
      />
      <div className="mt-5">
        <FilterRadio
          selectedValues={selectedTransmission}
          selections={TransmissionSelects}
          setValue={setTransmission}
        />
      </div>
    </FilterLayout>
  );
};
export default FilterTransmission;
