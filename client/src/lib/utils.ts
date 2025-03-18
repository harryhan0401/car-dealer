import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { AuthUser } from "aws-amplify/auth";
import { SaleCar } from "@/types/prismaTypes";
import { FilterMakesModels } from "./types";

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

export function parseFilterMakeModels(makeModelsQueryString: string, saleCars: SaleCar[]): FilterMakesModels[] {
  if (saleCars) {
    const parsedData: FilterMakesModels[] = makeModelsQueryString
      .split(";") //Split between makes
      .map((makeModel) => {
        const [make, models] = makeModel.split(":"); //For each make, split make and models by ":"
        const uniqueModelOptions = Array.from(
          new Set(
            saleCars
              .filter(({ car }) => car.make === make) // Filter by `make`
              .map(({ car }) => car.model) // Extract models
          )
        );
        return { make, models: models ? models.split(",") : uniqueModelOptions };
      });
    return parsedData;
  }
  return [];
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

export function getUniqueModelsByMake(cars: SaleCar[], make: string): string[] {
  if (cars) {
    const modelOptions = Array.from(
      new Set(
        cars
          .filter(({ car }) => car.make === make)
          .map(({ car }) => car.model)
      )
    );
    return modelOptions;
  }
  return [];
}

export async function createNewUserInDatabase(user: AuthUser, userEmail: string, userRole: string, fetchWithBQ: any) {
  const createEndpoint =
    userRole.toLocaleLowerCase() === "user" ? "/users" : "/admins";

  const createUserResponse = await fetchWithBQ({
    url: createEndpoint,
    method: "POST",
    body: {
      cognitoId: user.userId,
      locationId: null,
      email: userEmail,
      firstName: "",
      lastName: "",
      phone: "",
    }
  })

  if (createUserResponse.error) {
    throw new Error("Failed to create user record");
  }

  return createUserResponse;
}

/*
To create pagination that displays 5 pages at a time and shifts by 
showing the previous 2 and next 2 pages around the current page 
*/
export function getPageNumbers(currentPage: number, totalPages: number) {
  if (currentPage <= 3) {
    return [1, 2, 3, 4, 5].filter(page => page <= totalPages);
  } else if (currentPage >= totalPages - 2) {
    return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages].filter(page => page > 0);
  } else {
    return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
  }
};