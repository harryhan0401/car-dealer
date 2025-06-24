"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactSellerForm from "./Forms/ContactSellerForm";
import SignInSignUp from "./Authentication/SignInSignUp";
import { useCallback, useState } from "react";

const ContactSellerModal = ({
  children,
  listPrice,
  sellCarId,
  authUser,
}: ContactSellerModalProps) => {
  const [open, setOpen] = useState(false);

  const handleDialogOpen = useCallback(() => setOpen(false), []);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Seller</DialogTitle>
          <DialogDescription>
            {authUser
              ? "Fill out the form below to send an offer to seller."
              : "Please log in to contact the seller."}
          </DialogDescription>
        </DialogHeader>
        {authUser ? (
          <ContactSellerForm
            listPrice={listPrice}
            user={authUser}
            sellCarId={sellCarId}
            cb={handleDialogOpen}
          />
        ) : (
          <SignInSignUp />
        )}
      </DialogContent>
    </Dialog>
  );
};
export default ContactSellerModal;
