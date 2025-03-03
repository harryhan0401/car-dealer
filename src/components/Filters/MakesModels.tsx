import { Plus, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import FilterHeader from "./FilterHeader";

const makes = [
  {
    make: "Mercedes-Benz",
    models: ["A-Class", "C-Class", "E-Class", "S-Class"],
    logo: "/mercedes-logo.svg",
  },
  {
    make: "BMW",
    models: ["1 Series", "3 Series", "5 Series"],
    logo: "/bmw-logo.svg",
  },
  {
    make: "Audi",
    models: ["A3", "A4", "A6"],
    logo: "/audi-logo.svg",
  },
];
export default function MakesModels() {
  return (
    <div className="border-white bg-white p-5 drop-shadow-md rounded-lg">
      <FilterHeader filterTitle="Makes and Models" />
      <div className="flex flex-col gap-3 mt-5">
        {makes.map(({ make, models, logo }) => (
          <div key={make} className="border-black border-2 rounded-lg">
            <div className="flex w-full items-center px-4 py-1">
              <div className="me-auto flex items-center gap-4">
                <Image
                  src={logo}
                  width={24}
                  height={24}
                  alt={make.charAt(0) + make.slice(1) + " Logo"}
                />
                <div className="max-w-[150px]">
                  <div className="text-lg font-medium">{make}</div>
                  <p className="text-[#bcbcbc] truncate ">
                    {models.join(", ")}
                  </p>
                </div>
              </div>
              <button className="bg-black text-white rounded-full p-1 cursor-pointer active:scale-95 transition-transform duration-300 ease-in-out">
                <X className="size-3" />
              </button>
            </div>
          </div>
        ))}
        <Button className="w-full">
          <span>
            <Plus />
          </span>
          Add Model
        </Button>
      </div>
    </div>
  );
}
