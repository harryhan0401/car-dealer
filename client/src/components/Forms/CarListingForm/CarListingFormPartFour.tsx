"use client";
import CarCard from "@/components/Cards/CarCard";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SellCarFormData, sellCarSchema } from "@/lib/schemas";
import { useCreateSellCarMutation, useGetAuthUserQuery } from "@/state/api";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";

const SellCarFormPartFour = ({ sellCarFormData, cb }: SellCarFormStepProps) => {
  const router = useRouter();

  const { data: authUser } = useGetAuthUserQuery();
  const [createSellCar] = useCreateSellCarMutation();
  const { make, model, year, fuel, drive, price, mileage, description } =
    sellCarFormData;

  const sellCarForm = useForm<SellCarFormData>({
    defaultValues: sellCarFormData,
    resolver: zodResolver(sellCarSchema),
  });
  const onSubmit = useCallback(
    async (data: SellCarFormData) => {
      if (!authUser?.cognitoInfo?.userId) {
        throw new Error("No seller ID found");
      }
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "photo" || key.startsWith("optionalPhoto")) {
          const files = value as File[];
          if (files) {
            files.forEach((file: File) => {
              formData.append("photos", file);
            });
          }
        } else if (Array.isArray(value)) {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, String(value));
        }
      });
     

      const res = await createSellCar(formData);
      if (!res.error) {
        router.push("/users");
      }
    },
    [authUser]
  );
  return (
    <>
      <div className="p-2 flex flex-col items-center w-full">
        <CarCard
          id={-1}
          mileage={mileage}
          price={price}
          description={description}
          car={{ make, model, year, fuel, drive }}
          seller={authUser?.userInfo}
          index={0}
          isReview={true}
        />
      </div>
      <Form {...sellCarForm}>
        <form
          onSubmit={sellCarForm.handleSubmit(onSubmit)}
          className="p-4 space-y-10"
        >
          <div className="flex justify-between mt-4">
            <Button onClick={() => cb("item-3")} variant="back">
              Back
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </>
  );
};
export default SellCarFormPartFour;
