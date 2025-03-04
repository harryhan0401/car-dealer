import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function formatNumber(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export function getValuesForKey<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  return arr.map(obj => obj[key]);
};

export const getHistogramData = (numBins: number, data: number[]) => {
  const minAmount = Math.min(...data);
  const maxAmount = Math.max(...data);
  const binSize = Math.ceil((maxAmount - minAmount) / numBins);

  const bins: { range: string; count: number; }[] = [];
  for (let i = 0; i < numBins; i++) {
    bins.push({
      range: `$${minAmount + i * binSize} - $${minAmount + (i + 1) * binSize}`,
      count: 0
    });
  }

  data.forEach((value) => {
    const index = Math.min(
      Math.floor((value - minAmount) / binSize),
      numBins - 1
    );
    bins[index].count++;
  });

  return bins;
};

