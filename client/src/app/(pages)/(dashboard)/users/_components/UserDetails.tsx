import Image from "next/image";

interface UserDetailsProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContactMethod: string;
  completeAddress: string;
}
const UserDetails = ({
  firstName,
  lastName,
  email,
  phone,
  preferredContactMethod,
  completeAddress,
}: UserDetailsProps) => {
  return (
    <section className="flex gap-10">
      <div className="relative h-40 w-50">
        <Image src="https://github.com/shadcn.png" fill alt="Avatar" />
      </div>
      <div className=" grid space-y-2 w-full">
        <section id="fullname">
          <p>
            <span className="font-semibold">Fullname:</span>{" "}
            {firstName + " " + lastName}
          </p>
        </section>
        <section id="email">
          <p>
            <span className="font-semibold">Email:</span> {email}
          </p>
        </section>
        <section id="email">
          <p>
            <span className="font-semibold">Phone:</span> {phone}
          </p>
        </section>
        <section id="address">
          <p>
            <span className="font-semibold">Address:</span> {completeAddress}
          </p>
        </section>
        <section id="preferredContactMethod">
          <p>
            <span className="font-semibold">Preferred Contact Method:</span>{" "}
            {preferredContactMethod}
          </p>
        </section>
      </div>
    </section>
  );
};
export default UserDetails;
