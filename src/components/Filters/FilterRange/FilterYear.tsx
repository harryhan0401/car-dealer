"use client";
import FilterHeader from "../FilterHeader";
import FilterLayout from "../FilterLayout";
import FilterAmount from "./FilterAmount";

interface FilterYearProps {
  minAmount: number;
  maxAmount: number;
  range: string;
  setRange: (value: string | null) => void;
}
const FilterYear = ({
  minAmount,
  maxAmount,
  range,
  setRange,
}: FilterYearProps) => {
  return (
    <FilterLayout>
      <FilterHeader
        filterTitle="Vehicle year"
        handleResetClick={() => {
          if (range !== `${minAmount}-${maxAmount}`) setRange(null);
        }}
      />
      <div className="mt-5">
        <FilterAmount
          minAmount={minAmount}
          maxAmount={maxAmount}
          range={range}
          setRange={setRange}
          inputName={"year-input"}
          hasSlider={false}
          hasChart={false}
        />
      </div>
    </FilterLayout>
  );
};
export default FilterYear;
