import Footer from "@/components/Footer";
import Navbar from "@/components/Navigation/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="text-secondary bg-neutral">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
