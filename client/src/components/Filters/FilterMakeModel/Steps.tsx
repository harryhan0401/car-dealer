import { useState } from "react";
import SelectMakes from "./SelectMakes";
import { SelectModels } from "./SelectModels";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { useQueryState } from "nuqs";
import { convertToMakeModelsString } from "@/lib/utils";

interface StepsProps {
  step: number;
  setStep: (step: number) => void;
  filteredMakesModels: FilterMakesModels[];
}
const Steps = ({ step, setStep, filteredMakesModels }: StepsProps) => {
  const [selectedMakesModels, setSelectedMakesModels] =
    useState<FilterMakesModels[]>(filteredMakesModels);

  const [, setMakeModels] = useQueryState("makeModels");

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  return (
    <>
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
          <Button disabled={selectedMakesModels.length == 0} onClick={nextStep}>
            Next
          </Button>
        ) : (
          <DialogClose asChild>
            <Button
              disabled={selectedMakesModels.length == 0}
              onClick={() =>
                setMakeModels(convertToMakeModelsString(selectedMakesModels))
              }
            >
              Apply changes
            </Button>
          </DialogClose>
        )}
      </DialogFooter>
    </>
  );
};
export default Steps;
