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