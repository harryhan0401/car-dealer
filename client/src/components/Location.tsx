"use client";
import { cn } from "@/lib/utils";
import { useGetAuthUserQuery } from "@/state/api";
import { MapPin } from "lucide-react";

const Location = ({ className }: { className?: string }) => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  if (isLoading) return null;
  if (!authUser?.userInfo.location?.city) return null;
  return (
    <div className={cn("hidden lg:flex items-center gap-1", className)}>
      <MapPin className="size-5" />
      <div>{authUser?.userInfo.location?.city}</div>
    </div>
  );
};
export default Location;
