"use client";
import { useGetCarListingByIdQuery } from "@/state/api";
import { useParams } from "next/navigation";
import CarListingSection from "./_components/CarListingSection";
import ImageSlider from "./_components/ImageSlider";
import CarListingBriefs from "./_components/CarListingBriefs";
import CarListingSkeleton from "./_components/CarListingSkeleton";

const CarListing = () => {
  const { id } = useParams();
  if (!id) return null;

  const { data: carListing, isFetching } = useGetCarListingByIdQuery(
    Array.isArray(id) ? id[0] : id
  );

  if (isFetching) return <CarListingSkeleton />;
  if (!carListing) return <div>Sell car not found</div>;

  const { photoUrls } = carListing;
  const { make, model, year } = carListing.car;
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
            <CarListingBriefs carListing={carListing} />
          </div>
        </div>
      </section>
      <CarListingSection />
    </div>
  );
};
export default CarListing;
