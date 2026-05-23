import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Carousel />
      <Footer />
    </main>
  );
}
