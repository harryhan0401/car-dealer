"use client";
import { useCallback, useState } from "react";
import SellCarFormPartOne from "./SellCarFormPartOne";
import SellCarFormPartTwo from "./SellCarFormPartTwo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StepDisplay from "@/components/StepDisplay";
import SellCarFormPartThree from "./SellCarFormPartThree";
import { TSellCarFormData } from "@/lib/types";
import SellCarFormPartFour from "./SellCarFormPartFour";
import { AccordionHeader } from "@radix-ui/react-accordion";
import { useGetAuthUserQuery } from "@/state/api";
import Authentication from "@/components/Authentication/Authentication";

import { Angry } from "lucide-react";

const SellCarForm = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const [sellCarFormData, setSellCarFormData] = useState<TSellCarFormData>();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handlCarFormSubmit = useCallback((formData: TSellCarFormData) => {
    setSellCarFormData(formData); // Set Sell Car Form Data
  }, []);

  const handleAccordionItemFocus = useCallback((itemName: string) => {
    setOpenItem(itemName); // Updates the accordion item focus
  }, []);
  return (
    <div className="card">
      {authUser ? (
        <Accordion
          type="single"
          value={openItem == null ? "item-1" : openItem}
          onValueChange={handleAccordionItemFocus}
          collapsible
          className="w-full"
        >
          <AccordionItem value="header">
            <AccordionHeader>
              <div className="text-center text-2xl font-bold mb-4">
                Sell your car
              </div>
            </AccordionHeader>
          </AccordionItem>
          {/*Sell Car form step 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger style={{ textDecoration: "none" }}>
              <StepDisplay stepNumber={1} title="Find your car" />
            </AccordionTrigger>
            <AccordionContent>
              <SellCarFormPartOne
                sellCarFormData={sellCarFormData!}
                handleFormSubmit={handlCarFormSubmit}
                cb={handleAccordionItemFocus}
              />
            </AccordionContent>
          </AccordionItem>
          {/*Sell Car form step 2 */}
          <AccordionItem value="item-2" disabled={!sellCarFormData}>
            <AccordionTrigger style={{ textDecoration: "none" }}>
              <StepDisplay stepNumber={2} title="Enter car details" />
            </AccordionTrigger>
            <AccordionContent>
              <SellCarFormPartTwo
                sellCarFormData={sellCarFormData!}
                handleFormSubmit={handlCarFormSubmit}
                cb={handleAccordionItemFocus}
              />
            </AccordionContent>
          </AccordionItem>
          {/*Sell Car form step 3 */}
          <AccordionItem
            value="item-3"
            disabled={
              !sellCarFormData?.vin &&
              !sellCarFormData?.mileage &&
              !sellCarFormData?.price &&
              !sellCarFormData?.description
            }
          >
            <AccordionTrigger style={{ textDecoration: "none" }}>
              <StepDisplay stepNumber={3} title="Upload car photos" />
            </AccordionTrigger>
            <AccordionContent>
              <SellCarFormPartThree
                sellCarFormData={sellCarFormData!}
                handleFormSubmit={handlCarFormSubmit}
                cb={handleAccordionItemFocus}
              />
            </AccordionContent>
          </AccordionItem>
          {/*Sell Car form step 4 */}
          <AccordionItem
            value="item-4"
            disabled={!sellCarFormData?.photo?.length}
          >
            <AccordionTrigger style={{ textDecoration: "none" }}>
              <StepDisplay stepNumber={4} title="Review" />
            </AccordionTrigger>
            <AccordionContent>
              <SellCarFormPartFour
                sellCarFormData={sellCarFormData!}
                cb={handleAccordionItemFocus}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <div className="flex  justify-center w-full">
          <div className="grid gap-10 items-center w-1/2">
            <div className="text-center text-2xl font-semibold flex flex-col items-center gap-2">
              Please sign in to sell your car
              <span>
                <Angry className="text-primary" size={50} />
              </span>
            </div>
            <Authentication />
          </div>
        </div>
      )}
    </div>
  );
};
export default SellCarForm;
