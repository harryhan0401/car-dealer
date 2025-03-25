"use client";
import { saleCarSchema2, SaleCarData2 } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import React, { useCallback } from "react";
import { CustomFormField } from "../FormField";
import { useGetAuthUserQuery } from "@/state/api";
import { Form } from "../ui/form";
import { Car, SaleCar } from "@/types/prismaTypes";

const SellCarFormPartThree = React.memo(
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

    const saleForm = useForm<SaleCarData2>({
      defaultValues: {
        photoUrls: sellFormData.photoUrls || [], // Assuming this is an array of URLs
      },
    });

    const onSubmit = useCallback(
      async (data: SaleCarData2) => {
        if (!authUser?.cognitoInfo?.userId) {
          throw new Error("No seller ID found");
        }
        data.isCompleted = true;
        console.log({ ...sellFormData, ...data });
        handleFormSubmit({ ...sellFormData, ...data });
        cb("item-4");
      },
      [authUser]
    );

    return (
      <Form {...saleForm}>
        <form
          onSubmit={saleForm.handleSubmit(onSubmit)}
          className="p-4 space-y-10"
        >
          <CustomFormField type="file" name="photoUrls" label="Photo*" />

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
export default SellCarFormPartThree;
