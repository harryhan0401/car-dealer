"use client";
import { useCallback, useMemo, useRef, useState } from "react";
import SellCarFormPartOne from "./SellCarFormPartOne";
import SellCarFormPartTwo from "./SellCarFormPartTwo";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StepDisplay from "../StepDisplay";
import SellCarFormPartThree from "./SellCarFormPartThree";
import { CarData, SaleCarData } from "@/lib/schemas";

type TSellCarFormData = SaleCarData & CarData;
const SellCarForm = () => {
  const [sellCarFormData, setSellCarFormData] = useState<TSellCarFormData>();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handlCarFormSubmit = useCallback((formData: TSellCarFormData) => {
    setSellCarFormData(formData); // Set Sell Car Form Data
  }, []);

  const handleAccordionItemFocus = useCallback((itemName: string) => {
    setOpenItem(itemName); // Updates the accordion item focus
  }, []);
  return (
    <Accordion
      type="single"
      value={openItem == null ? "item-1" : openItem}
      onValueChange={handleAccordionItemFocus}
      collapsible
      className="w-full"
    >
      {/*Sell Car form step 1 */}
      <AccordionItem value="item-1">
        <AccordionTrigger style={{ textDecoration: "none" }}>
          <StepDisplay stepNumber={1} title="Find your car" />
        </AccordionTrigger>
        <AccordionContent>
          <SellCarFormPartOne
            sellCarFormData={sellCarFormData}
            handleFormSubmit={handlCarFormSubmit}
            cb={handleAccordionItemFocus}
          />
        </AccordionContent>
      </AccordionItem>
      {/*Sell Car form step 2 */}
      <AccordionItem value="item-2" disabled={!sellCarFormData}>
        <AccordionTrigger>
          <StepDisplay stepNumber={2} title="Enter car details" />
        </AccordionTrigger>
        <AccordionContent>
          <SellCarFormPartTwo
            sellFormData={sellCarFormData}
            handleFormSubmit={handlCarFormSubmit}
            cb={handleAccordionItemFocus}
          />
        </AccordionContent>
      </AccordionItem>
      {/*Sell Car form step 3 */}
      <AccordionItem
        value="item-3"
        disabled={!sellCarFormData || sellCarFormData!.vin === ""}
      >
        <AccordionTrigger>
          <StepDisplay stepNumber={3} title="Upload car photos" />
        </AccordionTrigger>
        <AccordionContent>
          <SellCarFormPartThree
            sellFormData={sellCarFormData}
            handleFormSubmit={handlCarFormSubmit}
            cb={handleAccordionItemFocus}
          />
        </AccordionContent>
      </AccordionItem>
      {/*Sell Car form step 4 */}
      <AccordionItem value="item-4" disabled={!sellCarFormData?.isCompleted}>
        <AccordionTrigger>
          <StepDisplay stepNumber={4} title="Review" />
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
      {/*Sell Car form step 5 */}
      <AccordionItem value="item-5" disabled={!sellCarFormData?.isCompleted}>
        <AccordionTrigger>
          <StepDisplay stepNumber={5} title="Submit" />
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default SellCarForm;
