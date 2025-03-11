import { CarTypes, FooterCompanyNavLinks } from "@/lib/constants";
import CompanyLogo from "./CompanyLogo";
import Link from "next/link";
import Subscribe from "./Subscribe";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="container py-5">
        <div className="grid gap-10">
          <div className="w-fit">
            <CompanyLogo />
          </div>
          <div className="flex">
            <section
              id="left-footer-section"
              className="flex-1 grid md:grid-cols-3 gap-10"
            >
              <div>
                <p className="text-[#9f9f9f]">Buy</p>
                <ul className="leading-8">
                  {CarTypes.map(({ name }) => (
                    <li key={name}>
                      <Link href={`?type=${name}`}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[#9f9f9f]">Sell</p>
                <ul className="leading-8">
                  <li>
                    <Link href={"/sell/valuation"}>Valuation</Link>
                  </li>
                  <li>
                    <Link href={"/sell/trade-in"}>Trade-in</Link>
                  </li>
                  <li>
                    <Link href={"/sell/commision-sale"}>Commision sale</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[#9f9f9f]">Company</p>
                <ul className="leading-8">
                  {FooterCompanyNavLinks.map(({ name, href }) => (
                    <li key={name}>
                      <Link href={href}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section
              id="right-footer-section"
              className="flex-1 flex flex-col gap-4"
            >
              <p>Subscribe to the newsletter</p>
              <Subscribe />
              <div className="flex space-x-2 items-center">
                <Link href={"https://facebook.com/"}>
                  <FaFacebookSquare size={26} />
                </Link>
                <Link href={"https://instagram.com/"}>
                  <FaInstagramSquare size={26} />
                </Link>
                <Link href={"https://whatsapp.com/"}>
                  <FaSquareWhatsapp size={26} />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
