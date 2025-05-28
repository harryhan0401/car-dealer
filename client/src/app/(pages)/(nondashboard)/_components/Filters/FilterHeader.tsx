interface FilterHeaderProps {
  filterTitle: string;
  isDisabled: boolean;
  handleResetClick?: () => void;
}
const FilterHeader = ({
  filterTitle,
  isDisabled,
  handleResetClick,
}: FilterHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-xl">{filterTitle}</div>
      <button
        className="text-primary hover:text-primary/90 cursor-pointer disabled:text-primary/50 disabled:pointer-events-none"
        disabled={isDisabled}
        onClick={handleResetClick}
      >
        Reset
      </button>
    </div>
  );
};
export default FilterHeader;
