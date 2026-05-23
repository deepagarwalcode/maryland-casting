import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { allProducts } from "@/lib/helper";

const groupedProducts = Object.values(
  allProducts.reduce<
    Record<
      string,
      {
        type: string;
        image: string;
        items: string[];
      }
    >
  >((acc, product) => {
    if (!acc[product.type]) {
      acc[product.type] = {
        type: product.type,
        image: product.imgUrl,
        items: [],
      };
    }

    acc[product.type].items.push(product.displayName);
    return acc;
  }, {}),
);

function formatType(type: string) {
  return type.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function ProductsSection() {
  return (
    <section className="py-24 bg-slate-50/50 scroll-mt-12" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-clash font-bold uppercase tracking-wider text-primary">
              Our Products
            </h2>
            <div className="accent-line-left" />
            <p className="text-base md:text-lg font-sans font-medium text-slate-600 leading-relaxed">
              Browse the product categories shown in the catalog.
            </p>
          </div>

          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary transition-all duration-300 text-white px-6 py-3 rounded-sm font-clash font-bold text-sm tracking-wider uppercase shadow-md hover:shadow-[0_0_20px_rgba(212,45,46,0.25)]"
          >
            View Full Catalogue
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {groupedProducts.map((group) => (
            <div
              key={group.type}
              className="bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={group.image}
                  alt={formatType(group.type)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-clash font-bold uppercase tracking-wider text-primary">
                  {formatType(group.type)}
                </h3>
                <p className="mt-3 text-sm font-sans font-medium text-slate-500 leading-6">
                  {group.items.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
