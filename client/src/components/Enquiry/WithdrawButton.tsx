"use client";

import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import WithdrawConfirmationModal from "./WithdrawConfirmationModal";

const WithdrawButton = ({
  cb,
  referenceCode,
  sellCarId,
}: WithdrawButtonProps) => {
  return (
    <WithdrawConfirmationModal
      cb={cb}
      referenceCode={referenceCode}
      sellCarId={sellCarId}
    >
      <Button className="h-full" variant={"destructive"}>
        <Trash2 className="size-4" />
        Withdraw Enquiry
      </Button>
    </WithdrawConfirmationModal>
  );
};
export default WithdrawButton;
