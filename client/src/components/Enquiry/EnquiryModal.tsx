"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCallback, useState } from "react";
import EnquiryForm from "../Forms/EnquiryForm";
import SignInSignUp from "../Authentication/SignInSignUp";

const EnquiryModal = ({
  children,
  offer,
  listPrice,
  sellCarId,
  authUser,
  isEditing,
}: EnquiryModalProps) => {
  const [open, setOpen] = useState(false);

  const handleDialogOpen = useCallback(() => setOpen(false), []);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Update offer" : "Contact Seller"}
          </DialogTitle>
          <DialogDescription>
            {!isEditing && authUser
              ? "Fill out the form below to send an offer to seller."
              : "Please log in to contact the seller."}
          </DialogDescription>
        </DialogHeader>
        {authUser ? (
          <EnquiryForm
            offer={offer}
            listPrice={listPrice}
            user={authUser}
            sellCarId={sellCarId}
            cb={handleDialogOpen}
            isEditing={isEditing}
          />
        ) : (
          <SignInSignUp />
        )}
      </DialogContent>
    </Dialog>
  );
};
export default EnquiryModal;
