"use client";
import FilterAmount from "./FilterAmount";
import FilterHeader from "../FilterHeader";
import { getHistogramData, getValuesForKey } from "@/lib/utils";
import FilterLayout from "../FilterLayout";
import { useMemo } from "react";
import { useRangeQueryParams } from "@/lib/hooks";
import { CarListing } from "@/types/prismaTypes";

export interface FilterRangeProps {
  carListings: CarListing[];
}
const FilterPrice = ({ carListings }: FilterRangeProps) => {
  //Filter Price
  const [minPrice, maxPrice] = useMemo(() => {
    const amounts = carListings.map((car) => car.price);
    return [Math.floor(Math.min(...amounts)), Math.ceil(Math.max(...amounts))];
  }, [carListings]);
  const { query: priceRange, setQuery: setPriceRange } = useRangeQueryParams(
    "price_range",
    minPrice,
    maxPrice
  );
  const data = getValuesForKey(carListings, "price");
  const distributionData = getHistogramData(15, data);

  return (
    <FilterLayout>
      <FilterHeader
        filterTitle="Price"
        isDisabled={priceRange === `${minPrice}-${maxPrice}`}
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
