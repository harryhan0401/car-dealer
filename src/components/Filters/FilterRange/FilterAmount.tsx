"use client";
import { useState, useEffect, useMemo, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import FilterBarChart from "@/components/Charts/FilterBarChart";

interface FilterAmountProps {
  data?: { range: string; count: number; isInRange?: boolean }[];
  minAmount: number;
  maxAmount: number;
  range: string;
  setRange: (value: string) => void;
  inputName: string;
  hasSlider?: boolean;
  hasChart?: boolean;
}
export default function FilterAmount({
  data,
  minAmount,
  maxAmount,
  range,
  setRange,
  inputName,
  hasSlider = true,
  hasChart = true,
}: FilterAmountProps) {
  const [min, max] = useMemo(() => range.split("-").map(Number), [range]);
  const [localMin, setLocalMin] = useState(min);
  const [localMax, setLocalMax] = useState(max);

  useEffect(() => {
    setLocalMin(min);
    setLocalMax(max);
  }, [min, max]);

  const handleValueChange = (value: number[]) => {
    setLocalMin(value[0]);
    setLocalMax(value[1]);
  };

  const handleValueCommit = (value: number[]) => {
    setRange(`${value[0]}-${value[1]}`);
  };

  const handleMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.max(Number(e.target.value), minAmount);
    if (newMin >= localMax) {
      setLocalMax(newMin + 50);
    }
    setLocalMin(newMin);
    setRange(`${newMin}-${localMax}`);
  };

  const handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.min(Number(e.target.value), maxAmount);
    if (newMax <= localMin) {
      setLocalMin(minAmount);
    }
    setLocalMax(newMax);
    setRange(`${localMin}-${newMax}`);
  };

  return (
    <div>
      {hasChart && data && (
        <FilterBarChart data={data} localMin={localMin} localMax={localMax} />
      )}

      {hasSlider && (
        <div className="space-y-4">
          <Slider
            minStepsBetweenThumbs={10}
            min={minAmount}
            max={maxAmount}
            step={50}
            value={[localMin, localMax]}
            onValueChange={handleValueChange}
            onValueCommit={handleValueCommit}
          />
        </div>
      )}
      <div className="mt-4 space-y-2">
        {hasSlider && (
          <p className="text-base sm:text-sm font-medium">Custom range:</p>
        )}
        <div className="flex w-full items-center gap-2">
          <div className={`${inputName}`}>
            <Input
              name="Minimum Amount"
              type="number"
              step={50}
              placeholder={`$${minAmount}`}
              value={localMin}
              onChange={handleMinInputChange}
            />
          </div>
          <span className="text-xs font-medium">–</span>
          <div className={`${inputName}`}>
            <Input
              name="Maximum Amount"
              type="number"
              step={50}
              placeholder={`$${maxAmount}`}
              value={localMax}
              onChange={handleMaxInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
