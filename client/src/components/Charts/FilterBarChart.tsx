import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Cell,
  Tooltip,
  TooltipProps,
} from "recharts";

const FilterBarChart = ({ data, localMin, localMax }: FilterBarChartProps) => {
  const CustomTooltip = ({
    active,
    payload,
    coordinate,
  }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="bg-white p-2 rounded-lg shadow-md"
          style={{
            position: "fixed",
            width: "max-content",
            top: coordinate?.y ?? 0,
            left: coordinate?.x ?? 0,
            transform: "translate(-50%)",
          }}
        >
          <p className="label">{`Number of cars : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <ResponsiveContainer width="100%" height={75}>
      <BarChart data={data}>
        <Bar dataKey="count" radius={[3, 3, 0, 0]} activeBar={true}>
          {data.map((entry, index) => {
            const [min, max] = entry.range
              .replace(/\$/g, "")
              .split(" - ")
              .map(Number);
            entry.isInRange = min >= localMin && max <= localMax + 1000;
            return (
              <Cell
                key={index}
                fill={entry.isInRange ? "#F05225" : "#ccc"}
                className="transition-all ease-in-out"
              />
            );
          })}
        </Bar>
        <Tooltip content={<CustomTooltip />} cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default FilterBarChart;
