import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactSellerForm from "./Forms/ContactSellerForm";

const ContactSellerModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Seller</DialogTitle>
          <DialogDescription>
            Fill out the form below to contact the seller directly.
          </DialogDescription>
        </DialogHeader>
        
        <ContactSellerForm />
      </DialogContent>
    </Dialog>
  );
};
export default ContactSellerModal;
