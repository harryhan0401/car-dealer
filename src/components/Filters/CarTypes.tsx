"use client";
import Image from "next/image";
import { useQueryState } from "nuqs";

const carTypes = [
  {
    name: "Sedan",
    image: "https://placehold.co/80x50",
  },
  {
    name: "SUV",
    image: "https://placehold.co/80x50",
  },
  {
    name: "Hatchback",
    image: "https://placehold.co/80x50",
  },
  {
    name: "Coupe",
    image: "https://placehold.co/80x50",
  },
  {
    name: "Sport cars",
    image: "https://placehold.co/80x50",
  },
];
export default function CarTypes() {
  const [type, setType] = useQueryState("type", {
    defaultValue: "",
    parse: (value) =>
      carTypes.find((carType) => carType.name === value) ? value : "",
    serialize: (value) => value,
  });
  return (
    <div className="flex items-center space-x-2">
      {carTypes.map(({ name, image }) => (
        <button
          key={name}
          className={`flex flex-col items-center border-[1.6px] rounded-lg hover:border-black p-2 ${type === name ? "border-black" : ""} `}
          onClick={() => setType(name)}
        >
          <Image src={image} height={50} width={80} alt={name} />
          <div className="text-sm">{name}</div>
        </button>
      ))}
    </div>
  );
}
