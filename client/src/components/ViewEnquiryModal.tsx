"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatNumber } from "@/lib/utils";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { enquiryData, enquirySchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateEnquiryMutation } from "@/state/api";
import { Form } from "./ui/form";
import { CustomFormField } from "./FormField";

const ViewEnquiryModal = ({ children, enquiry }: ViewEnquiryModalProps) => {
  const { status, offerPrice, message } = enquiry;
  const statusColor =
    status === "Received"
      ? "bg-blue-100 text-blue-800 border border-blue-200"
      : status === "Accepted"
        ? "bg-green-100 text-green-800 border border-green-200"
        : "bg-red-100 text-red-800 border border-red-200";

  const [isEditing, setIsEditing] = useState(false);
  const [updateEnquiry] = useUpdateEnquiryMutation();

  const enquiryForm = useForm<enquiryData>({
    defaultValues: enquiry,
    resolver: zodResolver(enquirySchema),
  });
  const onSubmit = async (enquiryData: enquiryData) => {
    console.log("Enquiry Data:", enquiryData);
    // const res = await updateEnquiry({
    //   enquiryId: enquiry.id,
    //   enquiryData,
    // });
    // if (!res.error) setIsEditing(false);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md rounded-xl shadow-lg p-6 bg-white">
        <DialogHeader>
          <div className="flex items-center justify-between mb-2 px-2 pt-3">
            <DialogTitle className="text-2xl font-bold">
              Active Enquiry
            </DialogTitle>
            <span
              className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold ${statusColor} shadow-sm ml-4`}
            >
              {status}
            </span>
          </div>
          <DialogDescription className="sr-only">
            This is where you can view the details of your enquiry. If you have
            any questions, please contact the seller directly.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-3 border">
            {isEditing ? (
              <Form {...enquiryForm}>
                <form
                  onSubmit={enquiryForm.handleSubmit(onSubmit)}
                  className="flex flex-col gap-3"
                >
                  <CustomFormField
                    type="number"
                    name="offerPrice"
                    label="Your Offer*"
                    className="mt-1 w-full rounded-m"
                    placeholder="Enter your offer price"
                  />

                  <CustomFormField
                    name="message"
                    label="Message*"
                    type="textarea"
                    className="mt-1 w-full rounded-m h-[200px] max-h-[200px]"
                  />
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      variant="outline"
                      aria-label="Cancel Edit"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" aria-label="Save Changes">
                      Save Changes
                    </Button>
                  </div>
                </form>
              </Form>
            ) : (
              <>
                <div>
                  <span className="font-semibold text-gray-700">
                    Your Offer:
                  </span>{" "}
                  <span className="text-xl font-bold text-green-600">
                    ${formatNumber(offerPrice)}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Your Message:
                  </span>
                  <div className="mt-2 p-3 rounded-md bg-gray-100 text-sm text-gray-800 border">
                    {message}
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <Button aria-label="Edit" onClick={() => setIsEditing(true)}>
                    Edit
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ViewEnquiryModal;
