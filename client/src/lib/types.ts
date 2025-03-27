import { SaleCar } from "@/types/prismaTypes";
import { CarData, SaleCarData } from "./schemas";

export type NotificationListItemProps = {
    id: number;
    avatar: string;
    title: string;
    message: string;
    read: boolean;
}

export type CarType = {
    id: number;
    title: string;
    type: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuel: string,
    transmission: string,
    horsePower: number,
    drive: string,
    location: string,
    description: string,
    image: string,
}

export type FilterSelect = {
    query: string;
    selections: string[];
    setValue: (value: string | null) => void;
}

export type FilterMakesModels = {
    make: string;
    models: string[]
}

export type StepType = {
    selectedMakesModels: FilterMakesModels[];
    setSelectedMakesModels: (filter: FilterMakesModels[]) => void;
    saleCars: SaleCar[];
}

export type TNavLink = {
    label: string;
    path: string;
}

export type TSellCarFormData = SaleCarData & CarData;
