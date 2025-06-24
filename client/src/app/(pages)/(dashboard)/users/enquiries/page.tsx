"use client";

import { Button } from "@/components/ui/button";
import { useGetAuthUserQuery, useGetEnquiriesQuery } from "@/state/api";
import { EnquiryStatus } from "@/types/prismaTypes";
import {
  AlertCircle,
  BellRing,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Eye,
  MessageCircle,
  XCircle,
} from "lucide-react";
import Image from "next/image";

const Enquiries = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const { data: enquiries } = useGetEnquiriesQuery({
    cognitoId: authUser?.cognitoInfo.userId || "",
  });
  if (!authUser || !enquiries) return null;

  const getStatusIcon = (status: EnquiryStatus) => {
    switch (status) {
      case "Pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "Accepted":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "Declined":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusText = (status: EnquiryStatus) => {
    switch (status) {
      case "Pending":
        return "Pending";
      case "Accepted":
        return "Accepted";
      case "Declined":
        return "Declined";
      default:
        return "Unknown";
    }
  };

  const getStatusColor = (status: EnquiryStatus) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Accepted":
        return "bg-green-100 text-green-800 border-green-200";
      case "Declined":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  return (
    <div className="pt-4 space-y-4 pe-2">
      {enquiries.length === 0 ? (
        <div className="p-12 text-center bg-white border rounded-lg shadow-sm">
          <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <h3 className="mb-2 text-lg font-medium text-gray-900">
            No enquiries found
          </h3>
        </div>
      ) : (
        enquiries.map((enquiry) => {
          const { sellCar } = enquiry;
          const { photoUrls, car, price } = sellCar;
          const { make, model, year } = car;
          return (
            <div
              key={enquiry.id}
              className="transition-shadow bg-white border rounded-lg shadow-sm hover:shadow-md"
            >
              <div className="p-6">
                <div className="flex flex-col gap-6 lg:flex-row">
                  {/* Car Image */}
                  <div className="relative flex-shrink-0 lg:w-100 h-80 lg:h-auto">
                    <Image
                      fill
                      src={
                        make.toLowerCase() == "bmw"
                          ? "/bmw.jpg"
                          : make.toLowerCase() == "mercedesbenz"
                            ? "/mercedes.jpg"
                            : make.toLowerCase() == "audi"
                              ? "/audi.jpg"
                              : ""
                      }
                      alt={`${make}-${model}`}
                      className="object-cover rounded-lg"
                    />
                  </div>

                  {/* Main Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col items-start justify-between mb-4 sm:flex-row">
                      <div>
                        <h3 className="mb-1 text-xl font-semibold text-gray-900">
                          {year} {make} {model}
                        </h3>
                        <p className="mb-2 text-gray-600">Listed at ${price}</p>
                        {/* <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>Seller: {enquiry.seller.name}</span>
                          {enquiry.seller.verified && (
                            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                              Verified
                            </span>
                          )}
                          <span>★ {enquiry.seller.rating}</span>
                        </div> */}
                      </div>

                      <div className="flex items-center gap-3 mt-3 sm:mt-0">
                        <div
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium ${getStatusColor(enquiry.status)}`}
                        >
                          {getStatusIcon(enquiry.status)}
                          {getStatusText(enquiry.status)}
                        </div>
                      </div>
                    </div>

                    {/* Enquiry Details */}
                    <div className="p-4 mb-4 rounded-lg bg-gray-50">
                      <div className="grid grid-cols-1 gap-4 mb-3 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            Submitted:{" "}
                            {new Date(
                              enquiry.dateTimeCreated
                            ).toLocaleDateString()}
                          </span>
                        </div>

                        {/* <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600 capitalize">
                            Type: {enquiry.type}
                          </span>
                        </div> */}

                        {enquiry.offerPrice && (
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">
                              Offer: ${enquiry.offerPrice}
                            </span>
                          </div>
                        )}
                      </div>

                      <div>
                        <p className="text-sm italic text-gray-700">
                          "{enquiry.message}"
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button>
                        <BellRing className="w-4 h-4" />
                        Notify Seller
                      </Button>

                      <Button variant={"outline"}>View Car Details</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Enquiries;
