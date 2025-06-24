import { Eye, Phone } from "lucide-react";
import { Button } from "./ui/button";
import ContactSellerModal from "./ContactSellerModal";
import ViewEnquiryModal from "./ViewEnquiryModal";

const ContactSellerButton = ({
  authUser,
  sellCarId,
  listPrice,
  enquiries,
}: ContactSellerButtonProps) => {
  const enquiryIndex = enquiries.findIndex(
    (enquiry) => enquiry.buyerCognitoId === authUser?.cognitoInfo.userId
  );
  const hasActiveEnquiryWithUser = enquiryIndex !== -1;
  return (
    <>
      {hasActiveEnquiryWithUser ? (
        <ViewEnquiryModal enquiry={enquiries[enquiryIndex]}>
          <Button
            className="flex items-center flex-1 cursor-default"
            aria-label="View Enquiry"
          >
            <span>
              <Eye />
            </span>
            View Enquiry
          </Button>
        </ViewEnquiryModal>
      ) : (
        <ContactSellerModal
          authUser={authUser}
          sellCarId={sellCarId}
          listPrice={listPrice}
        >
          <Button
            className="flex items-center flex-1"
            aria-label="Contact Seller"
          >
            <span>
              <Phone />
            </span>
            Contact Seller
          </Button>
        </ContactSellerModal>
      )}
    </>
  );
};
export default ContactSellerButton;
