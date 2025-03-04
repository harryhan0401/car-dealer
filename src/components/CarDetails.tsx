"use client";
import { useAmountRangeParam, useSelectParam } from "@/lib/hooks";
import VerticalCarCard from "./Cards/VerticalCarCard";
import { useMemo } from "react";
import ProductPagination from "./Pagination";

const CarDetails = ({ cars }: { cars: CarType[] }) => {
  //Retrieve all query params for car
  const [minPrice, maxPrice] = useAmountRangeParam("amount_range");
  const [minMileage, maxMileage] = useAmountRangeParam("mileage_range");
  console.log(minMileage, maxMileage);
  const fuel = useSelectParam("fuel");
  const transmission = useSelectParam("transmission");
  const drive = useSelectParam("drive");
  const [minYear, maxYear] = useAmountRangeParam("year");

  /*
  Filtering car based on filter applied (useMemo to ensure that list of filtered car 
  is rerendered when one of the filters applied).
   */
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

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {filteredCars.slice(0, 10).map(({ ...rest }) => (
          <VerticalCarCard key={Math.random()} {...rest} />
        ))}
      </div>
      <div className="mt-5 me-2">
        <ProductPagination numOfItems={filteredCars.length} itemsPerPage={5} />
      </div>
    </>
  );
};
export default CarDetails;
