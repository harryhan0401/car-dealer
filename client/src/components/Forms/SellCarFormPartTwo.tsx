"use client";
import { saleCarSchema1, SaleCarData1 } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import React, { useCallback } from "react";
import { CustomFormField } from "../FormField";
import { useCreateSaleCarMutation, useGetAuthUserQuery } from "@/state/api";
import { Form } from "../ui/form";
import { Car, SaleCar } from "@/types/prismaTypes";

const SellCarFormPartTwo = React.memo(
  ({
    sellFormData,
    handleFormSubmit,
    cb,
  }: {
    sellFormData: Car & SaleCar;
    handleFormSubmit: any;
    cb: (name: string) => void;
  }) => {
    const { data: authUser } = useGetAuthUserQuery();
    const { vin, mileage, price, description } = sellFormData;

    const saleForm = useForm<SaleCarData1>({
      defaultValues: {
        vin: vin ? vin : "",
        mileage: mileage ? mileage : 0,
        price: price ? price : 2000,
        description: description ? description : "",
      },
      resolver: zodResolver(saleCarSchema1),
    });

    const onSubmit = useCallback(
      async (data: SaleCarData1) => {
        if (!authUser?.cognitoInfo?.userId) {
          throw new Error("No seller ID found");
        }
        data.carId = sellFormData.id;
        const { id, ...carDataWithoutId } = sellFormData;
        handleFormSubmit({ ...carDataWithoutId, ...data });
        // cb("item-3");
      },
      [authUser]
    );

    return (
      <Form {...saleForm}>
        <form
          onSubmit={saleForm.handleSubmit(onSubmit)}
          className="p-4 space-y-10"
        >
          {/* SaleCar VIN field */}
          <CustomFormField name="vin" label="VIN*" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-baseline">
            {/*SaleCar Mileage field */}
            <CustomFormField name="mileage" label="Mileage*" type="number" />

            {/*SaleCar Mileage field */}
            <CustomFormField name="price" label="Price*" type="number" />
          </div>

          {/*SaleCar Description field */}
          <CustomFormField
            name="description"
            label="Description*"
            type="textarea"
          />

          <div className="flex gap-10">
            <Button onClick={() => cb("item-1")} variant="back">
              Back
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      </Form>
    );
  }
);
export default SellCarFormPartTwo;
