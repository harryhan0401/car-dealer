const FilterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-white bg-white p-5 drop-shadow-md rounded-lg">
      {children}
    </div>
  );
};
export default FilterLayout;
