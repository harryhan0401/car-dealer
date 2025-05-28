"use client";
import { useAppSelector } from "@/state/redux";

const CarsTotal = () => {
  const totalSellCars = useAppSelector(({ global }) => global.sellCarCount);

  return (
    <div className="min-w-[50px] w-[100px] lg:min-w-0 text-center lg:max-w-fit lg:mt-2 py-2 px-3 bg-primary text-white font-light rounded-lg text-2xl lg:text-sm">
      {totalSellCars}
    </div>
  );
};
export default CarsTotal;
