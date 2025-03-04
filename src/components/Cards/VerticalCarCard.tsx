import Image from "next/image";
import { IoSpeedometerOutline } from "react-icons/io5";
import { PiEngineLight } from "react-icons/pi";
import { GiStoneWheel } from "react-icons/gi";
import { Bolt, Fuel, HeartIcon, MapPin, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const VerticalCarCard = ({
  id,
  image,
  title,
  price,
  mileage,
  fuel,
  horsePower,
  drive,
  location,
  description,
}: CarType) => {
  return (
    <div className="border-white bg-white p-5 drop-shadow-md rounded-2xl">
      <Image
        src={`/${image}`}
        height={250}
        width={500}
        className="object-cover object-center rounded-2xl"
        alt="Car"
      />
      <div className="py-3 px-4 flex flex-col gap-3">
        <section
          id="car-title"
          className="flex justify-between items-center text-lg"
        >
          <p>{title}</p>
          <p>${price}</p>
        </section>
        <section id="car-statistics" className="flex gap-5">
          <div className="flex-1 border rounded-lg p-2 bg-neutral">
            <IoSpeedometerOutline size={24} />
            <p>{mileage} km</p>
          </div>
          <div className="flex-1 border rounded-lg p-2 bg-neutral">
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
          </div>
          <div className="flex-1 border rounded-lg p-2 bg-neutral">
            <PiEngineLight size={24} />
            <p>{horsePower} kW</p>
          </div>
          <div className="flex-1 border rounded-lg p-2 bg-neutral">
            <GiStoneWheel size={24} />
            <p>{drive}</p>
          </div>
        </section>
        <section
          id="car-location"
          className="flex items-center gap-1 text-primary"
        >
          <MapPin size={24} />
          <p>{location}</p>
        </section>
        <section id="car-description">
          <p className="line-clamp-2">{description}</p>
        </section>
        <section id="car-interaction-group" className="flex gap-5">
          <Button className="flex-2/3">
            <span>
              <ShoppingCart />
            </span>
            Buy now
          </Button>
          <form>
            <input type="hidden" value={id} name="id" />
            <button className="flex-1/3 flex justify-center items-center border w-[40px] h-full border-primary rounded-sm">
              <HeartIcon className="text-primary" size={20} />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
export default VerticalCarCard;
