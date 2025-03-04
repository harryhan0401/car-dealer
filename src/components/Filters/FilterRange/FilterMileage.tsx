"use client";
import FilterAmount from "./FilterAmount";
import FilterHeader from "../FilterHeader";
import { getHistogramData, getValuesForKey } from "@/lib/utils";
import FilterLayout from "../FilterLayout";
import { FilterRangeProps } from "./FilterPrice";

const FilterMileage = ({
  cars,
  range,
  minAmount,
  maxAmount,
  setRange,
}: FilterRangeProps) => {
  const data = getValuesForKey(cars, "mileage");
  const distributionData = getHistogramData(15, data);
  return (
    <FilterLayout>
      <FilterHeader
        filterTitle="Mileage"
        handleResetClick={() => {
          if (range !== `${minAmount}-${maxAmount}`) setRange(null);
        }}
      />
      <div className="mt-8">
        <FilterAmount
          data={distributionData}
          minAmount={minAmount}
          maxAmount={maxAmount}
          range={range}
          setRange={setRange}
          inputName="mileage-input"
        />
      </div>
    </FilterLayout>
  );
};
export default FilterMileage;
