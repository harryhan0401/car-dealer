"use client";
import { useGetAuthUserQuery } from "@/state/api";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

const UserDetails = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();

  if (isLoading) return <p>Loading...</p>;
  if (!authUser) return <p>You are not authorized to view this page!</p>;

  const { firstName, lastName, email, phone, location } = authUser.userInfo;
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
    <section className="card flex gap-10">
      <div className="relative h-40 w-50">
        <Image src="https://github.com/shadcn.png" fill alt="Avatar" />
      </div>
      <div className="grid w-full">
        <section id="fullname">
          <h2 className="text-xl font-semibold">
            {firstName + " " + lastName}
          </h2>
        </section>
        <section id="email">
          <p className="text-base flex items-center gap-1">
            <MailIcon size={16} /> {email}
          </p>
        </section>
        <section id="phone">
          <p className="text-base flex items-center gap-1">
            <PhoneIcon size={16} /> {phone}
          </p>
        </section>
        <section id="address">
          <p className="text-base flex items-center gap-1">
            <MapPinIcon size={16} /> {completeAddress}
          </p>
        </section>
      </div>
    </section>
  );
};
export default UserDetails;
