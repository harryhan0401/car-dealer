import { enquiryData, enquirySchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { CustomFormField } from "../FormField";
import { Button } from "../ui/button";
import { useCreateEnquiryMutation } from "@/state/api";
import { Send } from "lucide-react";

const ContactSellerForm = ({ user, sellCarId }: ContactSellerFormProps) => {
  const [createEnquiry, { isLoading }] = useCreateEnquiryMutation();
  const defaultMessage = `Hi,\nI'm interested in your vehicle listing. I would like to know more details about this vehicle. Please contact me at your earliest convenience.\n\nBest regards`;

  const enquiryForm = useForm<enquiryData>({
    defaultValues: {
      cognitoId: user?.cognitoInfo.userId || "",
      offerPrice: 0,
      message: defaultMessage,
    },
    resolver: zodResolver(enquirySchema),
  });
  const onSubmit = async (enquiryData: enquiryData) => {
    const res = await createEnquiry({
      sellCarId: sellCarId,
      enquiryData,
    });
    if (!res.error) {
    }
  };
  return (
    <Form {...enquiryForm}>
      <form
        onSubmit={enquiryForm.handleSubmit(onSubmit)}
        className="mt-4 space-y-4"
      >
        <CustomFormField
          type="number"
          name="offerPrice"
          label="Offer Price"
          className="mt-1 w-full rounded-m"
          placeholder="Enter your offer price"
        />

        <CustomFormField
          name="message"
          label="Message*"
          type="textarea"
          className="mt-1 w-full rounded-m h-[200px] max-h-[200px]"
        />
        <Button className="w-full">
          <span>
            <Send />
          </span>
          {isLoading ? (
            <p className="text-muted">Sending...</p>
          ) : (
            "Send message"
          )}
        </Button>
      </form>
    </Form>
  );
};
export default ContactSellerForm;
