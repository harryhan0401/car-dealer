import CarTypes from "@/components/Filters/CarTypes";
import MakesModels from "@/components/Filters/MakesModels";
import Price from "@/components/Filters/Price";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="w-full flex flex-col gap-10 px-10 pt-8">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-5">
          <div className="text-6xl">Buy a car</div>
          <div className="w-[75px] mt-2 max-w-fit py-2 px-3 bg-primary text-white font-light rounded-lg text-sm">
            1 637
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <CarTypes />
        </div>
      </div>
      <div
        className="grid w-full gap-10"
        style={{ gridTemplateColumns: "0.3fr 1fr" }}
      >
        <div className="flex flex-col gap-5">
          <MakesModels />
          <Price />
        </div>
        <div className="border border-black">a</div>
      </div>
    </div>
  );
}
