import { Skeleton } from "@/components/ui/skeleton";

const CustomCardSkeleton = () => {
  return (
    <div className="card rounded-2xl">
      <Skeleton className="h-[250px] w-full object-cover object-center rounded-2xl" />
    </div>
  );
};
export default CustomCardSkeleton;
