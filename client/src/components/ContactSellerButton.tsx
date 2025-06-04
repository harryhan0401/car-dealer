import { Eye, Phone } from "lucide-react";
import { Button } from "./ui/button";
import ContactSellerModal from "./ContactSellerModal";
import Link from "next/link";

const ContactSellerButton = ({
  authUser,
  sellCarId,
  enquiries,
}: ContactSellerButtonProps) => {
  const enquiryIndex = enquiries.findIndex(
    (enquiry) => enquiry.buyerCognitoId === authUser?.cognitoInfo.userId
  );
  const hasActiveEnquiryWithUser = enquiryIndex !== -1;
  return (
    <>
      {hasActiveEnquiryWithUser ? (
        <Button aria-label="View Enquiry" asChild>
          <Link
            className="flex-1 flex items-center cursor-default"
            href={`/users/enquiries/${enquiries[enquiryIndex].id}`}
          >
            <span>
              <Eye />
            </span>
            View Enquiry
          </Link>
        </Button>
      ) : (
        <ContactSellerModal authUser={authUser} sellCarId={sellCarId}>
          <Button
            className="flex-1 flex items-center"
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
