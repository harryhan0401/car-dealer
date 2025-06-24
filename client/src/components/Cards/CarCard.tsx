"use client";

import Image from "next/image";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiStoneWheel } from "react-icons/gi";
import { Bolt, Check, Eye, Flame, Fuel, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { useGetAuthUserQuery } from "@/state/api";
import FavouriteForm from "../Forms/FavouriteForm";
import { formatNumber } from "@/lib/utils";
import Link from "next/link";
import ContactSellerButton from "../ContactSellerButton";

const CarCard = ({
  id,
  mileage,
  price,
  description,
  enquiries,
  car,
  seller,
  index,
  isHighlight = false,
  isReview = false,
}: CarCardProps) => {
  const { make, model, year, fuel, drive } = car;
  const { city } = seller.location ? seller.location : "";
  const { data: authUser } = useGetAuthUserQuery();
  const customMake =
    make.toLowerCase() === "mercedesbenz" ? "Mercedes-Benz" : make;
  const title = customMake + " " + model + " " + year;
  return (
    <div
      className={`card rounded-2xl ${isHighlight && "lg:col-span-2 border border-primary "}`}
    >
      <div
        className={`grid ${isHighlight && "lg:grid-cols-2 lg:gap-10 lg:items-center"}`}
      >
        <Link href={`/sellCars/${id}`}>
          <Image
            // src={`/${photoUrls[0]}`}
            src={
              make.toLowerCase() == "bmw"
                ? "/bmw.jpg"
                : make.toLowerCase() == "mercedesbenz"
                  ? "/mercedes.jpg"
                  : make.toLowerCase() == "audi"
                    ? "/audi.jpg"
                    : ""
            }
            height={250}
            width={500}
            className="object-cover object-center w-full rounded-2xl"
            alt="Car"
            quality={[0, 1, 2, 3, 4].includes(index) ? 0 : 100}
            priority={[0, 1, 2, 3, 4].includes(index)}
          />
        </Link>
        <div className="flex flex-col gap-3 px-4 py-3">
          <section
            id="car-title"
            className="flex flex-wrap items-center justify-between text-lg"
          >
            <p>{title}</p>
            <p
              className={`${isHighlight && "text-neutral bg-primary px-2 py-1 rounded-md flex items-center gap-1"}`}
            >
              {isHighlight && (
                <span>
                  <Flame size={18} />
                </span>
              )}
              ${formatNumber(price)}
            </p>
          </section>
          <section
            id="car-statistics"
            className="grid grid-cols-2 xl:grid-cols-3 max-w-[500px] gap-5 text-sm sm:text-base"
          >
            <section
              id="car_mileage"
              className="p-2 border rounded-lg bg-neutral"
            >
              <IoSpeedometerOutline size={24} />
              <p>{mileage} km</p>
            </section>
            <section id="car_fuel" className="p-2 border rounded-lg bg-neutral">
              {fuel.toLowerCase() === "petrol" ||
              fuel.toLowerCase() === "diesel" ? (
                <p>
                  <Fuel size={24} />
                  {fuel}
                </p>
              ) : (
                <p>
                  <Bolt size={24} />
                  {fuel}
                </p>
              )}
            </section>
            {/* <section
              id="car-horse-power"
              className="p-2 border rounded-lg bg-neutral"
            >
              <PiEngineLight size={24} />
              <p>{horsePower} kW</p>
            </section> */}
            <section
              id="car-drive"
              className="p-2 border rounded-lg bg-neutral"
            >
              <GiStoneWheel size={24} />
              <p>{drive.toLowerCase() === "fourwd" ? "4WD" : drive}</p>
            </section>
          </section>
          <section
            id="car-location"
            className="flex items-center gap-1 text-primary"
          >
            <MapPin size={24} />
            <p>{city ? city : "Not Available"}</p>
          </section>
          <section id="car-description">
            <p className="line-clamp-2">{description}</p>
          </section>
          {!isReview && (
            <section
              id="car-interaction-group"
              className={`flex ${authUser && "gap-5"}`}
            >
              <ContactSellerButton
                authUser={authUser}
                sellCarId={id}
                listPrice={price}
                enquiries={enquiries}
              />

              {authUser && (
                <div>
                  <FavouriteForm authUser={authUser} sellCarId={id} />
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
export default CarCard;
