"use client";
import { useGetAuthUserQuery } from "@/state/api";
import UserDetails from "../_components/UserDetails";
import { Separator } from "@/components/ui/separator";
import YourCars from "../_components/YourCars";
import Favourites from "../_components/Favourites";
import SellCarForm from "@/components/Forms/SellCarForm/SellCarForm";

const Profile = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  if (isLoading) return <p>Loading...</p>;
  if (!authUser) return <p>You are not authorized to view this page!</p>;
  const {
    firstName,
    lastName,
    email,
    phone,
    preferredContactMethod,
    location,
  } = authUser.userInfo;
  const completeAddress =
    location.address +
    ", " +
    location.city +
    " " +
    location.state +
    ", " +
    location.postalCode +
    ", " +
    location.country;

  return (
    <main className="p-4 h-full w-full">
      <UserDetails
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        preferredContactMethod={preferredContactMethod}
        completeAddress={completeAddress}
      />
      <Separator className="my-4" />
      <YourCars saleCars={authUser.userInfo.carSales} />
      <Separator className="my-4" />
      <Favourites favourites={authUser.userInfo.favourites} />
    </main>
  );
};
export default Profile;
