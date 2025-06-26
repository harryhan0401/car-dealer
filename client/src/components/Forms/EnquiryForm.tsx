"use client";

import { enquiryData, enquirySchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { CustomFormField } from "../FormField";
import { Button } from "../ui/button";
import { useUpsertEnquiryMutation } from "@/state/api";
import { Send } from "lucide-react";
import { Slider } from "../ui/slider";
import { useState } from "react";

const EnquiryForm = ({
  user,
  sellCarId,
  offer,
  listPrice,
  cb,
  isEditing,
}: EnquiryFormProps) => {
  const [createEnquiry, { isLoading }] = useUpsertEnquiryMutation();

  const [offerValue, setOfferValue] = useState(offer || listPrice);

  const defaultMessage = `Hi,\nI'm interested in your vehicle listing. I would like to know more details about this vehicle. Please contact me at your earliest convenience.\n\nBest regards`;

  const enquiryForm = useForm<enquiryData>({
    defaultValues: {
      cognitoId: user?.cognitoInfo.userId || "",
      offer: offer || listPrice,
      listPrice: listPrice,
      message: defaultMessage,
    },
    resolver: zodResolver(enquirySchema),
  });

  const updateOffer = (value: number) => {
    setOfferValue(value);
    enquiryForm.setValue("offer", value);
  };

  const onSubmit = async (enquiryData: enquiryData) => {
    const res = await createEnquiry({
      sellCarId: sellCarId,
      enquiryData,
    });
    if (!res.error) {
      cb();
    }
  };
  return (
    <Form {...enquiryForm}>
      <form
        onSubmit={enquiryForm.handleSubmit(onSubmit)}
        className="mt-4 space-y-4"
      >
        <label htmlFor="offer" className="text-sm font-medium text-gray-700">
          Offer Price*
        </label>
        {/* Offer Display */}
        <div className="bg-gray-100 p-4 rounded-lg space-y-4">
          <div className="flex items-baseline justify-center space-x-1">
            <p className="text-gray-600 text-xl font-semibold">$</p>
            <p className="text-3xl font-bold text-orange-500">
              {offerValue.toLocaleString()}
            </p>
          </div>

          {/* Shadcn Slider */}
          <div className="space-y-2">
            <Slider
              min={Math.round(0.6 * listPrice)}
              max={Math.round(1.8 * listPrice)}
              step={500}
              value={[offerValue]}
              onValueChange={(value) => updateOffer(value[0])}
              className="[&_[data-slot='slider-track']]:bg-[#e0e0e0] w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>${Math.round(0.6 * listPrice).toLocaleString()}</span>
              <span>${Math.round(1.8 * listPrice).toLocaleString()}</span>
            </div>
          </div>

          {/* Quick Buttons */}
          <div className="grid grid-cols-2 gap-3">
            {[0.6, 1.8].map((multiplier) => {
              const value = Math.round(listPrice * multiplier);
              return (
                <button
                  key={value}
                  type="button"
                  className={`border-2 rounded-md p-3 text-sm font-medium flex flex-col items-center 
            ${offerValue === value ? "bg-orange-500 text-white border-orange-500" : "border-gray-200 bg-white text-gray-800"}
          `}
                  onClick={() => updateOffer(value)}
                >
                  <span className="text-xs opacity-70">
                    {multiplier === 0.6 ? "Minimum" : "Maximum"}
                  </span>
                  <span className="font-semibold">
                    ${value.toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <CustomFormField
          name="message"
          label="Message*"
          type="textarea"
          className="mt-1 w-full rounded-m h-[200px] max-h-[200px]"
        />
        <Button className="w-full">
          <span>
            <Send />
          </span>
          {isLoading ? (
            <p className="text-muted">
              {isEditing ? "Updating..." : "Sending..."}
            </p>
          ) : isEditing ? (
            "Update offer"
          ) : (
            "Send offer"
          )}
        </Button>
      </form>
    </Form>
  );
};
export default EnquiryForm;
