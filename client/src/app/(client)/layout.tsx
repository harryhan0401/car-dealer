import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="text-secondary bg-neutral">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
