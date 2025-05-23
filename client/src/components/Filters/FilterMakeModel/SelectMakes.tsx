"use client";
import { MouseEvent } from "react";
import { useAppSelector } from "@/state/redux";
import { getUniqueModelsByMake } from "@/lib/utils";
import { StepType } from "@/lib/types";

const SelectMakes = ({
  selectedMakesModels,
  setSelectedMakesModels,
  sellCars,
}: StepType) => {
  const uniqueMakes = useAppSelector(({ global }) => global.uniqueMakes);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const value = (event.target as HTMLButtonElement).getAttribute("value");
    if (value) {
      if (selectedMakesModels.some((makeModel) => makeModel.make === value)) {
        setSelectedMakesModels(
          selectedMakesModels.filter((makeModel) => makeModel.make !== value)
        );
      } else {
        const modelOptions = getUniqueModelsByMake(sellCars, value);
        setSelectedMakesModels([
          ...selectedMakesModels,
          { make: value, models: modelOptions },
        ]);
      }
    }
  };
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3">
      {uniqueMakes.map((make) => (
        <button
          key={make + "- modal"}
          value={make}
          className={`card h-[200px] grid justify-center items-center active:scale-95 transform duration-300 ease-in-out ${selectedMakesModels.some((makeModel) => makeModel.make === make) ? "border-black border" : ""}`}
          onClick={(event) => handleClick(event)}
        >
          {make === "MercedesBenz" ? "Mercedes-Benz" : make}
        </button>
      ))}
    </div>
  );
};
export default SelectMakes;
