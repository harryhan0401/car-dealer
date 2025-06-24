const FilterHeader = ({
  filterTitle,
  isDisabled,
  handleResetClick,
}: FilterHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-xl">{filterTitle}</div>
      <button
        className="cursor-pointer text-primary hover:text-primary/90 disabled:text-primary/50 disabled:pointer-events-none"
        disabled={isDisabled}
        onClick={handleResetClick}
      >
        Reset
      </button>
    </div>
  );
};
export default FilterHeader;
