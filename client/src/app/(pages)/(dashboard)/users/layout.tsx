import { AppSideBar as Sidebar } from "@/components/Navigation/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <div className="flex gap-2 w-full">
        <div>
          <Sidebar />
        </div>
        <main className="w-full">{children}</main>
      </div>
    </SidebarProvider>
  );
}
