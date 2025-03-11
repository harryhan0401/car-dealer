import { Menu } from "lucide-react";
import Notification from "./Notification";
import Favourite from "./Favourite";
import Image from "next/image";
import NavLink from "./NavLink";
import CompanyLogo from "./CompanyLogo";
import NavbarMobile from "./NavbarMobile";
import Location from "./Location";
import Profile from "./Profile";

const Navbar = () => {
  const navLinks: TNavLink[] = [
    { label: "Buy", path: "/" },
    { label: "Sell", path: "/sell" },
    { label: "Reviews", path: "/reviews/" },
  ];
  return (
    <header className="sticky top-0 w-full px-5 py-3 bg-neutral shadow-sm z-50">
      <nav className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-15">
          <CompanyLogo />
          {/**Location**/}
          <Location />
          <div className="hidden lg:flex lg:gap-5">
            {navLinks.map(({ path, label }) => (
              <NavLink key={label} path={path} label={label} />
            ))}
          </div>
        </div>
        {/**Navigation Mobile version**/}
        <div className="lg:hidden">
          <NavbarMobile navLinks={navLinks}>
            <Menu size={24} />
          </NavbarMobile>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Notification />
          <Favourite />
          <Profile />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
