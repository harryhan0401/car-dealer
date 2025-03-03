import Link from "next/link";

interface FilterHeaderProps {
  filterTitle: string;
}
const FilterHeader = ({ filterTitle }: FilterHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-xl">{filterTitle}</div>
      <Link className="text-primary font-light" href={"?"} scroll={false}>
        Reset
      </Link>
    </div>
  );
};
export default FilterHeader;
