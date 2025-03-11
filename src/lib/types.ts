type NotificationListItem = {
    id: number;
    avatar: string;
    title: string;
    message: string;
    read: boolean;
}

type CarType = {
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

type FilterSelect = {
    query: string;
    selections: string[];
    setValue: (value: string | null) => void;
}

type FilterMakesModels = {
    make: string,
    models: string[]
}

type StepType = {
    selectedMakesModels: FilterMakesModels[]
    setSelectedMakesModels: (filter: FilterMakesModels[]) => void;
}

type TNavLink = {
    label: string;
    path: string;
}