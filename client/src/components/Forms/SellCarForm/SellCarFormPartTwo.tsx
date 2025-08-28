"use client";
import { sellCarSchema1, SellCarData1 } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import React, { useCallback } from "react";
import { CustomFormField } from "../../FormField";
import { useGetAuthUserQuery } from "@/state/api";
import { Form } from "../../ui/form";

const SellCarFormPartTwo = React.memo(
  ({ sellCarFormData, handleFormSubmit, cb }: SellCarFormStepProps) => {
    const { data: authUser } = useGetAuthUserQuery();
    const { vin, mileage, price, description } = sellCarFormData;

    const sellForm = useForm<SellCarData1>({
      defaultValues: {
        vin: vin ? vin : "",
        mileage: mileage ? mileage : 0,
        price: price ? price : 2000,
        description: description ? description : "",
      },
      resolver: zodResolver(sellCarSchema1),
    });

    const onSubmit = useCallback(
      async (data: SellCarData1) => {
        if (!authUser?.cognitoInfo?.userId) {
          throw new Error("No seller ID found");
        }
        handleFormSubmit({ ...sellCarFormData, ...data });
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
          {/* SellCar VIN field */}
          <CustomFormField name="vin" label="VIN*" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-baseline">
            {/*SellCar Mileage field */}
            <CustomFormField name="mileage" label="Mileage*" type="number" />

            {/*SellCar Mileage field */}
            <CustomFormField name="price" label="Price*" type="number" />
          </div>

          {/*SellCar Description field */}
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
export default SellCarFormPartTwo;
