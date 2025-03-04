"use client";
import MakesModels from "@/components/Filters/MakesModels";
import FilterPrice from "@/components/Filters/FilterRange/FilterPrice";
import FilterMileage from "@/components/Filters/FilterRange/FilterMileage";
import FilterFuel from "@/components/Filters/FilterSelect/FilterFuel";
import FilterDrive from "@/components/Filters/FilterSelect/FilterDrive";
import FilterYear from "@/components/Filters/FilterRange/FilterYear";
import { useRadioQueryParams, useRangeQueryParams } from "@/lib/hooks";
import { cars } from "@/lib/db";
import { useMemo } from "react";
import { DriveSelects, FuelSelects } from "@/lib/constants";
import { Button } from "../ui/button";

const Filters = () => {
  //Filter Price
  const [minPrice, maxPrice] = useMemo(() => {
    const amounts = cars.map((car) => car.price);
    return [Math.floor(Math.min(...amounts)), Math.ceil(Math.max(...amounts))];
  }, []);
  const { query: priceRange, setQuery: setPriceRange } = useRangeQueryParams(
    "amount_range",
    minPrice,
    maxPrice
  );
  //Filter Mileage
  const [minMileage, maxMileage] = useMemo(() => {
    const amounts = cars.map((car) => car.mileage);
    return [Math.floor(Math.min(...amounts)), Math.ceil(Math.max(...amounts))];
  }, []);
  const { query: mileageRange, setQuery: setMileageRange } =
    useRangeQueryParams("mileage_range", minMileage, maxMileage);
  //Filter Fuel

  const { query: fuel, setQuery: setFuel } = useRadioQueryParams(
    "fuel",
    "",
    FuelSelects
  );

  //Filter Drive
  const { query: drive, setQuery: setDrive } = useRadioQueryParams(
    "drive",
    "",
    DriveSelects
  );
  //Filter Year
  const [minYear, maxYear] = useMemo(() => {
    const amounts = cars.map((car) => car.year);
    return [Math.min(...amounts), Math.max(...amounts)];
  }, []);
  const { query: yearRange, setQuery: setYearRange } = useRangeQueryParams(
    "year",
    minYear,
    maxYear
  );

  const isFiltered =
    priceRange !== `${minPrice}-${maxPrice}` ||
    mileageRange !== `${minMileage}-${maxMileage}` ||
    fuel ||
    drive ||
    yearRange !== `${minYear}-${maxYear}`;

  return (
    <>
      <MakesModels />
      <FilterPrice
        cars={cars}
        range={priceRange}
        minAmount={minPrice}
        maxAmount={maxPrice}
        setRange={setPriceRange}
      />
      <FilterMileage
        cars={cars}
        range={mileageRange}
        minAmount={minMileage}
        maxAmount={maxMileage}
        setRange={setMileageRange}
      />
      <FilterFuel query={fuel} selections={FuelSelects} setValue={setFuel} />
      <FilterDrive
        query={drive}
        selections={DriveSelects}
        setValue={setDrive}
      />
      <FilterYear
        minAmount={minYear}
        maxAmount={maxYear}
        range={yearRange}
        setRange={setYearRange}
      />
      <Button
        className={`${isFiltered ? "bg-primary" : "bg-transparent text-primary border-primary border-2"} ${isFiltered ? "" : "pointer-events-none"} transition-all ease-in-out duration-300`}
        disabled={!isFiltered}
        onClick={() => {
          if (priceRange !== `${minPrice}-${maxPrice}`) setPriceRange(null);
          if (mileageRange !== `${minMileage}-${maxMileage}`)
            setMileageRange(null);
          if (fuel) setFuel(null);
          if (drive) setDrive(null);
          if (yearRange !== `${minYear}-${maxYear}`) setYearRange(null);
        }}
      >
        Reset all
      </Button>
    </>
  );
};
export default Filters;
