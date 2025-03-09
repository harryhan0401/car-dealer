import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { cars } from "@/lib/db"

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

export function getMakeImage(make: string): string {
  if (make == "Mercedes-Benz") return "/mercedes-logo.svg"
  else if (make == "BMW") return "/bmw-logo.svg"
  else if (make == "Audi") return "/audi-logo.svg"
  else return ""
}

export function parseFilterMakeModels(makeModelsQueryString: string): FilterMakesModels[] {
  const parsedData: FilterMakesModels[] = makeModelsQueryString
    .split(";") //Split between makes
    .map((makeModel) => {
      const [make, models] = makeModel.split(":"); //For each make, split make and models by ":"
      return { make, models: models ? models.split(",") : getUniqueModelsByMake(cars, make) }; //Return the parsedData following FilterMakesModels[] type
    });

  return parsedData;
}


export function convertToMakeModelsString(selectedMakesModels: FilterMakesModels[]): string {
  const queryString = selectedMakesModels
    .map(
      ({ make, models }) =>
        models.length == 0 ? `${make}` : `${make}:${models.join(",")}` //If no models are selected return only format "make" else return format "make:model,model,..."
    )
    .join(";");
  return queryString;
}

export function getUniqueModelsByMake(cars: CarType[], make: string): string[] {
  const modelOptions = Array.from(
    new Set(
      cars.filter((car) => car.make === make).map((car) => car.model)
    )
  );
  return modelOptions;
}

