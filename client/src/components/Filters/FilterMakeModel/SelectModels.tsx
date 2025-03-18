import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StepType } from "@/lib/types";
import { getUniqueModelsByMake } from "@/lib/utils";
import { ChangeEvent } from "react";

export function SelectModels({
  selectedMakesModels,
  setSelectedMakesModels,
  saleCars
}: StepType) {
  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const make = e.target.getAttribute("name")!;
    const model = e.target.value;

    // Find the selected make
    const selectedMakeIndex = selectedMakesModels.findIndex(
      (car) => car.make === make
    );

    if (selectedMakeIndex !== -1) {
      const updatedMake = selectedMakesModels[selectedMakeIndex];
      let updatedModels = updatedMake.models;
      // Remove the model if it exists in the models array
      if (updatedModels.includes(model)) {
        updatedModels = updatedModels.filter(
          (existingModel) => existingModel !== model
        );
      } else {
        updatedModels.push(model);
      }
      if (updatedModels.length === 0) {
        setSelectedMakesModels(
          selectedMakesModels.filter((o) => o.make !== make)
        );
      } else {
        // Create a new array with the updated models
        const newSelectedMakesModels = [
          ...selectedMakesModels.slice(0, selectedMakeIndex),
          { ...updatedMake, models: updatedModels },
          ...selectedMakesModels.slice(selectedMakeIndex + 1),
        ];
        setSelectedMakesModels(newSelectedMakesModels);
      }
    }
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      {selectedMakesModels.map((makeModels) => {
        const modelOptions = getUniqueModelsByMake(saleCars, makeModels.make);
        return (
          <AccordionItem
            value={makeModels.make}
            key={makeModels.make + "-" + Math.random()}
          >
            <AccordionTrigger>{makeModels.make}</AccordionTrigger>
            <AccordionContent>
              {modelOptions.map((model) => (
                <div key={model + "-" + makeModels.make + "-" + Math.random()}>
                  <input
                    type="checkbox"
                    name={makeModels.make}
                    value={model}
                    defaultChecked={makeModels.models.includes(model)}
                    onChange={(event) => handleOptionChange(event)}
                  />
                  <label>{model}</label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
