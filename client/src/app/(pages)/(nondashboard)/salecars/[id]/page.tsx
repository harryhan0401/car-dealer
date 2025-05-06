"use client";
import { useGetSaleCarByIdQuery } from "@/state/api";
import { useParams } from "next/navigation";
import SaleCarSection from "./_components/SaleCarSection";
import ImageSlider from "./_components/ImageSlider";
import SaleCarBriefs from "./_components/SaleCarBriefs";

const SaleCar = () => {
  const { id } = useParams();
  if (!id || isNaN(Number(id))) return null;
  const { data: saleCar, isLoading } = useGetSaleCarByIdQuery(+id);
  if (isLoading) return <div>Loading...</div>;
  const { photoUrls } = saleCar;
  const { make, model, year } = saleCar.car;
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
            <SaleCarBriefs saleCar={saleCar} />
          </div>
        </div>
      </section>
      <SaleCarSection />
    </div>
  );
};
export default SaleCar;
