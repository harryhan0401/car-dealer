"use client";
import { CustomFormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { locationData, locationSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

import { useLoadScript, type Libraries } from "@react-google-maps/api";
import { TAddressComponentMap, TUserProfileFormData } from "@/lib/types";

const libraries = ["places"] as Libraries;

const AddressInfo = ({
  profileData,
  cb,
  handleSubmit,
  authUser,
}: {
  profileData: TUserProfileFormData;
  cb: (step: number) => void;
  handleSubmit: (data: Partial<TUserProfileFormData>) => void;
  authUser: AppUser;
}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
    libraries,
  });

  const inputRef = useRef(null);
  const handlePlaceChanged = async (
    address: google.maps.places.Autocomplete
  ) => {
    if (!isLoaded) return;
    const place = address.getPlace();

    if (!place || !place.geometry) {
      locationForm.reset();
      return;
    }
    formData(place);
  };

  const locationForm = useForm<locationData>({
    defaultValues: profileData,
    resolver: zodResolver(locationSchema),
  });

  const formData = useCallback(
    (data: google.maps.places.PlaceResult) => {
      const addressComponents = data?.address_components;

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
          const componentType = component
            .types[0] as keyof TAddressComponentMap;
          if (componentMap.hasOwnProperty(componentType)) {
            componentMap[componentType] = component.long_name;
          }
        }

        const formattedAddress =
          data.formatted_address ||
          `${componentMap.subPremise} ${componentMap.premise} ${componentMap.street_number} ${componentMap.route}`.trim();
        const latitude = data?.geometry?.location?.lat();
        const longitude = data?.geometry?.location?.lng();

        const newInputValue: Partial<locationData> = {
          address: formattedAddress,
          city: componentMap.locality,
          state: componentMap.administrative_area_level_1,
          country: componentMap.country,
          postalCode: componentMap.postal_code,
          latitude: latitude,
          longitude: longitude,
        };

        locationForm.setValue("address", newInputValue.address || "");
        locationForm.setValue("city", newInputValue.city || "");
        locationForm.setValue("state", newInputValue.state || "");
        locationForm.setValue("country", newInputValue.country || "");
        locationForm.setValue("postalCode", newInputValue.postalCode || "");
        locationForm.setValue("latitude", newInputValue.latitude);
        locationForm.setValue("longitude", newInputValue.longitude);
      }
    },
    [locationForm]
  );

  const onSubmit = useCallback(
    async (data: locationData) => {
      if (!authUser.cognitoInfo?.userId) {
        throw new Error("No seller ID found");
      }
      handleSubmit(data);
      cb(3);
    },
    [authUser]
  );

  useEffect(() => {
    if (!isLoaded || loadError) return;

    const options = {
      componentRestrictions: { country: "au" },
      fields: ["address_components", "geometry"],
    };

    if (inputRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(
        inputRef.current,
        options
      );
      autocomplete.addListener("place_changed", () =>
        handlePlaceChanged(autocomplete)
      );
    }
  }, [isLoaded, loadError, inputRef.current]);

  return (
    <div className="card w-full form">
      <Form {...locationForm}>
        <form
          onSubmit={locationForm.handleSubmit(onSubmit)}
          className="p-4 space-y-8"
        >
          <div className="grid sm:grid-cols-2 gap-10 items-baseline">
            <CustomFormField
              type="placesAutocomplete"
              name="address"
              ref={inputRef}
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
          <div className=" max-w-5/6 mx-auto flex justify-between mt-16">
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
