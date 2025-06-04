"use client";

import { useEffect, useMemo, useState } from "react";
import CarsListGridLayout from "./CarsListGridLayout";
import CarsListMapLayout from "./CarsListMapLayout";
import { Button } from "@/components/ui/button";
import { GridIcon, MapIcon } from "lucide-react";
import { useGetSellCarsQuery } from "@/state/api";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { useQueryState } from "nuqs";
import {
  useAmountRangeParam,
  useMakeModelsParam,
  useSelectParam,
} from "@/lib/hooks";
import { setFilteredSellCars, setIsFiltering, setSellCarCount } from "@/state";

const CarsList = () => {
  // State to manage the view mode (grid or map)
  const [viewMode, setViewMode] = useState<"grid" | "maps">("grid");

  //Fetch Car List
  const { data: sellCars, isFetching: carFetching } = useGetSellCarsQuery();

  //Redux toolkit
  const dispatch = useAppDispatch();
  const isFiltering = useAppSelector((state) => state.global.isFiltering);

  //Retrieve all filter query params for car
  const [type] = useQueryState("type");
  const [makes, models] = useMakeModelsParam("makeModels", sellCars!);
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
    if (sellCars) {
      return sellCars.filter(
        (sellCar) =>
          (!type || sellCar.car.type.toLowerCase() === type.toLowerCase()) &&
          (!makes.length || makes.includes(sellCar.car.make)) &&
          (!models.length || models.includes(sellCar.car.model)) &&
          (!minPrice || sellCar.price >= Number(minPrice)) &&
          (!maxPrice || sellCar.price <= Number(maxPrice)) &&
          (!minMileage || sellCar.mileage >= Number(minMileage)) &&
          (!maxMileage || sellCar.mileage <= Number(maxMileage)) &&
          (!fuel || fuel.includes(sellCar.car.fuel.toLowerCase())) &&
          (!transmission ||
            transmission.includes(sellCar.car.transmission.toLowerCase())) &&
          (!drive ||
            drive.includes(sellCar.car.drive) ||
            (drive.includes("4WD") &&
              sellCar.car.drive.toLowerCase() === "fourwd")) &&
          (!minYear || sellCar.car.year >= Number(minYear)) &&
          (!maxYear || sellCar.car.year <= Number(maxYear))
      );
    }
    return []; // Return an empty array instead of undefined
  }, [
    sellCars, // Ensure sellCars is included in the dependency array
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
      dispatch(setSellCarCount(filteredCars.length));
      dispatch(setFilteredSellCars(filteredCars));
    }
  }, [filteredCars]);
  return (
    <div className="card w-full">
      <div className="flex justify-between items-center mb-4">
        <Button
          onClick={() => {
            dispatch(setIsFiltering(!isFiltering));
          }}
          variant="outline"
        >
          {isFiltering ? "Hide Filters" : "Show Filters"}
        </Button>
        <div className="flex items-center">
          <Button
            onClick={() => setViewMode("grid")}
            variant={"outline"}
            className={`rounded-none rounded-l-lg ${
              viewMode === "grid" && "bg-gray-200"
            }`}
          >
            Views in grid
            <GridIcon />
          </Button>
          <Button
            onClick={() => setViewMode("maps")}
            variant={"outline"}
            className={`rounded-none rounded-r-lg ${
              viewMode !== "grid" && "bg-gray-200"
            }`}
          >
            Views in map
            <MapIcon />
          </Button>
        </div>
      </div>
      {viewMode === "grid" ? (
        <CarsListGridLayout itemsPerPage={7} />
      ) : (
        <CarsListMapLayout />
      )}
    </div>
  );
};
export default CarsList;
