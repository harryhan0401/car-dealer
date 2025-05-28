"use client";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import FilterHeader from "../FilterHeader";
import FilterLayout from "../FilterLayout";
import Modal from "./Modal";
import {
  convertToMakeModelsString,
  getMakeImage,
  parseFilterMakeModels,
} from "@/lib/utils";
import { useQueryState } from "nuqs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SellCar } from "@/types/prismaTypes";
import { setUniqueMakes } from "@/state";
import { Button } from "@/components/ui/button";

export default function FilterMakesModels({
  sellCars,
}: {
  sellCars: SellCar[];
}) {
  const dispatch = useDispatch();
  //Filter Make and Model
  const [makeModels, setMakeModels] = useQueryState("makeModels", {
    defaultValue: "",
  });

  let filteredMakesModels = makeModels
    ? parseFilterMakeModels(makeModels, sellCars)
    : [];

  const removeFilteredMake = (make: string) => {
    const updatedMakesModels = filteredMakesModels.filter(
      (o) => o.make !== make
    );
    setMakeModels(convertToMakeModelsString(updatedMakesModels));
  };

  useEffect(() => {
    if (sellCars) {
      const uniqueMakes = Array.from(
        new Set(sellCars.map((sellCar) => sellCar.car.make))
      );
      dispatch(setUniqueMakes(uniqueMakes));
    }
  }, [sellCars]);
  return (
    <FilterLayout>
      <FilterHeader
        filterTitle="Make and model"
        isDisabled={filteredMakesModels.length === 0}
        handleResetClick={() => {
          if (filteredMakesModels.length !== 0) setMakeModels(null);
        }}
      />
      <div className="flex flex-col gap-3 mt-5">
        {filteredMakesModels.map(({ make, models }) => (
          <div key={make} className="border-black border-2 rounded-lg">
            <div className="flex w-full items-center px-4 py-1">
              <div className="me-auto flex items-center gap-4">
                <Image
                  src={getMakeImage(make)}
                  width={24}
                  height={24}
                  alt={make.charAt(0) + make.slice(1) + " Logo"}
                />
                <div className="max-w-[150px]">
                  <h2>{make == "MercedesBenz" ? "Mercedes-Benz" : make}</h2>
                  <p className="text-[#bcbcbc] text-sm truncate ">
                    {models.join(", ")}
                  </p>
                </div>
              </div>
              <button
                className="bg-black text-white rounded-full p-1 cursor-pointer active:scale-95 transition-transform duration-300 ease-in-out"
                onClick={() => removeFilteredMake(make)}
              >
                <X className="size-3" />
              </button>
            </div>
          </div>
        ))}
        <Modal sellCars={sellCars} filteredMakesModels={filteredMakesModels}>
          <Button className="w-full font-light">
            <span>
              <Plus />
            </span>
            Add model
          </Button>
        </Modal>
      </div>
    </FilterLayout>
  );
}
