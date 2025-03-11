import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Location from "./Location";
import Link from "next/link";
import Profile from "./Profile";
const NavbarMobile = ({
  children,
  navLinks,
}: {
  children: React.ReactNode;
  navLinks: TNavLink[];
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="z-100 ">
        <SheetHeader>
          <SheetTitle>
            <Profile />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full justify-between py-6">
          <div className="grid gap-4">
            {navLinks.map(({ label, path }) => (
              <Link
                key={Math.random()}
                href={path}
                className="navlink-mobile px-4 pb-2 border-b"
              >
                {label}
              </Link>
            ))}
          </div>
          <Location className="flex px-4" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default NavbarMobile;
