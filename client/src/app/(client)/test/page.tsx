import { users } from "@/lib/users";
const Test = () => {
  const uniqueSellerIds = Array.from(
    new Set(users.map((user) => user.cognitoId))
  );
  console.log(uniqueSellerIds);
  return <div>Test</div>;
};
export default Test;
