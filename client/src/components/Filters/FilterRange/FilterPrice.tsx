"use client";
import FilterAmount from "./FilterAmount";
import FilterHeader from "../FilterHeader";
import { getHistogramData, getValuesForKey } from "@/lib/utils";
import FilterLayout from "../FilterLayout";
import { useMemo } from "react";
import { useRangeQueryParams } from "@/lib/hooks";

export interface FilterRangeProps {
  cars: CarType[];
}
const FilterPrice = ({ cars }: FilterRangeProps) => {
  //Filter Price
  const [minPrice, maxPrice] = useMemo(() => {
    const amounts = cars.map((car) => car.price);
    return [Math.floor(Math.min(...amounts)), Math.ceil(Math.max(...amounts))];
  }, [cars]);
  const { query: priceRange, setQuery: setPriceRange } = useRangeQueryParams(
    "price_range",
    minPrice,
    maxPrice
  );
  const data = getValuesForKey(cars, "price");
  const distributionData = getHistogramData(15, data);

  return (
    <FilterLayout>
      <FilterHeader
        filterTitle="Price"
        handleResetClick={() => {
          if (priceRange !== `${minPrice}-${maxPrice}`) setPriceRange(null);
        }}
      />
      <div className="mt-8">
        <FilterAmount
          data={distributionData}
          minAmount={minPrice}
          maxAmount={maxPrice}
          range={priceRange}
          setRange={setPriceRange}
          inputName="price-input"
        />
      </div>
    </FilterLayout>
  );
};
export default FilterPrice;
