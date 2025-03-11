"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Steps from "./Steps";
import { DialogDescription } from "@radix-ui/react-dialog";

export interface ModalProps {
  children: React.ReactNode;
  filteredMakesModels: FilterMakesModels[];
}
export default function Modal({ children, filteredMakesModels }: ModalProps) {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) setStep(1);
        setOpen(isOpen);
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="container h-[80%] flex flex-col overflow-y-scroll sm:overflow-y-hidden">
        <DialogDescription>
          Use this modal to filter car makes and models. Start by selecting a
          make, then proceed to select a model.
        </DialogDescription>
        <DialogHeader>
          <DialogTitle className="sr-only">
            Select {step == 1 ? "Makes" : "Models"}
          </DialogTitle>
        </DialogHeader>
        <div className="flex-grow grid gap-4 py-4">
          <Steps
            step={step}
            setStep={setStep}
            filteredMakesModels={filteredMakesModels}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
