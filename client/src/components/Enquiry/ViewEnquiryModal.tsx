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
import { Calendar, Edit3, Hash } from "lucide-react";
import { formatNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import WithdrawButton from "./WithdrawButton";
import EnquiryModal from "./EnquiryModal";
import { useGetAuthUserQuery } from "@/state/api";

const ViewEnquiryModal = ({ children, enquiry }: ViewEnquiryModalProps) => {
  const { data: authUser } = useGetAuthUserQuery();
  const {
    status,
    offer,
    listPrice,
    message,
    carListingId,
    referenceCode,
    dateTimeCreated,
    dateTimeUpdated,
  } = enquiry;
  const statusColor =
    status === "Received"
      ? "bg-blue-100 text-blue-800 border border-blue-200"
      : status === "Accepted"
        ? "bg-green-100 text-green-800 border border-green-200"
        : "bg-red-100 text-red-800 border border-red-200";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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

        {/* Enquiry Info */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Calendar className="h-3 w-3 text-gray-500" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {dateTimeCreated === dateTimeUpdated ? "Submitted" : "Updated"}
              </span>
            </div>
            <div className="text-sm font-medium text-gray-900">
              {new Date(dateTimeCreated)
                .toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
                .replace(/, /g, " - ")}
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Hash className="h-3 w-3 text-gray-500" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Enquiry ID
              </span>
            </div>
            <div className="text-sm font-medium text-gray-900">
              {referenceCode}
            </div>
          </div>
        </div>

        {/* Offer Section */}
        <div className="mb-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-5">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Your Offer
            </div>
            <div className="text-3xl font-bold text-green-700">
              $ {formatNumber(offer)}
            </div>
          </div>
        </div>

        {/* Message Section */}
        <div className="mb-6">
          <div className="bg-gray-50 border-l-4 border-indigo-500 rounded-lg p-5">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Your Message
            </div>
            <div className="bg-white p-4 rounded-md border border-gray-200 text-sm text-gray-700 leading-relaxed">
              {message}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <WithdrawButton
            cb={() => setIsOpen(false)}
            carListingId={carListingId}
            referenceCode={referenceCode}
          />
          <EnquiryModal
            authUser={authUser}
            carListingId={carListingId}
            offer={offer}
            listPrice={listPrice}
            isEditing={true}
          >
            <Button className="h-full">
              <Edit3 className="size-4" />
              Edit Offer
            </Button>
          </EnquiryModal>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ViewEnquiryModal;
