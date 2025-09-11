"use client";

import { Eye, Phone } from "lucide-react";
import { Button } from "../ui/button";
import ViewEnquiryModal from "./ViewEnquiryModal";
import { useGetAuthUserQuery } from "@/state/api";
import EnquiryModal from "./EnquiryModal";

const ContactSellerButton = ({
  carListingId,
  listPrice,
  enquiries,
}: ContactSellerButtonProps) => {
  const { data: authUser } = useGetAuthUserQuery();
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
        <EnquiryModal
          authUser={authUser}
          carListingId={carListingId}
          listPrice={listPrice}
          isEditing={false}
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
        </EnquiryModal>
      )}
    </>
  );
};
export default ContactSellerButton;
