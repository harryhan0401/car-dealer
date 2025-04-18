import { Separator } from "@/components/ui/separator";
import { profileSetupSteps } from "@/lib/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import React, { Fragment } from "react";

interface StepperIndicatorProps {
  activeStep: number;
}

const StepperIndicator = ({ activeStep }: StepperIndicatorProps) => {
  return (
    <div className="flex justify-center items-center w-[70px] sm:w-[170px] lg:w-[250px] xl:w-[300px]">
      {profileSetupSteps.map(({ step, title }) => (
        <Fragment key={step}>
          <div className="relative">
            <div
              className={clsx(
                "size-10 border-2 rounded-full relative",
                step < activeStep && "bg-primary border-none text-white",
                step === activeStep && "border-primary text-primary"
              )}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {step >= activeStep ? (
                  step
                ) : (
                  <Check className=" size-4 sm:size-5 md:size-6" />
                )}
              </div>
            </div>
            <p className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 whitespace-nowrap text-sm sm:text-base">
              {title}
            </p>
          </div>
          {step !== profileSetupSteps.length && (
            <Separator
              orientation="horizontal"
              className={clsx(
                "w-[100px] h-[2px]",
                step <= activeStep - 1 && "bg-primary"
              )}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default StepperIndicator;
