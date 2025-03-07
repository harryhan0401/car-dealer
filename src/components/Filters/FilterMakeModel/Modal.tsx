"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import SelectMakes from "./SelectMakes";
import SelectModels from "./SelectModels";

export interface MakesProps {
  selectedMakesModels: FilterMakesModels[];
  setSelectedMakesModels: (filter: FilterMakesModels[]) => void;
}

interface ModalProps extends MakesProps {
  children: React.ReactNode;
}
export default function Modal({
  children,
  selectedMakesModels,
  setSelectedMakesModels,
}: ModalProps) {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="container h-[80%] flex flex-col overflow-y-scroll sm:overflow-y-hidden">
        <DialogHeader>
          <DialogTitle className="sr-only">
            Select {step == 1 ? "Makes" : "Models"}
          </DialogTitle>
        </DialogHeader>
        <div className="flex-grow grid gap-4 py-4">
          {step === 1 && (
            <SelectMakes
              selectedMakesModels={selectedMakesModels}
              setSelectedMakesModels={setSelectedMakesModels}
            />
          )}
          {step === 2 && (
            <SelectModels
              selectedMakesModels={selectedMakesModels}
              setSelectedMakesModels={setSelectedMakesModels}
            />
          )}
        </div>
        <DialogFooter>
          {step > 1 ? (
            <Button variant={"outline"} onClick={prevStep}>
              Back
            </Button>
          ) : (
            <DialogClose asChild>
              <Button variant={"outline"}>Cancel</Button>
            </DialogClose>
          )}
          {step < 2 ? (
            <Button onClick={nextStep}>Next</Button>
          ) : (
            <Button>Apply changes</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
