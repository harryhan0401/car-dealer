"use client";
import { cars } from "@/lib/db";
import { MouseEvent } from "react";
import { MakesProps } from "./Modal";

const SelectMakes = ({
  selectedMakesModels,
  setSelectedMakesModels,
}: MakesProps) => {
  const uniqueMakes = Array.from(new Set(cars.map((car) => car.make)));
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const value = (event.target as HTMLButtonElement).getAttribute("value");
    if (value) {
      if (selectedMakesModels.some((makeModel) => makeModel.make === value)) {
        setSelectedMakesModels(
          selectedMakesModels.filter((makeModel) => makeModel.make !== value)
        );
      } else {
        setSelectedMakesModels([
          ...selectedMakesModels,
          { make: value, models: [] },
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
          {make}
        </button>
      ))}
    </div>
  );
};
export default SelectMakes;
