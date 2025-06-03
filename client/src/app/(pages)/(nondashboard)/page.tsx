import CarsType from "./_components/CarsType";
import CarsTotal from "./_components/CarsTotal";
import CarsDisplay from "./_components/CarsDisplay";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-10 px-10 py-8">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex lg:flex-start items-center lg:items-start gap-5">
          <h1 className="me-auto lg:me-0 text-6xl">Buy a car</h1>
          <CarsTotal />
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-2">
          <CarsType />
        </div>
      </div>
      <CarsDisplay />
    </div>
  );
}
