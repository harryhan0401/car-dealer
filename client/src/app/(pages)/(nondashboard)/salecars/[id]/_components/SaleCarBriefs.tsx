import ContactSellerModal from "@/components/ContactSellerModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { formatNumber } from "@/lib/utils";
import { SaleCar } from "@/types/prismaTypes";
import { Bolt, Fuel, Phone } from "lucide-react";
import { GiStoneWheel } from "react-icons/gi";
import { IoSpeedometerOutline } from "react-icons/io5";

const SaleCarBriefs = ({ saleCar }: { saleCar: SaleCar }) => {
  const { price, description, mileage } = saleCar;
  const { fuel, drive } = saleCar.car;
  const { firstName, lastName, email, phone, avatarUrl } = saleCar.seller;
  const sellerName = firstName + " " + lastName;
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-[25%]">
        <section
          id="car-price-contact-seller"
          className="flex gap-5 items-center"
        >
          <div className="font-semibold text-2xl">${formatNumber(price)}</div>
          <ContactSellerModal>
            <Button>
              <span>
                <Phone />
              </span>
              Contact Seller
            </Button>
          </ContactSellerModal>
        </section>
        <section
          id="car-statistics"
          className="grid grid-cols-3 gap-5 text-sm sm:text-base my-5"
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
          <section id="car-drive" className="border rounded-lg p-2 bg-neutral">
            <GiStoneWheel size={24} />
            <p>{drive.toLowerCase() === "fourwd" ? "4WD" : drive}</p>
          </section>
        </section>
      </div>
      <section id="car-description" className="h-[45%]">
        <h2 className="font-semibold text-lg">Description</h2>
        <p className="text-sm sm:text-base" style={{ textAlign: "justify" }}>
          {description}
        </p>
      </section>
      <section
        id="seller-details"
        className="py-5 rounded-lg bg-neutral-300"
      >
        <div className="flex flex-col gap-1 items-center">
          <Avatar className="rounded-sm z-10">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback className="bg-accent">
              {sellerName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <p className="text-sm sm:text-base">{sellerName}</p>
          <a href={`mailto:${email}`} className="text-sm sm:text-base">
            {email}
          </a>
          <a href={`tel:${phone}`} className="text-sm sm:text-base">
            {phone}
          </a>
        </div>
      </section>
    </div>
  );
};
export default SaleCarBriefs;
