import ProfileSetupForm from "@/app/(pages)/(dashboard)/users/setup/_components/ProfileSetupForm";
import { User2 } from "lucide-react";

const Setup = () => {
  return (
    <div className="h-screen w-full container">
      <div className="flex flex-col gap-10 justify-center items-center h-full w-full">
        <div className="flex flex-col items-center justify-center">
          <User2 className="border-black border-2 p-1 rounded-full" size={64} />
          <p className="text-2xl font-semibold">Set up your profile</p>
        </div>
        <ProfileSetupForm />
      </div>
    </div>
  );
};
export default Setup;
