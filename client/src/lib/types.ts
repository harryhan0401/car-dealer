import { SaleCar } from "@/types/prismaTypes";
import { avatarData, CarData, locationData, SaleCarData, userData } from "./schemas";

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

export interface SellCarFormStepProps {
    sellCarFormData: TSellCarFormData;
    handleFormSubmit?: any;
    cb: (name: string) => void;
}
export type TSellCarFormData = SaleCarData & CarData;

export type TProfileSetupSteps = {
    step: number;
    title: string;
}

export type TOption = { value: string; label: string }

export type TAddressComponentMap = {
    subPremise: string;
    premise: string;
    street_number: string;
    route: string;
    country: string;
    postal_code: string;
    locality: string;
    administrative_area_level_1: string;
};

export type TUserProfileFormData = userData & locationData & avatarData



