export const FooterCompanyNavLinks = [
  { name: "About", href: "/about" },
  { name: "Career", href: "/career" },
  { name: "Contacts", href: "/contacts" },
  { name: "Magazine", href: "/magazine" },
]
export const CarTypes = [
  {
    name: "Sedan",
    image: "/car-body-type/sedan.png",
  },
  {
    name: "SUV",
    image: "/car-body-type/suv.png",
  },
  {
    name: "Hatchback",
    image: "/car-body-type/hatchback.png",
  },
  {
    name: "Coupe",
    image: "/car-body-type/coupe.png",
  },
];
export const FuelSelects = ["petrol", "diesel", "electric", "hybrid"];
export const TransmissionSelects = ["automatic", "mechanical", "variator"];
export const DriveSelects = ["FWD", "4WD", "AWD", "RWD"];

export enum Make {
  Acura = "Acura",
  AlfaRomeo = "Alfa Romeo",
  AstonMartin = "Aston Martin",
  Audi = "Audi",
  Bentley = "Bentley",
  BMW = "BMW",
  Bugatti = "Bugatti",
  Buick = "Buick",
  Cadillac = "Cadillac",
  Chevrolet = "Chevrolet",
  Chrysler = "Chrysler",
  Citroen = "Citroen",
  Dodge = "Dodge",
  Ferrari = "Ferrari",
  Fiat = "Fiat",
  Ford = "Ford",
  Genesis = "Genesis",
  Gmc = "Gmc",
  Honda = "Honda",
  Hyundai = "Hyundai",
  Infiniti = "Infiniti",
  Jaguar = "Jaguar",
  Jeep = "Jeep",
  Kia = "Kia",
  Koenigsegg = "Koenigsegg",
  Lamborghini = "Lamborghini",
  LandRover = "Land Rover",
  Lexus = "Lexus",
  Lincoln = "Lincoln",
  Lotus = "Lotus",
  Maserati = "Maserati",
  Maybach = "Maybach",
  Mazda = "Mazda",
  Mclaren = "Mclaren",
  MercedesBenz = "Mercedes-Benz",
  Mini = "Mini",
  Mitsubishi = "Mitsubishi",
  Nissan = "Nissan",
  Pagani = "Pagani",
  Peugeot = "Peugeot",
  Porsche = "Porsche",
  Ram = "Ram",
  Renault = "Renault",
  RollsRoyce = "Rolls-Royce",
  Saab = "Saab",
  Subaru = "Subaru",
  Suzuki = "Suzuki",
  Tesla = "Tesla",
  Toyota = "Toyota",
  Volkswagen = "Volkswagen",
  Volvo = "Volvo"
};

export enum Type {
  Sedan = "Sedan",
  Coupe = "Coupe",
  Hatchback = "Hatchback",
  SUV = "SUV",
  Truck = "Truck",
  Convertible = "Convertible",
  Wagon = "Wagon",
  Minivan = "Minivan",
  Sportscar = "Sportscar",
  Crossover = "Crossover",
  Roadster = "Roadster",
  Luxury = "Luxury",
  Electric = "Electric",
  Hybrid = "Hybrid",
  Diesel = "Diesel",
  CrossoverSUV = "Crossover SUV",
  Van = "Van"
};

export enum Fuel {
  Petrol = "Petrol",
  Diesel = "Diesel",
  Hybrid = "Hybrid",
  Electric = "Electric",
  Ethanol = "Ethanol",
  Unleaded = "Unleaded",
  E10 = "E10",
  PremiumUnleaded95 = "Premium Unleaded 95",
  PremiumUnleaded98 = "Premium Unleaded 98",
  Biofuels = "Biofuels",
  E85 = "E85",
  Hydrogen = "Hydrogen",
  NaturalGas = "NaturalGas",
  Biodiesel = "Biodiesel",
  LPG = "LPG"
}

export enum Drive {
  FWD = "FWD",
  AWD = "AWD",
  RWD = "RWD",
  FourWD = "4WD"
}

export enum Transmission {
  Manual = "Manual",
  Automatic = "Automatic",
  SemiAutomatic = "Semi Automatic",
  CVT = "CVT",
  DualClutch = "Dual Clutch",
  Tiptronic = "Tiptronic",
  STronic = "S-Tronic",
  SevenSpeedAutomatic = "7G-Tronic",
  SixSpeedAutomatic = "6G-Tronic",
  EightSpeedAutomatic = "8G-Tronic"
}

export enum OrderStatus {
  Pending = "Pending",
  Denied = "Denied",
  Confirmed = "Confirmed",
  Paid = "Paid"
}

export enum PaymentMethod {
  Cash = "Cash",
  CreditCard = "CreditCard",
  DebitCard = "DebitCard",
  Paypal = "Paypal",
  BankTransfer = "BankTransfer",
  Bitcoin = "Bitcoin",
  ApplePay = "ApplePay",
  GooglePay = "GooglePay"
}