import { AuthUser } from "aws-amplify/auth";
import { MotionProps as OzriginalMotionProps } from "framer-motion";
import { Enquiry, SellCar, User } from "./prismaTypes";
import { avatarData, CarData, locationData, SellCarData, userData } from "./schemas";

declare module "framer-motion" {
  interface MotionProps extends OriginalMotionProps {
    className?: string;
  }
}

declare global {
  //Types
  type TCarType = {
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

  type TFilterSelect = {
    query: string;
    selections: string[];
    setValue: (value: string | null) => void;
  }

  type TFilterMakesModels = {
    make: string;
    models: string[]
  }

  type TStepType = {
    selectedMakesModels: FilterMakesModels[];
    setSelectedMakesModels: (filter: FilterMakesModels[]) => void;
    sellCars: SellCar[];
  }

  type TNavLink = {
    label: string;
    path: string;
  }

  type TNotificationListItem = {
    id: number;
    avatar: string;
    title: string;
    message: string;
    read: boolean;
  }

  type TSellCarFormData = SellCarData & CarData;

  type TProfileSetupSteps = {
    step: number;
    title: string;
  }

  type TOption = { value: string; label: string }

  type TAddressComponentMap = {
    subPremise: string;
    premise: string;
    street_number: string;
    route: string;
    country: string;
    postal_code: string;
    locality: string;
    administrative_area_level_1: string;
  };

  type TMutationMessages = {
    success?: string;
    error: string;
  }

  type TUserProfileFormData = userData & locationData & avatarData

  //Interfaces

  interface NotificationListItemProps {
    avatar: string;
    title: string;
    message: string;
  }
  interface PaginationProps {
    numOfItems: number;
    itemsPerPage: number;
  }
  interface StepDisplayProps {
    stepNumber: number;
    title: string;
  }
  interface StepperIndicatorProps {
    activeStep: number;
  }
  interface NavLinkProps {
    path: string;
    label: string;
  }
  interface ContactSellerFormProps {
    user: AppUser;
    sellCarId: number;
    listPrice: number;
    cb: () => void;
  }
  interface FavouriteFormProps {
    authUser: AppUser;
    sellCarId: number;
  }
  interface FilterBarChartProps {
    data: { range: string; count: number; isInRange?: boolean }[];
    localMin: number;
    localMax: number;
  }
  interface CarCardProps {
    id: number;
    mileage: number;
    price: number;
    description: string;
    enquiries: Enquiry[];
    car: SellCar;
    seller: User;
    index: number;
    isHighlight?: boolean;
    isReview?: boolean;
  }
  interface ProfileProps {
    userRole: string;
    userImage: string;
    username: string;
  }
  interface CarsListGridLayoutProps {
    itemsPerPage?: number;
  }
  interface FilterHeaderProps {
    filterTitle: string;
    isDisabled: boolean;
    handleResetClick?: () => void;
  }
  interface AddressInfoProps {
    profileData: TUserProfileFormData;
    cb: (step: number) => void;
    handleSubmit: (data: Partial<TUserProfileFormData>) => void;
    authUser: AppUser;
  }
  interface NavbarMobileProps {
    children: React.ReactNode;
    navLinks: TNavLink[];
  }
  interface ContactSellerModalProps {
    children: React.ReactNode;
    sellCarId: number;
    listPrice: number;
    authUser?: AppUser;
  }
  interface SellCarFormStepProps {
    sellCarFormData: TSellCarFormData;
    handleFormSubmit?: any;
    cb: (name: string) => void;
  }
  interface AvatarInfoProps {
    profileData: TUserProfileFormData;
    cb: (step: number) => void;
    handleSubmit: (data: Partial<TUserProfileFormData>) => void;
    handleAvatarUpload: (url: string) => void;
    authUser: AppUser;
  }
  interface ProfileSetupConfirmProps {
    cb: (step: number) => void;
    profileData: TUserProfileFormData;
    avatarUrl: string;
    authUser: AppUser;
  }
  interface ContactSellerButtonProps {
    authUser?: AppUser;
    sellCarId: number;
    listPrice: number;
    enquiries: Enquiry[];
  }
  interface ViewEnquiryModalProps {
    children: React.ReactNode;
    enquiry: Enquiry;
  }
  interface AppUser {
    cognitoInfo: AuthUser;
    userInfo: User;
    userRole: JsonObject | JsonPrimitive | JsonArray;
  }
}

export { };
