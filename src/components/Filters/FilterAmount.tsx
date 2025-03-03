"use client";
import { useState, useEffect, useMemo, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { cars } from "../../lib/db";
import { useQueryState } from "nuqs";

export default function FilterAmount() {
  const [minAmount, maxAmount] = useMemo(() => {
    const amounts = cars.map((car) => car.price);
    return [Math.floor(Math.min(...amounts)), Math.ceil(Math.max(...amounts))];
  }, []);

  const [range, setRange] = useQueryState("amount_range", {
    defaultValue: `${minAmount}-${maxAmount}`,
    parse: (value) => {
      try {
        const [min, max] = value.split("-").map(Number);
        if (isNaN(min) || isNaN(max)) {
          throw new Error("Invalid range values");
        }
        return `${Math.max(min, minAmount)}-${Math.min(max, maxAmount)}`;
      } catch (error) {
        console.error("Error parsing amount range:", error);
        return `${minAmount}-${maxAmount}`;
      }
    },
    serialize: (value) => value,
  });

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

  const distributionData = useMemo(() => {
    const numBins = 30;
    const binSize = (maxAmount - minAmount) / numBins;
    const bins = Array(numBins).fill(0);
    cars.forEach((car) => {
      const binIndex = Math.min(
        Math.floor((car.price - minAmount) / binSize),
        numBins - 1
      );
      bins[binIndex]++;
    });
    const maxCount = Math.max(...bins);
    return bins.map((count, index) => ({
      height: (count / maxCount) * 100,
      isInRange:
        minAmount + index * binSize >= localMin &&
        minAmount + (index + 1) * binSize <= localMax,
    }));
  }, [minAmount, maxAmount, localMin, localMax]);

  return (
    <div>
      <div className="flex h-12 items-end space-x-0.5">
        {distributionData.map((bin, index) => (
          <div
            key={index}
            className={`w-full rounded-sm ${bin.isInRange ? "bg-primary dark:bg-primary" : "bg-border dark:bg-gray-800"} transition-all`}
            style={{ height: `${bin.height}%` }}
          />
        ))}
      </div>
      <div className="mt-4 space-y-4">
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
      <div className="mt-4 space-y-2">
        <p className="text-base sm:text-sm font-medium">Custom range:</p>
        <div className="flex w-full items-center gap-2">
          <Input
            name="Minimum Amount"
            type="number"
            step={50}
            placeholder={`$${minAmount}`}
            value={localMin}
            onChange={handleMinInputChange}
          />
          <span className="text-xs font-medium">–</span>
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
  );
}
