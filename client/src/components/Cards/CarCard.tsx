import Image from "next/image";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiStoneWheel } from "react-icons/gi";
import { Bolt, Flame, Fuel, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { SellCar, User } from "@/types/prismaTypes";
import { useGetAuthUserQuery } from "@/state/api";
import FavouriteForm from "../Forms/FavouriteForm";
import { formatNumber } from "@/lib/utils";
import Link from "next/link";
import ContactSellerModal from "../ContactSellerModal";

type CarCardProps = {
  id: number;
  mileage: number;
  price: number;
  description: string;
  car: SellCar;
  seller: User;
  index: number;
  isHighlight?: boolean;
  isReview?: boolean;
};

const CarCard = ({
  id,
  mileage,
  price,
  description,
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
            className="w-full object-cover object-center rounded-2xl"
            alt="Car"
            quality={[0, 1, 2, 3, 4].includes(index) ? 0 : 100}
            priority={[0, 1, 2, 3, 4].includes(index)}
          />
        </Link>
        <div className="py-3 px-4 flex flex-col gap-3">
          <section
            id="car-title"
            className="flex flex-wrap justify-between items-center text-lg"
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
              className="border rounded-lg p-2 bg-neutral"
            >
              <IoSpeedometerOutline size={24} />
              <p>{mileage} km</p>
            </section>
            <section id="car_fuel" className="border rounded-lg p-2 bg-neutral">
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
              className="border rounded-lg p-2 bg-neutral"
            >
              <PiEngineLight size={24} />
              <p>{horsePower} kW</p>
            </section> */}
            <section
              id="car-drive"
              className="border rounded-lg p-2 bg-neutral"
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
              <ContactSellerModal>
                <Button className="flex-1" aria-label="Contact Seller">
                  <span>
                    <Phone />
                  </span>
                  Contact Seller
                </Button>
              </ContactSellerModal>
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
