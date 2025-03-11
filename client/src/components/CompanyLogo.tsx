import Link from "next/link";

const CompanyLogo = () => {
  return (
    <Link className="flex items-center gap-2" href={"/"}>
      <div className="striped-circle size-6 rounded-full"></div>
      <span className="font-bold text-xl">CarDealings</span>
    </Link>
  );
};
export default CompanyLogo;
