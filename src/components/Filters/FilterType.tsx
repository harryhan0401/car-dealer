"use client";
import { CarTypes } from "@/lib/constants";
import Image from "next/image";
import { useQueryState } from "nuqs";
import { MouseEvent } from "react";

export default function FilterType() {
  const [type, setType] = useQueryState("type", {
    defaultValue: "",
    parse: (value) =>
      CarTypes.find((carType) => carType.name === value) ? value : "",
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
      {CarTypes.map(({ name, image }) => (
        <button
          key={name}
          value={name}
          className={`flex flex-col items-center border-[1.6px] rounded-lg hover:border-black p-2 ${type === name ? "border-black" : ""} `}
          onClick={(event) => handleTypeClick(event)}
        >
          <Image
            src={image}
            height={50}
            width={80}
            alt={name}
            className="pointer-events-none"
          />
          <div className="text-sm pointer-events-none">{name}</div>
        </button>
      ))}
    </div>
  );
}
