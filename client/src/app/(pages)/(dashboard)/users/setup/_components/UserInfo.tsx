"use client";
import { CustomFormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { preferContactMethods } from "@/lib/constants";
import { profileData, profileSchema } from "@/lib/schemas";
import { TUserProfileFormData } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

const UserInfo = ({
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
  const router = useRouter();

  profileData.email = authUser.userInfo.email;
  const profileForm = useForm<profileData>({
    defaultValues: profileData,
    resolver: zodResolver(profileSchema),
  });
  const onSubmit = useCallback(
    async (data: profileData) => {
      if (!authUser.cognitoInfo?.userId) {
        throw new Error("No seller ID found");
      }
      handleSubmit(data);
      cb(2);
    },
    [authUser]
  );

  return (
    <div className="card w-full form">
      <Form {...profileForm}>
        <form
          onSubmit={profileForm.handleSubmit(onSubmit)}
          className="p-4 space-y-8"
        >
          <div className="grid sm:grid-cols-2 gap-10 items-baseline">
            <CustomFormField name="firstName" label="First name*" />
            <CustomFormField name="lastName" label="Last name*" />
          </div>
          <div className="grid sm:grid-cols-2 gap-10 items-baseline">
            <CustomFormField
              type="email"
              name="email"
              label="Email*"
              disabled={true}
            />
            <CustomFormField name="phone" label="Phone*" />
          </div>
          <CustomFormField
            type="radio"
            options={preferContactMethods}
            label="Preferred Contact Method"
            name="preferredContactMethod"
          />
          <div className=" max-w-5/6 mx-auto flex justify-between mt-16">
            <Button
              type="button"
              onClick={() => router.push("/")}
              variant="back"
            >
              Cancel
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default UserInfo;
