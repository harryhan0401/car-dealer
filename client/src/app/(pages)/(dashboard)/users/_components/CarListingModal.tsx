"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CarListingForm from "@/components/Forms/CarListingForm/CarListingForm";

export default function CarListingModal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="container rounded-none h-[90%] overflow-y-auto ">
        <DialogHeader>
          <DialogTitle className="sr-only">Sell Car Form</DialogTitle>
        </DialogHeader>
        <div className="mt-5">
          <CarListingForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
