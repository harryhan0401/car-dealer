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

const ContactSellerModal = ({
  children,
  sellCarId,
  authUser,
}: ContactSellerModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Seller</DialogTitle>
          <DialogDescription>
            {authUser
              ? "Fill out the form below to contact the seller directly."
              : "Please log in to contact the seller."}
          </DialogDescription>
        </DialogHeader>
        {authUser ? (
          <ContactSellerForm user={authUser} sellCarId={sellCarId} />
        ) : (
          <SignInSignUp />
        )}
      </DialogContent>
    </Dialog>
  );
};
export default ContactSellerModal;
