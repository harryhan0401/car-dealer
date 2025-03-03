import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="text-secondary bg-neutral h-screen">
      <Navbar />
      {children}
    </main>
  );
}
