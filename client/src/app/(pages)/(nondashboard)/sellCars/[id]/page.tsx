"use client";
import { useGetSellCarByIdQuery } from "@/state/api";
import { useParams } from "next/navigation";
import SellCarSection from "./_components/SellCarSection";
import ImageSlider from "./_components/ImageSlider";
import SellCarBriefs from "./_components/SellCarBriefs";
import SellCarSkeleton from "./_components/SellCarSkeleton";

const SellCar = () => {
  const { id } = useParams();
  if (!id || isNaN(Number(id))) return null;

  const { data: sellCar, isFetching } = useGetSellCarByIdQuery(+id);

  if (isFetching) return <SellCarSkeleton />;
  if (!sellCar) return <div>Sell car not found</div>;

  const { photoUrls } = sellCar;
  const { make, model, year } = sellCar.car;
  const customMake =
    make.toLowerCase() === "mercedesbenz" ? "Mercedes-Benz" : make;
  const title = customMake + " " + model + " " + year;
  return (
    <div className="flex flex-col p-4 h-screen">
      <section id="car-header">
        <h1 className="font-bold text-3xl">{title}</h1>
        <div className="flex my-5 gap-10 items-center">
          <div className="relative min-w-[500px] min-h-[300px] h-[500px] w-[60%]">
            <ImageSlider make={make} title={title} photoUrls={photoUrls} />
          </div>
          <div className="flex-1 flex flex-col min-h-[300px] h-[500px]">
            <SellCarBriefs sellCar={sellCar} />
          </div>
        </div>
      </section>
      <SellCarSection />
    </div>
  );
};
export default SellCar;
