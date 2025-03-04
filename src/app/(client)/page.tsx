import CarDetails from "@/components/CarDetails";
import VerticalCarCard from "@/components/Cards/VerticalCarCard";
import CarTypes from "@/components/Filters/CarTypes";
import Filters from "@/components/Filters/Filters";
import { cars } from "@/lib/db";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-10 px-10 py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-5">
          <div className="text-6xl">Buy a car</div>
          <div className="w-[75px] mt-2 max-w-fit py-2 px-3 bg-primary text-white font-light rounded-lg text-sm">
            {cars.length}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <CarTypes />
        </div>
      </div>
      <div className="flex gap-10">
        <div className="flex-1/4 flex flex-col gap-5">
          <Filters cars={cars} />
        </div>
        <div className="flex-3/4">
          <CarDetails cars={cars} />
        </div>
      </div>
    </div>
  );
}
