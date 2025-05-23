import UserDetails from "../_components/UserDetails";
import { Separator } from "@/components/ui/separator";
import YourCars from "../_components/YourCars";
import Favourites from "../_components/Favourites";

const Profile = () => {
  return (
    <main className="p-4 h-full w-full">
      <UserDetails />
      <Separator className="my-4" />
      <div className="grid grid-cols-1 min-h-[400px] md:grid-cols-2 md:min-h-[175px] gap-10">
        <YourCars />
        <Favourites />
      </div>
    </main>
  );
};
export default Profile;
