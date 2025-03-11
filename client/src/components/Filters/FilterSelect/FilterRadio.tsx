"use client";

import { capitalizeFirstLetter } from "@/lib/utils";

interface FilterRadioProps {
  selectedValues: string[];
  selections: string[];
  setValue: (value: string) => void;
}
const FilterRadio = ({
  selectedValues,
  selections,
  setValue,
}: FilterRadioProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = (event.target as HTMLButtonElement).getAttribute("value");
    if (value) {
      if (selectedValues.includes(value)) {
        setValue(selectedValues.filter((o) => o !== value).join(",")); // If value is selected, remove it
      } else {
        setValue([...selectedValues, value].join(",")); //If value is not selected, add it
      }
    }
  };
  return (
    <div className="flex gap-2 flex-wrap">
      {selections.map((selection) => (
        <button
          className={`px-3 py-2 border-black border rounded-md ${selectedValues.includes(selection) ? "bg-transparent" : "bg-neutral cursor-pointer transition-all ease-in-out duration-300"}`}
          key={selection}
          onClick={handleClick}
          value={selection}
        >
          {capitalizeFirstLetter(selection)}
        </button>
      ))}
    </div>
  );
};
export default FilterRadio;
