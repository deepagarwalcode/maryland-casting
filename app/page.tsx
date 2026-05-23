import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import About from "@/components/About";
import Carousel from "@/components/Carousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <ProductsSection />
      <About />
      <Carousel />
      <ContactSection />
      <Footer />
    </main>
  );
}
