import FilterAmount from "./FilterAmount";
import FilterHeader from "./FilterHeader";

const Price = () => {
  return (
    <div className="border-white bg-white p-5 drop-shadow-md rounded-lg">
      <FilterHeader filterTitle="Price" />
      <div className="mt-5">
        <FilterAmount />
      </div>
    </div>
  );
};
export default Price;
