"use client";
import CarsList from "@/components/CarsList";
import CarTypes from "@/components/Filters/FilterType";
import Filters from "@/components/Filters/Filters";
import { useAppSelector } from "@/state/redux";

export default function Home() {
  const totalSellCars = useAppSelector(({ global }) => global.sellCarCount);

  return (
    <div className="w-full flex flex-col gap-10 px-10 py-8">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex lg:flex-start items-center lg:items-start gap-5">
          <div className="me-auto lg:me-0 text-6xl">Buy a car</div>
          <div className="min-w-[50px] w-[100px] lg:min-w-0 text-center lg:max-w-fit lg:mt-2 py-2 px-3 bg-primary text-white font-light rounded-lg text-2xl lg:text-sm">
            {totalSellCars}
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-2">
          <CarTypes />
        </div>
      </div>
      <div className="lg:flex lg:gap-10">
        <div className="hidden lg:block lg:flex-1/3 xl:flex-1/4">
          <Filters />
        </div>
        <div className="lg:flex-2/3 xl:flex-3/4">
          <CarsList />
        </div>
      </div>
    </div>
  );
}
