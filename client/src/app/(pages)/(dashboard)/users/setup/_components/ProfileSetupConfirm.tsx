import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { avatarSchema, locationSchema, userSchema } from "@/lib/schemas";
import { TUserProfileFormData } from "@/lib/types";
import { saveProfileSetupStatus } from "@/lib/utils";
import { useUpdateUserProfileMutation } from "@/state/api";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

const ProfileSetupConfirm = ({
  cb,
  profileData,
  avatarUrl,
  authUser,
}: ProfileSetupConfirmProps) => {
  const router = useRouter();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const userProfileForm = useForm<TUserProfileFormData>({
    defaultValues: profileData,
    resolver: zodResolver(
      userSchema.extend(locationSchema.shape).extend(avatarSchema.shape)
    ),
  });

  const onSubmit = useCallback(
    async (data: TUserProfileFormData) => {
      if (!authUser.cognitoInfo?.userId) {
        throw new Error("No seller ID found");
      }
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "photo" || key.startsWith("optionalPhoto")) {
          const files = value as File[];
          if (files) {
            files.forEach((file: File) => {
              formData.append("photos", file);
            });
          }
        } else if (Array.isArray(value)) {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, String(value));
        }
      });
      const res = await updateUserProfile({
        cognitoId: authUser.cognitoInfo.userId,
        userProfileData: formData,
      });
      if (!res.error) {
        saveProfileSetupStatus(true);
        router.push("/users");
      }
    },
    [authUser]
  );

  const completeAddress =
    profileData.address +
    ", " +
    profileData.city +
    " " +
    profileData.state +
    ", " +
    profileData.postalCode +
    ", " +
    profileData.country;

  const handleSubmit = useCallback(async () => {
    if (!authUser.cognitoInfo?.userId) {
      throw new Error("No seller ID found");
    }
  }, []);
  return (
    <div className="card flex flex-col items-center justify-center gap-5 h-full w-1/2">
      <div className="border relative size-43 rounded-full">
        <Image src={avatarUrl} fill alt="Avatar" className="rounded-full" />
      </div>
      <div className="grid gap-3">
        <section id="fullname">
          <p>
            <span className="font-semibold">Fullname:</span>{" "}
            {profileData.firstName + " " + profileData.lastName}
          </p>
        </section>
        <section id="email">
          <p>
            <span className="font-semibold">Email:</span> {profileData.email}
          </p>
        </section>
        <section id="email">
          <p>
            <span className="font-semibold">Phone:</span> {profileData.phone}
          </p>
        </section>
        <section id="address">
          <p>
            <span className="font-semibold">Address:</span> {completeAddress}
          </p>
        </section>
        <section id="preferredContactMethod">
          <p>
            <span className="font-semibold">Preferred Contact Method:</span>{" "}
            {profileData.preferredContactMethod}
          </p>
        </section>
      </div>
      <div className="flex-1 flex justify-between w-5/6 mx-auto mt-16">
        <Button type="button" onClick={() => cb(3)} variant="back">
          Back
        </Button>
        <Form {...userProfileForm}>
          <form onSubmit={userProfileForm.handleSubmit(onSubmit)}>
            <Button onClick={handleSubmit}>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default ProfileSetupConfirm;
