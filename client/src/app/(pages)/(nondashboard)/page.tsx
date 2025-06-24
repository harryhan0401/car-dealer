import CarsType from "./_components/CarsType";
import CarsDisplay from "./_components/CarsDisplay";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 px-10 py-8">
      <h1 className="text-6xl font-semibold text-center">
        Find your perfect car
      </h1>
      <div className="hidden md:block">
        <CarsType />
      </div>
      <CarsDisplay />
    </div>
  );
}
