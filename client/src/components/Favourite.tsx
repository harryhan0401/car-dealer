import { Heart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import NotificationListItem from "./NotificationListItem";
const Favourite = () => {
  const notificationListItem: NotificationListItem[] = [
    {
      id: 1,
      avatar: "https://randomuser.me/api/portraits",
      title: "John Doe",
      message: "Hello, I am interested in your car",
      read: false,
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits",
      title: "Jane Doe",
      message: "Hello, I am interested in your car",
      read: true,
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits",
      title: "Sam Doe",
      message: "Hello, I am interested in your car",
      read: false,
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="relative rounded px-[0.6rem] py-2 bg-border cursor-pointer">
          <Heart className="size-6" />
          <span className="absolute top-[-0.5rem] right-[-0.5rem] size-5 text-red-500 bg-primary border px-2 rounded-full z-1">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[0.65rem] text-white">
              3
            </div>
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Messages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notificationListItem.map(({ id, avatar, title, message, read }) => (
          <NotificationListItem
            key={id}
            id={id}
            avatar={avatar}
            title={title}
            message={message}
            read={read}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Favourite;
