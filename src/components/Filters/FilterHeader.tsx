interface FilterHeaderProps {
  filterTitle: string;
  handleResetClick?: () => void;
}
const FilterHeader = ({ filterTitle, handleResetClick }: FilterHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-xl">{filterTitle}</div>
      <button className="text-primary hover:text-primary/90 cursor-pointer" onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
};
export default FilterHeader;
