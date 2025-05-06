"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  path: string;
  label: string;
}
const NavLink = ({ path, label }: NavLinkProps) => {
  const pathname = usePathname();
  
  const isMatchingPath = pathname === path;
  const isSaleCarPath = pathname.includes("salecar") && path !== "/sell";
  
  const isActive = isMatchingPath || isSaleCarPath ? "active text-primary" : "";

  return (
    <Link className={`navLink ${isActive}`} href={path} scroll={false}>
      {label}
    </Link>
  );
};
export default NavLink;
