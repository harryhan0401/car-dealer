"use client";

import { useEffect, useMemo, useState } from "react";
import CarsListGridLayout from "./CarsListGridLayout";
import CarsListMapLayout from "./CarsListMapLayout";
import { Button } from "@/components/ui/button";
import { GridIcon, MapIcon } from "lucide-react";
import { useGetCarListingsQuery } from "@/state/api";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { useQueryState } from "nuqs";
import {
  useAmountRangeParam,
  useMakeModelsParam,
  useSelectParam,
} from "@/lib/hooks";
import {
  setFilteredCarListings,
  setIsFiltersOpen,
  setCarListingCount,
} from "@/state";

const CarsList = () => {
  // State to manage the view mode (grid or map)
  const [viewMode, setViewMode] = useState<"grid" | "maps">("grid");

  //Fetch Car List
  const { data: carListings, isFetching: carFetching } = useGetCarListingsQuery();

  //Redux toolkit
  const dispatch = useAppDispatch();
  const isFiltersOpen = useAppSelector(({ global }) => global.isFiltersOpen);

  //Retrieve all filter query params for car
  const [type] = useQueryState("type");
  const [makes, models] = useMakeModelsParam("makeModels", carListings!);
  const [minPrice, maxPrice] = useAmountRangeParam("price_range");
  const [minMileage, maxMileage] = useAmountRangeParam("mileage_range");
  const fuel = useSelectParam("fuel");
  const transmission = useSelectParam("transmission");
  const drive = useSelectParam("drive");
  const [minYear, maxYear] = useAmountRangeParam("year");
  //

  /*
    Filtering car based on filter applied (useMemo to ensure that list of filtered car 
    is rerendered when one of the filters applied).
     */

  const filteredCars = useMemo(() => {
    if (carListings) {
      return carListings.filter(
        (carListing) =>
          (!type || carListing.car.type.toLowerCase() === type.toLowerCase()) &&
          (!makes.length || makes.includes(carListing.car.make)) &&
          (!models.length || models.includes(carListing.car.model)) &&
          (!minPrice || carListing.price >= Number(minPrice)) &&
          (!maxPrice || carListing.price <= Number(maxPrice)) &&
          (!minMileage || carListing.mileage >= Number(minMileage)) &&
          (!maxMileage || carListing.mileage <= Number(maxMileage)) &&
          (!fuel || fuel.includes(carListing.car.fuel.toLowerCase())) &&
          (!transmission ||
            transmission.includes(carListing.car.transmission.toLowerCase())) &&
          (!drive ||
            drive.includes(carListing.car.drive) ||
            (drive.includes("4WD") &&
              carListing.car.drive.toLowerCase() === "fourwd")) &&
          (!minYear || carListing.car.year >= Number(minYear)) &&
          (!maxYear || carListing.car.year <= Number(maxYear))
      );
    }
    return []; // Return an empty array instead of undefined
  }, [
    carListings, // Ensure carListings is included in the dependency array
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

  useEffect(() => {
    if (!carFetching) {
      dispatch(setCarListingCount(filteredCars.length));
      dispatch(setFilteredCarListings(filteredCars));
    }
  }, [filteredCars]);
  return (
    <>
      <div className="w-full card">
        <div className="flex items-center justify-between">
          <Button
            onClick={() => {
              dispatch(setIsFiltersOpen(!isFiltersOpen));
            }}
            variant="outline"
            className="hidden lg:block lg:me-auto"
          >
            {isFiltersOpen ? "Close Filters" : "Advanced Filters"}
          </Button>
          <div className="flex items-center justify-between w-full lg:justify-end">
            <Button
              onClick={() => setViewMode("grid")}
              variant={"outline"}
              className={`rounded-none rounded-l-lg flex-1 lg:flex-0 ${
                viewMode === "grid" && "bg-gray-200"
              }`}
            >
              Grid View
              <GridIcon />
            </Button>
            <Button
              onClick={() => setViewMode("maps")}
              variant={"outline"}
              className={`rounded-none rounded-r-lg flex-1 lg:flex-0 ${
                viewMode !== "grid" && "bg-gray-200"
              }`}
            >
              Map View
              <MapIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className={`w-full ${viewMode !== "grid" && "card"}`}>
        {viewMode === "grid" ? (
          <CarsListGridLayout itemsPerPage={7} />
        ) : (
          <CarsListMapLayout />
        )}
      </div>
    </>
  );
};
export default CarsList;
