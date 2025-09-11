"use client";
import { carListingSchema1, CarListingData1 } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import React, { useCallback } from "react";
import { CustomFormField } from "../../FormField";
import { useGetAuthUserQuery } from "@/state/api";
import { Form } from "../../ui/form";

const CarListingFormPartTwo = React.memo(
  ({ carListingFormData, handleFormSubmit, cb }: CarListingFormStepProps) => {
    const { data: authUser } = useGetAuthUserQuery();
    const { vin, mileage, price, description } = carListingFormData;

    const sellForm = useForm<CarListingData1>({
      defaultValues: {
        vin: vin ? vin : "",
        mileage: mileage ? mileage : 0,
        price: price ? price : 2000,
        description: description ? description : "",
      },
      resolver: zodResolver(carListingSchema1),
    });

    const onSubmit = useCallback(
      async (data: CarListingData1) => {
        if (!authUser?.cognitoInfo?.userId) {
          throw new Error("No seller ID found");
        }
        handleFormSubmit({ ...carListingFormData, ...data });
        cb("item-3");
      },
      [authUser]
    );

    return (
      <Form {...sellForm}>
        <form
          onSubmit={sellForm.handleSubmit(onSubmit)}
          className="p-4 space-y-10"
        >
          {/* CarListing VIN field */}
          <CustomFormField name="vin" label="VIN*" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-baseline">
            {/*CarListing Mileage field */}
            <CustomFormField name="mileage" label="Mileage*" type="number" />

            {/*CarListing Mileage field */}
            <CustomFormField name="price" label="Price*" type="number" />
          </div>

          {/*CarListing Description field */}
          <CustomFormField
            name="description"
            label="Description*"
            type="textarea"
          />

          <div className="flex gap-10">
            <Button onClick={() => cb("item-1")} variant="back">
              Back
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    );
  }
);
export default CarListingFormPartTwo;
