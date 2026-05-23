import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 bg-white">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
