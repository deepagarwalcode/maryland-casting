import CatalogView from "@/components/CatalogView";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Catalog() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-12 bg-white">
        <CatalogView />
      </div>
      <Footer />
    </main>
  );
}
