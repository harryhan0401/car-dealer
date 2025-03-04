"use client";
import FilterAmount from "./FilterAmount";
import FilterHeader from "../FilterHeader";
import { getHistogramData, getValuesForKey } from "@/lib/utils";
import FilterLayout from "../FilterLayout";

export interface FilterRangeProps {
  cars: Car[];
  range: string;
  minAmount: number;
  maxAmount: number;
  setRange: (value: string | null) => void;
}
const FilterPrice = ({
  cars,
  range,
  minAmount,
  maxAmount,
  setRange,
}: FilterRangeProps) => {
  const data = getValuesForKey(cars, "price");
  const distributionData = getHistogramData(15, data);

  return (
    <FilterLayout>
      <FilterHeader
        filterTitle="Price"
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
          inputName="price-input"
        />
      </div>
    </FilterLayout>
  );
};
export default FilterPrice;
