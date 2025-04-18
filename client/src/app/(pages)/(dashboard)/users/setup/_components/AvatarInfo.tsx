"use client";
import { CustomFormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { avatarData, avatarSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { TUserProfileFormData } from "@/lib/types";
import "./styles.css";

const AvatarInfo = ({
  profileData,
  cb,
  handleSubmit,
  handleAvatarUpload,
  authUser,
}: {
  profileData: TUserProfileFormData;
  cb: (step: number) => void;
  handleSubmit: (data: Partial<TUserProfileFormData>) => void;
  handleAvatarUpload: (url: string) => void;
  authUser: AppUser;
}) => {
  const avatarForm = useForm<avatarData>({
    defaultValues: profileData,
    resolver: zodResolver(avatarSchema),
  });
  const onSubmit = useCallback(
    async (data: avatarData) => {
      if (!authUser.cognitoInfo?.userId) {
        throw new Error("No seller ID found");
      }
      handleSubmit(data);
      const url = URL.createObjectURL(data.avatarUrl[0]); // Convert file to URL
      handleAvatarUpload(url);
      cb(4);
    },
    [authUser]
  );

  return (
    <div className="card w-full form">
      <Form {...avatarForm}>
        <form
          onSubmit={avatarForm.handleSubmit(onSubmit)}
          className="p-4 space-y-8 flex flex-col items-center"
        >
          <div className="size-50">
            <CustomFormField
              type="file"
              stylePanelLayout="circle"
              filePondLabelIdle={`Drag & Drop your image or <span class="filepond--label-action">Browse</span>`}
              name="avatarUrl"
            />
          </div>
          <div className="flex-1 flex justify-between w-5/6 mx-auto mt-16">
            <Button type="button" onClick={() => cb(2)} variant="back">
              Back
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default AvatarInfo;
