import { Skeleton } from "@/components/ui/skeleton";

const CarListingSkeleton = () => {
  return (
    <div className="flex flex-col p-4 h-screen">
      <section id="car-header">
        <Skeleton className="h-[40px] w-[192px]" />
        <div className="flex my-5 gap-10 items-center">
          <Skeleton className="relative min-w-[500px] min-h-[300px] h-[500px] w-[60%]" />
          <Skeleton className="flex-1 min-h-[300px] h-[500px]" />
        </div>
      </section>
      <Skeleton />
    </div>
  );
};
export default CarListingSkeleton;
