"use client";
import {
  useAmountRangeParam,
  useMakeModelsParam,
  useSelectParam,
} from "@/lib/hooks";
import CarCard from "./Cards/CarCard";
import { useMemo } from "react";
import ProductPagination from "./Pagination";
import { useQueryState } from "nuqs";
import { useGetAllSaleCarsQuery, useGetSaleCarsCountQuery } from "@/state/api";
import { Skeleton } from "./ui/skeleton";

interface CarsListProps {
  itemsPerPage?: number;
}
const CarsList = ({
  itemsPerPage = 6, //If don't pass nay value to itemsPerPage prop, its default value is 6
}: CarsListProps) => {
  const [currentPage] = useQueryState("page");

  //Calculate the next range of cars to be displayed
  const startIndex = currentPage ? (Number(currentPage) - 1) * itemsPerPage : 0;
  const endIndex = startIndex + itemsPerPage;

  //Retrieve all filter query params for car
  const [type] = useQueryState("type");
  const [makes, models] = useMakeModelsParam("makeModels");
  const [minPrice, maxPrice] = useAmountRangeParam("price_range");
  const [minMileage, maxMileage] = useAmountRangeParam("mileage_range");
  const fuel = useSelectParam("fuel");
  const transmission = useSelectParam("transmission");
  const drive = useSelectParam("drive");
  const [minYear, maxYear] = useAmountRangeParam("year");
  //

  //Fetch Car List
  const { data: totalSaleCars } = useGetSaleCarsCountQuery();
  const { data: saleCars, isFetching: carFetching } = useGetAllSaleCarsQuery();
  /*
  Filtering car based on filter applied (useMemo to ensure that list of filtered car 
  is rerendered when one of the filters applied).
   */

  const filteredCars = useMemo(() => {
    if (saleCars) {
      return saleCars.filter(
        (saleCar) =>
          (!type || saleCar.car.type.toLowerCase() === type.toLowerCase()) &&
          (!makes.length || makes.includes(saleCar.car.make)) &&
          (!models.length || models.includes(saleCar.car.model)) &&
          (!minPrice || saleCar.price >= Number(minPrice)) &&
          (!maxPrice || saleCar.price <= Number(maxPrice)) &&
          (!minMileage || saleCar.mileage >= Number(minMileage)) &&
          (!maxMileage || saleCar.mileage <= Number(maxMileage)) &&
          (!fuel || fuel.includes(saleCar.car.fuel.toLowerCase())) &&
          (!transmission ||
            transmission.includes(saleCar.car.transmission.toLowerCase())) &&
          (!drive ||
            drive.includes(saleCar.car.drive) ||
            (drive.includes("4WD") &&
              saleCar.car.drive.toLowerCase() === "fourwd")) &&
          (!minYear || saleCar.car.year >= Number(minYear)) &&
          (!maxYear || saleCar.car.year <= Number(maxYear))
      );
    }
    return []; // Return an empty array instead of undefined
  }, [
    saleCars, // Ensure saleCars is included in the dependency array
    type,
    makes,
    models,
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

  const isFiltered =
    !type ||
    makes.length > 0 ||
    models.length > 0 ||
    !fuel ||
    !transmission ||
    !drive;

  return (
    <>
      {carFetching && filteredCars?.length == 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {Array.from({ length: 6 }, (_, index) => (
            <Skeleton key={index} className="h-[900px] lg:h-[500px] w-full" />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredCars
              ?.slice(startIndex, endIndex)
              .map((car, index) => (
                <CarCard key={car.id} {...car} index={index} />
              ))}
          </div>
          <div className="mt-5 me-2">
            <ProductPagination
              numOfItems={
                isFiltered
                  ? filteredCars.length
                  : totalSaleCars
                    ? totalSaleCars
                    : 0
              }
              itemsPerPage={itemsPerPage}
            />
          </div>
        </>
      )}
    </>
  );
};
export default CarsList;

// const take = 40;
// const [skip, setSkip] = useState(0);

//Fetch Car List
// const { data: saleCars, isFetching } = useGetSaleCarsQuery({
//   take,
//   skip,
// });

// const [displaySaleCars, setDisplaySaleCars] = useState<SaleCar[]>([]);

// useEffect(() => {
//   // Add more sale car data to the display list whenever fetching new set of sale car data
//   if (saleCars) {
//     setDisplaySaleCars((prev) => [...prev, ...saleCars]); // Concatenate the new sale car data with the existing display list
//   }
// }, [saleCars]);

// useEffect(() => {
//   // Check if the number of displayed sale cars is already equal or greater than the total sale cars.
//   // If so, skip further data fetching.
//   if (displaySaleCars.length >= totalSaleCars) return;
//   const page = Number(currentPage);

//   // Ensure that we are on a valid page where additional data is needed.
//   // This checks if the current page is nearing the limit of the already displayed cars
//   // and that no fetching operation is currently in progress.
//   if (
//     displaySaleCars.length > 0 &&
//     Math.ceil((page * itemsPerPage) / 10) * 10 >= displaySaleCars.length &&
//     !isFetching
//   ) {
//     // If there are more sale cars to load and not already fetching, initiate the next data request.
//     // Increase the skip value to load the next chunk of data and trigger the `getSaleCars` API.
//     if (skip + take < totalSaleCars) {
//       setSkip((prevSkip) => {
//         const newSkip = prevSkip + take;
//         // Trigger an API call to fetch additional sale cars based on the updated `skip` and `take`.

//         api.endpoints.getSaleCars.initiate({
//           skip: newSkip,
//           take,
//         });

//         // Return the new skip value to be used in future fetches.
//         return newSkip;
//       });
//     }
//   }
// }, [currentPage, displaySaleCars]); // The effect runs every time the `currentPage` value changes.
