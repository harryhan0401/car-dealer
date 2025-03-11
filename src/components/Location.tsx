import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

const Location = ({ className }: { className?: string }) => {
  return (
    <div className={cn("hidden lg:flex items-center gap-1", className)}>
      <MapPin className="size-5" />
      <div>Melbourne</div>
    </div>
  );
};
export default Location;
