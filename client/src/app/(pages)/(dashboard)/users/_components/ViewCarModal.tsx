import CarCard from "@/components/Cards/CarCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SaleCar } from "@/types/prismaTypes";

const ViewCarModal = ({
  children,
  saleCar,
}: {
  children: React.ReactNode;
  saleCar: SaleCar;
}) => {
  console.log(saleCar);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="rounded-none h-[80%] overflow-y-auto ">
        <DialogHeader>
          <DialogTitle className="sr-only">View Sale Car</DialogTitle>
        </DialogHeader>
        <CarCard {...saleCar} index={0} />
      </DialogContent>
    </Dialog>
  );
};
export default ViewCarModal;
