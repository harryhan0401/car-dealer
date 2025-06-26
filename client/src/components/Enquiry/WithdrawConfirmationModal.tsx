"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useDeleteEnquiryMutation } from "@/state/api";
import { Button } from "../ui/button";

const WithdrawConfirmationModal = ({
  children,
  cb,
  referenceCode,
  sellCarId,
}: WithdrawConfirmationModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteEnquiry] = useDeleteEnquiryMutation();

  const handleWithdraw = async () => {
    await deleteEnquiry({ referenceCode, sellCarId });
    cb();
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">Withdraw Confirmation</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4">
          <p>Are you sure you want to withdraw your enquiry?</p>
          <div className="flex gap-2">
            <Button variant={"destructive"} onClick={handleWithdraw}>
              Yes, Withdraw
            </Button>
            <Button variant={"outline"} onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default WithdrawConfirmationModal;
