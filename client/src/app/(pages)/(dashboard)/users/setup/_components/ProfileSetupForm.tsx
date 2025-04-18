"use client";

import { useCallback, useEffect, useState } from "react";

import StepperIndicator from "@/components/StepperIndicator";
import AddressInfo from "./AddressInfo";
import UserInfo from "./UserInfo";
import ProfileSetupConfirm from "./ProfileSetupConfirm";
import { useGetAuthUserQuery } from "@/state/api";
import { TUserProfileFormData } from "@/lib/types";
import AvatarInfo from "./AvatarInfo";
import { PreferContactMethods } from "@/lib/constants";

function getStepContent(
  step: number,
  profileData: TUserProfileFormData,
  handleStep: (step: number) => void,
  handleSubmit: (data: Partial<TUserProfileFormData>) => void,
  handleAvatarUpload: (url: string) => void,
  avatarUrl: string,
  authUser: AppUser
) {
  switch (step) {
    case 1:
      return (
        <UserInfo
          profileData={profileData}
          cb={handleStep}
          authUser={authUser}
          handleSubmit={handleSubmit}
        />
      );
    case 2:
      return (
        <AddressInfo
          profileData={profileData}
          cb={handleStep}
          authUser={authUser}
          handleSubmit={handleSubmit}
        />
      );
    case 3:
      return (
        <AvatarInfo
          profileData={profileData}
          cb={handleStep}
          authUser={authUser}
          handleSubmit={handleSubmit}
          handleAvatarUpload={handleAvatarUpload}
        />
      );
    case 4:
      return (
        <ProfileSetupConfirm
          cb={handleStep}
          profileData={profileData}
          avatarUrl={avatarUrl}
          authUser={authUser}
        />
      );
    default:
      return "Unknown step";
  }
}

const ProfileSetupForm = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const [profileData, setProfileData] = useState<TUserProfileFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContactMethod: PreferContactMethods.Email,
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    avatarUrl: [],
  });

  const [activeStep, setActiveStep] = useState(1);

  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const handleStep = useCallback((step: number) => {
    setActiveStep(step);
  }, []);

  const handleSubmit = useCallback((data: Partial<TUserProfileFormData>) => {
    setProfileData((prevState) => ({
      ...prevState,
      ...data, // Merge data properly
    }));
  }, []);

  const handleAvatarUpload = useCallback((url: string) => {
    setAvatarUrl(url);
  }, []);

  if (!authUser) return;
  return (
    <div className="flex flex-col gap-20 items-center justify-center w-full">
      <StepperIndicator activeStep={activeStep} />
      {getStepContent(
        activeStep,
        profileData,
        handleStep,
        handleSubmit,
        handleAvatarUpload,
        avatarUrl,
        authUser
      )}
    </div>
  );
};

export default ProfileSetupForm;
