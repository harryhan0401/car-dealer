"use client";
import { useCallback, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StepDisplay from "@/components/StepDisplay";
import { AccordionHeader } from "@radix-ui/react-accordion";
import { useGetAuthUserQuery } from "@/state/api";
import Authentication from "@/components/Authentication/Authentication";
import CarListingFormPartOne from "./CarListingFormPartOne";
import CarListingFormPartTwo from "./CarListingFormPartTwo";
import CarListingFormPartThree from "./CarListingFormPartThree";
import CarListingFormPartFour from "./CarListingFormPartFour";

const CarListingForm = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const [carListingFormData, setCarListingFormData] =
    useState<TCarListingFormData>();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handlCarFormSubmit = useCallback((formData: TCarListingFormData) => {
    setCarListingFormData(formData); // Set Sell Car Form Data
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
              <CarListingFormPartOne
                carListingFormData={carListingFormData!}
                handleFormSubmit={handlCarFormSubmit}
                cb={handleAccordionItemFocus}
              />
            </AccordionContent>
          </AccordionItem>
          {/*Sell Car form step 2 */}
          <AccordionItem value="item-2" disabled={!carListingFormData}>
            <AccordionTrigger style={{ textDecoration: "none" }}>
              <StepDisplay stepNumber={2} title="Enter car details" />
            </AccordionTrigger>
            <AccordionContent>
              <CarListingFormPartTwo
                carListingFormData={carListingFormData!}
                handleFormSubmit={handlCarFormSubmit}
                cb={handleAccordionItemFocus}
              />
            </AccordionContent>
          </AccordionItem>
          {/*Sell Car form step 3 */}
          <AccordionItem
            value="item-3"
            disabled={
              !carListingFormData?.vin &&
              !carListingFormData?.mileage &&
              !carListingFormData?.price &&
              !carListingFormData?.description
            }
          >
            <AccordionTrigger style={{ textDecoration: "none" }}>
              <StepDisplay stepNumber={3} title="Upload car photos" />
            </AccordionTrigger>
            <AccordionContent>
              <CarListingFormPartThree
                carListingFormData={carListingFormData!}
                handleFormSubmit={handlCarFormSubmit}
                cb={handleAccordionItemFocus}
              />
            </AccordionContent>
          </AccordionItem>
          {/*Sell Car form step 4 */}
          <AccordionItem
            value="item-4"
            disabled={!carListingFormData?.photo?.length}
          >
            <AccordionTrigger style={{ textDecoration: "none" }}>
              <StepDisplay stepNumber={4} title="Review" />
            </AccordionTrigger>
            <AccordionContent>
              <CarListingFormPartFour
                carListingFormData={carListingFormData!}
                cb={handleAccordionItemFocus}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <div className="flex  justify-center w-full">
          <div className="grid gap-5 items-center w-1/2">
            <div className="text-center text-2xl font-semibold flex flex-col items-center gap-2">
              Please sign in to sell your car
            </div>
            <Authentication />
          </div>
        </div>
      )}
    </div>
  );
};
export default CarListingForm;
