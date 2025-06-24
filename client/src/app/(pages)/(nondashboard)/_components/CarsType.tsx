"use client";
import Image from "next/image";
import { useQueryState } from "nuqs";
import { MouseEvent } from "react";
import { CarTypes as Types } from "@/lib/constants";

export default function CarTypes() {
  const [type, setType] = useQueryState("type", {
    defaultValue: "",
    parse: (value) =>
      Types.find((carType) => carType.name === value) ? value : "",
    serialize: (value) => value,
  });

  const handleTypeClick = (event: MouseEvent<HTMLButtonElement>) => {
    const btn = event.target as HTMLButtonElement;
    if (btn) {
      const selectedType = btn.getAttribute("value");
      if (selectedType) {
        if (type.toLowerCase() === selectedType.toLowerCase()) {
          setType("");
        } else {
          setType(selectedType);
        }
      }
    }
  };
  return (
    <div className="flex items-center space-x-2">
      {Types.map(({ name, image }) => (
        <button
          key={name}
          value={name}
          className={`flex flex-col items-center border-2 rounded-xl transition-all duration-200 shadow-sm px-3 py-2
            ${
              type === name
                ? "border-primary bg-primary/10 shadow-lg scale-105 ring-2 ring-primary/20"
                : "border-gray-300 bg-white hover:border-primary hover:bg-primary/10"
            }
          `}
          onClick={handleTypeClick}
        >
          <Image
            src={image}
            height={50}
            width={100}
            alt={name}
            className="pointer-events-none h-[50px] object-contain object-center mb-1"
          />
          <div
            className={`text-sm font-medium pointer-events-none ${type === name ? "text-primary" : "text-gray-700"}`}
          >
            {name}
          </div>
        </button>
      ))}
    </div>
  );
}
