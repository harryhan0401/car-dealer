"use client";
import {
  Car,
  FileText,
  Heart,
  Home,
  LogOut,
  Settings,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import CompanyLogo from "@/components/CompanyLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { handleSignOut } from "@/lib/utils";

// Menu items.
const items = [
  {
    title: "Profile",
    url: "/users",
    icon: User,
  },
  {
    title: "Listings",
    url: "/users/listings",
    icon: Car,
  },
  {
    title: "Enquiries",
    url: "/users/enquiries",
    icon: FileText,
  },
  {
    title: "Favourites",
    url: "/users/favourites",
    icon: Heart,
  },
  {
    title: "Account Settings",
    url: "/users/settings",
    icon: Settings,
  },
];

export function AppSideBar() {
  const pathName = usePathname();
  if (pathName === "/users/setup") return null; // Don't show sidebar on setup page.
  return (
    <Sidebar>
      <SidebarHeader>
        <CompanyLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`sidebar-navLink ${pathName === item.url && "drop-shadow-sm shadow-2xl bg-white"}`}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <hr className="mx-2" />
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={handleSignOut}
                  className="cursor-pointer"
                >
                  <LogOut />
                  <span>Sign out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button asChild>
          <Link href={"/"}>
            Back to homepage
            <span>
              <Home />
            </span>
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
