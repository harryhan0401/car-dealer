import { LucideIcon } from "lucide-react";
import { AuthUser } from "aws-amplify/auth";
import { User, Location, Car, SaleCar, Order, Payment, Review } from "./prismaTypes";
import { MotionProps as OriginalMotionProps } from "framer-motion";

declare module "framer-motion" {
  interface MotionProps extends OriginalMotionProps {
    className?: string;
  }
}

declare global {
  enum Fuel {
    Petrol = "Petrol",
    Diesel = "Diesel",
    Hybrid = "Hybrid",
    Electric = "Electric",
    Ethanol = "Ethanol",
    Unleaded = "Unleaded",
    E10 = "E10",
    PremiumUnleaded95 = "PremiumUnleaded95",
    PremiumUnleaded98 = "PremiumUnleaded98",
    Biofuels = "Biofuels",
    E85 = "E85",
    Hydrogen = "Hydrogen",
    NaturalGas = "NaturalGas",
    Biodiesel = "Biodiesel",
    LPG = "LPG"
  }

  enum Drive {
    FWD = "FWD",
    AWD = "AWD",
    RWD = "RWD",
    FourWD = "FourWD"
  }

  enum Transmission {
    Manual = "Manual",
    Automatic = "Automatic",
    SemiAutomatic = "SemiAutomatic",
    CVT = "CVT",
    DualClutch = "DualClutch",
    Tiptronic = "Tiptronic",
    STronic = "STronic",
    SevenSpeedAutomatic = "SevenSpeedAutomatic",
    SixSpeedAutomatic = "SixSpeedAutomatic",
    EightSpeedAutomatic = "EightSpeedAutomatic"
  }

  enum OrderStatus {
    Pending = "Pending",
    Denied = "Denied",
    Confirmed = "Confirmed",
    Paid = "Paid"
  }

  enum PaymentMethod {
    Cash = "Cash",
    CreditCard = "CreditCard",
    DebitCard = "DebitCard",
    Paypal = "Paypal",
    BankTransfer = "BankTransfer",
    Bitcoin = "Bitcoin",
    ApplePay = "ApplePay",
    GooglePay = "GooglePay"
  }

  interface AppUser {
    cognitoInfo: AuthUser;
    userInfo: User;
    userRole: JsonObject | JsonPrimitive | JsonArray;
  }
}

export { };
