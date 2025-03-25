const StepDisplay = ({
  stepNumber,
  title,
}: {
  stepNumber: number;
  title: string;
}) => {
  return (
    <div className="flex gap-2 items-baseline font-bold">
      <div className=" bg-primary rounded-full px-1.5 py-3.75 text-sm text-white">
        Step {stepNumber}
      </div>
      <div>{title}</div>
    </div>
  );
};
export default StepDisplay;
