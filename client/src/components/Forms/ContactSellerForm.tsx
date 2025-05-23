import { userData, userSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { CustomFormField } from "../FormField";
import { Button } from "../ui/button";
import { useGetAuthUserQuery } from "@/state/api";
import { Send } from "lucide-react";

const ContactSellerForm = () => {
  const { data: user } = useGetAuthUserQuery();
  const contactForm = useForm<userData>({
    defaultValues: user?.userInfo || {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    resolver: zodResolver(userSchema),
  });
  const onSubmit = async (data: userData) => {
    console.log(data);
  };
  return (
    <Form {...contactForm}>
      <form
        onSubmit={contactForm.handleSubmit(onSubmit)}
        className="mt-4 space-y-4"
      >
        <CustomFormField
          name="firstName"
          label="First name*"
          className="mt-1 w-full rounded-md"
        />
        <CustomFormField
          name="lastName"
          label="Last name*"
          className="mt-1 w-full rounded-md"
        />
        <CustomFormField
          type="email"
          name="email"
          label="Email*"
          className="mt-1 w-full rounded-md"
        />
        <CustomFormField
          name="phone"
          label="Phone*"
          className="mt-1 w-full rounded-md"
        />
        <CustomFormField
          name="message"
          label="Message*"
          type="textarea"
          initialValue={`Hi,\nI'm interested in your vehicle listing. I would like to know more details about this vehicle. Please contact me at your earliest convenience.\n\nBest regards`}
          className="mt-1 w-full rounded-m h-[200px] max-h-[200px]"
        />
        <Button className="w-full">
          <span>
            <Send />
          </span>
          Send message
        </Button>
      </form>
    </Form>
  );
};
export default ContactSellerForm;
