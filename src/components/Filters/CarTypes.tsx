import Image from "next/image";
import Link from "next/link";

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
export default function CarTypes({ type }: { type?: string }) {
  return (
    <div className="flex items-center space-x-2">
      {carTypes.map(({ name, image }) => (
        <Link
          href={`?type=${name}`}
          key={name}
          className={`flex flex-col items-center border-[1.6px] rounded-lg hover:border-black p-2 ${type === name ? "border-black" : ""} `}
        >
          <Image src={image} height={50} width={80} alt={name} />
          <div className="text-sm">{name}</div>
        </Link>
      ))}
    </div>
  );
}
