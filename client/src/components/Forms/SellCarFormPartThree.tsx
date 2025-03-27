"use client";
import { saleCarSchema2, SaleCarData2 } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import React, { useCallback } from "react";
import { CustomFormField } from "../FormField";
import { useGetAuthUserQuery } from "@/state/api";
import { Form } from "../ui/form";
import { TSellCarFormData } from "@/lib/types";

const plusSymbolSVG = `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="54" height="54" stroke="gray" stroke-width="2" stroke-dasharray="4,4" fill="none" rx="6"/><line x1="30" y1="15" x2="30" y2="45" stroke="gray" stroke-width="4"/><line x1="15" y1="30" x2="45" y2="30" stroke="gray" stroke-width="4"/></svg>`;

const SellCarFormPartThree = React.memo(
  ({
    sellCarFormData,
    handleFormSubmit,
    cb,
  }: {
    sellCarFormData: TSellCarFormData;
    handleFormSubmit: any;
    cb: (name: string) => void;
  }) => {
    const { data: authUser } = useGetAuthUserQuery();

    const saleForm = useForm<SaleCarData2>({
      defaultValues: {
        photo: sellCarFormData.photo,
        optionalPhoto1: sellCarFormData.optionalPhoto1,
        optionalPhoto2: sellCarFormData.optionalPhoto2,
        optionalPhoto3: sellCarFormData.optionalPhoto3,
        optionalPhoto4: sellCarFormData.optionalPhoto4,
        optionalPhoto5: sellCarFormData.optionalPhoto5,
      },
      resolver: zodResolver(saleCarSchema2),
    });

    const onSubmit = useCallback(
      async (data: SaleCarData2) => {
        if (!authUser?.cognitoInfo?.userId) {
          throw new Error("No seller ID found");
        }
        handleFormSubmit({ ...sellCarFormData, ...data });
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
          <div id="upload-image">
            <CustomFormField
              type="file"
              multiple={false}
              name="photo"
              filePondLabelIdle={`Pick the best photo. This will be displayed as thumbnail`}
              className="filepond-image-1"
            />
            <CustomFormField
              type="file"
              name="optionalPhoto1"
              filePondLabelIdle={`${plusSymbolSVG}`}
              className="filepond-image-2"
              isOptionalPhotoField={true}
            />
            <CustomFormField
              type="file"
              name="optionalPhoto2"
              filePondLabelIdle={`${plusSymbolSVG}`}
              className="filepond-image-3"
              isOptionalPhotoField={true}
            />
            <CustomFormField
              type="file"
              name="optionalPhoto3"
              filePondLabelIdle={`${plusSymbolSVG}`}
              className="filepond-image-4"
              isOptionalPhotoField={true}
            />
            <CustomFormField
              type="file"
              name="optionalPhoto4"
              filePondLabelIdle={`${plusSymbolSVG}`}
              className="filepond-image-5"
              isOptionalPhotoField={true}
            />
            <CustomFormField
              type="file"
              name="optionalPhoto5"
              filePondLabelIdle={`${plusSymbolSVG}`}
              className="filepond-image-6"
              isOptionalPhotoField={true}
            />
          </div>

          <div className="flex gap-10">
            <Button onClick={() => cb("item-2")} variant="back">
              Back
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    );
  }
);
export default SellCarFormPartThree;
