import { useAppSelector } from "@/state/redux";
import { Heart } from "lucide-react";

import Link from "next/link";
const Favourite = () => {
  const favourites = useAppSelector(({ global }) => global.favourites);
  return (
    <Link
      href={`/users/favourites`}
      className="relative rounded px-[0.6rem] py-2 bg-border cursor-pointer"
    >
      <Heart className="size-6" />
      <span className="absolute top-[-0.5rem] right-[-0.5rem] size-5 text-red-500 bg-primary border px-2 rounded-full z-1">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[0.65rem] text-white">
          {favourites.length}
        </div>
      </span>
    </Link>
  );
};
export default Favourite;
