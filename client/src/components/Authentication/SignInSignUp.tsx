import Link from "next/link";
import { Button } from "../ui/button";

const SignInSignUp = () => {
  return (
    <>
      <Button variant={"signIn"} asChild>
        <Link className="text-[16px]" href={"/signin"}>
          Sign in
        </Link>
      </Button>
      <Button asChild>
        <Link className="text-[16px]" href={"/signup"}>
          Sign up
        </Link>
      </Button>
    </>
  );
};
export default SignInSignUp;
