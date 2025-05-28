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
          className={`flex flex-col items-center border-[1.6px] rounded-lg hover:border-black p-2 ${type === name ? "border-black" : ""} `}
          onClick={(event) => handleTypeClick(event)}
        >
          <Image
            src={image}
            height={50}
            width={100}
            alt={name}
            className="pointer-events-none h-[50px] object-contain object-center"
          />
          <div className="text-sm pointer-events-none">{name}</div>
        </button>
      ))}
    </div>
  );
}
