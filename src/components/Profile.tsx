import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex items-center">
      <Image
        src={"https://placehold.co/32x32"}
        height={32}
        width={32}
        alt="profile"
        className="rounded-sm z-10"
      />
      <div className="bg-border ps-5 pe-2 py-1 ms-[-0.8rem] rounded">
        Harry Han
      </div>
    </div>
  );
};
export default Profile;
