"use client";
import FilterAmount from "./FilterAmount";
import FilterHeader from "../FilterHeader";
import { getHistogramData, getValuesForKey } from "@/lib/utils";
import FilterLayout from "../FilterLayout";
import { FilterRangeProps } from "./FilterPrice";
import { useRangeQueryParams } from "@/lib/hooks";
import { useMemo } from "react";

const FilterMileage = ({ saleCars }: FilterRangeProps) => {
  //Filter Mileage
  const [minMileage, maxMileage] = useMemo(() => {
    const amounts = saleCars.map((car) => car.mileage);
    return [Math.floor(Math.min(...amounts)), Math.ceil(Math.max(...amounts))];
  }, [saleCars]);
  const { query: mileageRange, setQuery: setMileageRange } =
    useRangeQueryParams("mileage_range", minMileage, maxMileage);
  const data = getValuesForKey(saleCars, "mileage");
  const distributionData = getHistogramData(15, data);
  return (
    <FilterLayout>
      <FilterHeader
        filterTitle="Mileage"
        handleResetClick={() => {
          if (mileageRange !== `${minMileage}-${maxMileage}`)
            setMileageRange(null);
        }}
      />
      <div className="mt-8">
        <FilterAmount
          data={distributionData}
          minAmount={minMileage}
          maxAmount={maxMileage}
          range={mileageRange}
          setRange={setMileageRange}
          inputName="mileage-input"
        />
      </div>
    </FilterLayout>
  );
};
export default FilterMileage;
