"use client";
import { useMemo } from "react";
import FilterHeader from "../FilterHeader";
import FilterLayout from "../FilterLayout";
import FilterAmount from "./FilterAmount";
import { FilterRangeProps } from "./FilterPrice";
import { useRangeQueryParams } from "@/lib/hooks";
const FilterYear = ({ carListings }: FilterRangeProps) => {
  //Filter Year
  const [minYear, maxYear] = useMemo(() => {
    const amounts = carListings.map((carListing) => carListing.car.year);
    return [Math.min(...amounts), Math.max(...amounts)];
  }, [carListings]);
  const { query: yearRange, setQuery: setYearRange } = useRangeQueryParams(
    "year",
    minYear,
    maxYear
  );
  return (
    <FilterLayout>
      <FilterHeader
        filterTitle="Vehicle year"
        isDisabled={yearRange === `${minYear}-${maxYear}`}
        handleResetClick={() => {
          if (yearRange !== `${minYear}-${maxYear}`) setYearRange(null);
        }}
      />
      <div className="mt-5">
        <FilterAmount
          minAmount={minYear}
          maxAmount={maxYear}
          range={yearRange}
          setRange={setYearRange}
          inputName={"year-input"}
          hasSlider={false}
          hasChart={false}
        />
      </div>
    </FilterLayout>
  );
};
export default FilterYear;
