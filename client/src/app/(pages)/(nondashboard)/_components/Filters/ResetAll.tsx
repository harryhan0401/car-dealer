import { useQueryState } from "nuqs";
import { Button } from "@/components/ui/button";

const ResetAll = () => {
  //Check if any filter is applied. If not disable Reset All button. Else enable Reset All button
  //Filter Type
  const [type, setType] = useQueryState("type");
  const [makeModels, setMakeModels] = useQueryState("makeModels");
  const [priceRange, setPriceRange] = useQueryState("price_range");
  const [mileageRange, setMileageRange] = useQueryState("mileage_range");
  const [fuel, setFuel] = useQueryState("fuel");
  const [transmission, setTransmission] = useQueryState("transmission");
  const [drive, setDrive] = useQueryState("drive");
  const [yearRange, setYearRange] = useQueryState("year");
  const isFiltered =
    type ||
    makeModels ||
    priceRange ||
    mileageRange ||
    fuel ||
    transmission ||
    drive ||
    yearRange;
  return (
    <Button
      className="bg-primary disabled:bg-transparent disabled:text-primary disabled:border-primary disabled:border-2 disabled:pointer-events-none transition-all ease-in-out duration-300"
      disabled={!isFiltered}
      onClick={() => {
        if (type) setType(null);
        if (makeModels) setMakeModels(null);
        if (priceRange) setPriceRange(null);
        if (mileageRange) setMileageRange(null);
        if (fuel) setFuel(null);
        if (transmission) setTransmission(null);
        if (drive) setDrive(null);
        if (yearRange) setYearRange(null);
      }}
    >
      Reset all
    </Button>
  );
};
export default ResetAll;
