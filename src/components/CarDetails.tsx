"use client";
import { useAmountRangeParam, useSelectParam } from "@/lib/hooks";
import VerticalCarCard from "./Cards/VerticalCarCard";
import { useMemo, useState } from "react";

const CarDetails = ({ cars }: { cars: CarType[] }) => {
  const [minPrice, maxPrice] = useAmountRangeParam("amount_range");
  const [minMileage, maxMileage] = useAmountRangeParam("mileage_range");
  console.log(minMileage, maxMileage);
  const fuel = useSelectParam("fuel");
  const transmission = useSelectParam("transmission");
  const drive = useSelectParam("drive");
  const [minYear, maxYear] = useAmountRangeParam("year");
  const filteredCars = useMemo(() => {
    return cars.filter(
      (car) =>
        (!minPrice || car.price >= Number(minPrice)) &&
        (!maxPrice || car.price <= Number(maxPrice)) &&
        (!minMileage || car.mileage >= Number(minMileage)) &&
        (!maxMileage || car.mileage <= Number(maxMileage)) &&
        (!fuel || fuel.includes(car.fuel.toLowerCase())) &&
        (!transmission ||
          transmission.includes(car.transmission.toLowerCase())) &&
        (!drive || drive.includes(car.drive.toLowerCase())) &&
        (!minYear || car.year >= minYear) &&
        (!maxYear || car.year <= maxYear)
    );
  }, [
    minPrice,
    maxPrice,
    minMileage,
    maxMileage,
    fuel,
    transmission,
    drive,
    minYear,
    maxYear,
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {filteredCars.slice(0, 10).map(({ ...rest }) => (
        <VerticalCarCard key={Math.random()} {...rest} />
      ))}
    </div>
  );
};
export default CarDetails;
