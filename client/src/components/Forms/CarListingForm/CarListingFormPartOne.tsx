"use client";
import { carSchema, CarData } from "@/lib/schemas";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Type, Fuel, Drive, Transmission, Make } from "@/lib/constants";

import { Button } from "@/components/ui/button";

import { Form } from "@/components/ui/form";

import { CustomFormField } from "../../FormField";

import { useGetAuthUserQuery } from "@/state/api";
import React, { useCallback } from "react";

const CarListingFormPartOne = React.memo(
  ({ carListingFormData, handleFormSubmit, cb }: CarListingFormStepProps) => {
    const { data: authUser } = useGetAuthUserQuery();

    const carForm = useForm<CarData>({
      defaultValues: carListingFormData
        ? carListingFormData
        : {
            model: "",
            year: 2000,
          },
      resolver: zodResolver(carSchema),
    });

    const onSubmit = useCallback(
      async (data: CarData) => {
        if (!authUser?.cognitoInfo?.userId) {
          throw new Error("No seller ID found");
        }
        handleFormSubmit({ ...carListingFormData, ...data });
        cb("item-2");
      },
      [authUser]
    );

    return (
      <Form {...carForm}>
        <form
          onSubmit={carForm.handleSubmit(onSubmit)}
          className="p-4 space-y-10"
        >
          {/*Car Make field */}
          <CustomFormField
            name="make"
            label="Make*"
            type="select"
            placeholder="Select Make"
            options={Object.entries(Make).map(([carMakeValue, carMakeKey]) => ({
              value: carMakeValue,
              label: carMakeKey,
            }))}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-baseline">
            {/*Car Model field */}
            <CustomFormField
              className="md:col-span-2"
              name="model"
              label="Model*"
            />
            {/*Car Year field */}
            <CustomFormField name="year" label="Year*" type="number" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-baseline">
            {/*Car Type field */}
            <CustomFormField
              name="type"
              label="Type*"
              type="select"
              placeholder="Select Type"
              options={Object.entries(Type).map(
                ([carTypeValue, carTypeKey]) => ({
                  value: carTypeValue,
                  label: carTypeKey,
                })
              )}
            />
            {/*Car Fuel field */}
            <CustomFormField
              name="fuel"
              label="Fuel*"
              type="select"
              placeholder="Select Fuel"
              options={Object.entries(Fuel).map(([fuelValue, fuelKey]) => ({
                value: fuelValue,
                label: fuelKey,
              }))}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-baseline">
            {/*Car Drive field */}
            <CustomFormField
              name="drive"
              label="Drive*"
              type="select"
              placeholder="Select Drive"
              options={Object.entries(Drive).map(([driveValue, driveKey]) => ({
                value: driveValue,
                label: driveKey,
              }))}
            />
            {/*Car Transmission field */}
            <CustomFormField
              name="transmission"
              label="Transmission*"
              type="select"
              placeholder="Select Transmission"
              options={Object.entries(Transmission).map(
                ([transmissionValue, transmissionKey]) => ({
                  value: transmissionValue,
                  label: transmissionKey,
                })
              )}
            />
          </div>
          <Button type="submit">Save</Button>
        </form>
      </Form>
    );
  }
);

export default CarListingFormPartOne;
