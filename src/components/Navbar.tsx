import { MapPin } from "lucide-react";
import Link from "next/link";
import Notification from "./Notification";
import Favourite from "./Favourite";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  const navLinks = [
    { label: "Buy", path: "/" },
    { label: "Sell", path: "/sell" },
    { label: "About", path: "/about" },
    { label: "Reviews", path: "/reviews" },
  ];
  return (
    <header className="sticky top-0 w-full px-5 py-3 bg-white shadow-sm">
      <nav className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-15">
          <Link className="flex items-center gap-2" href={"/"}>
            <div className="striped-circle size-6 rounded-full"></div>
            <span className="font-bold text-xl">CarDealings</span>
          </Link>
          <div className="flex items-center gap-1">
            <MapPin className="size-5" />
            <div>Melbourne</div>
          </div>
          <div className="flex gap-5">
            {navLinks.map(({ path, label }) => (
              <NavLink key={label} path={path} label={label} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Notification />
          <Favourite />
          <div className="flex items-center">
            <Image
              src={"https://placehold.co/32x32"}
              height={32}
              width={32}
              alt="profile"
              className="rounded-sm z-10"
            />
            <div className="bg-border ps-5 pe-2 py-1 ms-[-0.8rem] rounded">
              Harry Han
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
