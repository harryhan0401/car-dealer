import CarCard from "@/components/Cards/CarCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SellCar } from "@/types/prismaTypes";

const ViewCarModal = ({
  children,
  sellCar,
}: {
  children: React.ReactNode;
  sellCar: SellCar;
}) => {
  console.log(sellCar);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="rounded-none h-[80%] overflow-y-auto ">
        <DialogHeader>
          <DialogTitle className="sr-only">View Sale Car</DialogTitle>
        </DialogHeader>
        <CarCard {...sellCar} index={0} />
      </DialogContent>
    </Dialog>
  );
};
export default ViewCarModal;
