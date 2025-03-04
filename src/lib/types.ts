type NotificationListItem = {
    id: number;
    avatar: string;
    title: string;
    message: string;
    read: boolean;
}

type Car = {
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
}

type FilterSelect = {
    query: string;
    selections: string[];
    setValue: (value: string | null) => void;
}