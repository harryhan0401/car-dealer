import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NotificationListItemProps } from "@/lib/types";

const NotificationListItem = ({
  // id,
  avatar,
  title,
  message,
  // read,
}: NotificationListItemProps) => {
  return (
    <div className="w-[300px] flex ps-5 pe-2 py-3 ms-[-1rem] mt-[-0.25rem] mb-[-0.25rem] bg-white hover:bg-[#ccc] focus:bg-accent cursor-pointer gap-2">
      <Avatar>
        <AvatarImage src={avatar} alt={title} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="font-bold text-lg">{title}</div>
        <div className="text-sm font-light text-[#3b3b3b]">{message}</div>
      </div>
    </div>
  );
};
export default NotificationListItem;
