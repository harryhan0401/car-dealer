"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { handleSignOut } from "@/lib/utils";
import { Avatar } from "../ui/avatar";

const Profile = ({ userRole, userImage, username }: ProfileProps) => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
        <Avatar className="rounded-sm z-10">
          <AvatarImage src={userImage} />
          <AvatarFallback className="bg-accent">
            {username.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <p className="bg-border ps-5 pe-2 py-1 ms-[-0.8rem] rounded focus:outline-none">
          {username}
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white text-secondary py-3">
        <DropdownMenuItem
          className="cursor-pointer hover:!bg-black hover:!text-white font-bold px-2 "
          onClick={() => router.push(`/${userRole.toLowerCase()}s`)}
        >
          View profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer hover:!bg-black hover:!text-white font-bold px-2 my-2"
          onClick={() =>
            router.push(`/${userRole.toLowerCase()}s/settings`, {
              scroll: false,
            })
          }
        >
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer hover:!bg-black hover:!text-white font-bold px-2"
          onClick={handleSignOut}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Profile;
