"use client";
import { CustomFormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { locationData, locationSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useLoadScript, type Libraries } from "@react-google-maps/api";

const libraries = ["places"] as Libraries;

const AddressInfo = ({
  profileData,
  cb,
  handleSubmit,
  authUser,
}: AddressInfoProps) => {
  // Load Google Maps Places API
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
    libraries,
  });

  // Ref for the address input
  const addressInputRef = useRef<HTMLInputElement>(null);

  // React Hook Form setup
  const locationForm = useForm<locationData>({
    defaultValues: profileData,
    resolver: zodResolver(locationSchema),
  });

  // Extract and set address data from Google Places result
  const setFormDataFromPlace = useCallback(
    (place: google.maps.places.PlaceResult) => {
      const addressComponents = place?.address_components;
      const componentMap: TAddressComponentMap = {
        subPremise: "",
        premise: "",
        street_number: "",
        route: "",
        country: "",
        postal_code: "",
        locality: "",
        administrative_area_level_1: "",
      };

      if (addressComponents) {
        for (const component of addressComponents) {
          const type = component.types[0] as keyof TAddressComponentMap;
          if (componentMap.hasOwnProperty(type)) {
            componentMap[type] = component.long_name;
          }
        }

        const formattedAddress =
          place.formatted_address ||
          `${componentMap.subPremise} ${componentMap.premise} ${componentMap.street_number} ${componentMap.route}`.trim();
        const latitude = place?.geometry?.location?.lat();
        const longitude = place?.geometry?.location?.lng();

        locationForm.setValue("address", formattedAddress || "");
        locationForm.setValue("city", componentMap.locality || "");
        locationForm.setValue(
          "state",
          componentMap.administrative_area_level_1 || ""
        );
        locationForm.setValue("country", componentMap.country || "");
        locationForm.setValue("postalCode", componentMap.postal_code || "");
        locationForm.setValue("latitude", latitude);
        locationForm.setValue("longitude", longitude);
      }
    },
    [locationForm]
  );

  // Handle place selection from autocomplete
  const handlePlaceChanged = useCallback(
    (autocomplete: google.maps.places.Autocomplete) => {
      if (!isLoaded) return;
      const place = autocomplete.getPlace();
      if (!place || !place.geometry) {
        locationForm.reset();
        return;
      }
      setFormDataFromPlace(place);
    },
    [isLoaded, setFormDataFromPlace, locationForm]
  );

  // Handle form submission
  const onSubmit = useCallback(
    async (data: locationData) => {
      if (!authUser.cognitoInfo?.userId) {
        throw new Error("No seller ID found");
      }
      handleSubmit(data);
      cb(3);
    },
    [authUser, handleSubmit, cb]
  );

  // Initialize Google Places Autocomplete
  useEffect(() => {
    if (!isLoaded || loadError) return;

    const options = {
      componentRestrictions: { country: "au" },
      fields: ["address_components", "geometry"],
    };

    if (addressInputRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(
        addressInputRef.current,
        options
      );
      autocomplete.addListener("place_changed", () =>
        handlePlaceChanged(autocomplete)
      );
    }
  }, [isLoaded, loadError, handlePlaceChanged]);

  return (
    <div className="card w-full form">
      <Form {...locationForm}>
        <form
          onSubmit={locationForm.handleSubmit(onSubmit)}
          className="p-4 space-y-8"
        >
          <div className="grid sm:grid-cols-2 gap-10 items-baseline">
            {/* Pass inputRef as prop if CustomFormField supports it */}
            <CustomFormField
              type="placesAutocomplete"
              name="address"
              ref={addressInputRef}
              label="Address"
            />
            <CustomFormField name="city" label="City*" />
          </div>
          <div className="grid sm:grid-cols-2 gap-10 items-baseline">
            <CustomFormField name="state" label="State*" />
            <CustomFormField name="country" label="Country*" />
          </div>
          <div className="grid sm:grid-cols-8 gap-10 items-baseline">
            <CustomFormField name="postalCode" label="Postal Code*" />
          </div>
          <div className="max-w-5/6 mx-auto flex justify-between mt-16">
            <Button type="button" onClick={() => cb(1)} variant="back">
              Back
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddressInfo;
