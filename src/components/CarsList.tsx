"use client";
import { useAmountRangeParam, useSelectParam } from "@/lib/hooks";
import VerticalCarCard from "./Cards/VerticalCarCard";
import { useMemo } from "react";
import ProductPagination from "./Pagination";
import { useQueryState } from "nuqs";

const CarsList = ({
  cars,
  itemsPerPage = 6, //If don't pass nay value to itemsPerPage prop, its default value is 6
}: {
  cars: CarType[];
  itemsPerPage?: number;
}) => {
  //Retrieve all filter query params for car
  const [type] = useQueryState("type");
  const [minPrice, maxPrice] = useAmountRangeParam("amount_range");
  const [minMileage, maxMileage] = useAmountRangeParam("mileage_range");
  const fuel = useSelectParam("fuel");
  const transmission = useSelectParam("transmission");
  const drive = useSelectParam("drive");
  const [minYear, maxYear] = useAmountRangeParam("year");
  const [currentPage] = useQueryState("page");

  //Calculate the next range of cars to be displayed
  const startIndex = currentPage ? (Number(currentPage) - 1) * itemsPerPage : 0;
  const endIndex = startIndex + itemsPerPage;

  /*
  Filtering car based on filter applied (useMemo to ensure that list of filtered car 
  is rerendered when one of the filters applied).
   */
  const filteredCars = useMemo(() => {
    return cars.filter(
      (car) =>
        (!type || car.type.toLowerCase() === type.toLowerCase()) &&
        (!minPrice || car.price >= Number(minPrice)) &&
        (!maxPrice || car.price <= Number(maxPrice)) &&
        (!minMileage || car.mileage >= Number(minMileage)) &&
        (!maxMileage || car.mileage <= Number(maxMileage)) &&
        (!fuel || fuel.includes(car.fuel.toLowerCase())) &&
        (!transmission ||
          transmission.includes(car.transmission.toLowerCase())) &&
        (!drive || drive.includes(car.drive)) &&
        (!minYear || car.year >= minYear) &&
        (!maxYear || car.year <= maxYear)
    );
  }, [
    type,
    minPrice,
    maxPrice,
    minMileage,
    maxMileage,
    fuel,
    transmission,
    drive,
    minYear,
    maxYear,
    currentPage,
  ]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {filteredCars.slice(startIndex, endIndex).map(({ ...rest }) => (
          <VerticalCarCard key={Math.random()} {...rest} />
        ))}
      </div>
      <div className="mt-5 me-2">
        <ProductPagination
          numOfItems={filteredCars.length}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </>
  );
};
export default CarsList;
