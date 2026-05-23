"use client";

import React, { useState } from "react";
import Image from "next/image";
import { allProducts } from "@/lib/helper";
import { X, ExternalLink } from "lucide-react";

export default function CatalogView() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const activeProductData = selectedProduct
    ? allProducts.find((p) => p.name === selectedProduct)
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 pb-6 border-b border-slate-150">
        <h1 className="text-3xl font-clash font-bold uppercase tracking-wider text-primary mb-4 sm:mb-0">Product Catalog</h1>
        <a
          href="https://canva.link/shg8q80rmqe3wv1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary hover:bg-secondary transition-all duration-300 text-white px-6 py-3 rounded-sm font-clash font-bold text-xs tracking-widest uppercase shadow-md hover:shadow-[0_0_20px_rgba(212,45,46,0.25)]"
        >
          View Full Product Catalog
          <ExternalLink size={14} />
        </a>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="w-full lg:w-64 shrink-0 flex flex-col gap-2 bg-slate-50/50 p-4 rounded-xl border border-slate-100 h-fit">
          <button
            onClick={() => setSelectedProduct(null)}
            className={`text-left px-4 py-3 rounded-sm font-clash text-xs tracking-wider uppercase transition-all duration-200 border-l-4 ${selectedProduct === null
              ? "bg-white border-secondary text-primary font-bold shadow-sm"
              : "border-transparent text-slate-500 hover:text-primary hover:bg-white/50 font-semibold"
              }`}
          >
            Show All
          </button>

          {allProducts.map((product) => (
            <button
              key={product.name}
              onClick={() => setSelectedProduct(product.name)}
              className={`text-left px-4 py-3 rounded-sm font-clash text-xs tracking-wider uppercase transition-all duration-200 border-l-4 ${selectedProduct === product.name
                ? "bg-white border-secondary text-primary font-bold shadow-sm"
                : "border-transparent text-slate-500 hover:text-primary hover:bg-white/50 font-semibold"
                }`}
            >
              {product.displayName}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {selectedProduct === null ? (
            /* Show All View */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {allProducts.map((product) => (
                <div
                  key={product.name}
                  className="bg-white border border-slate-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-slate-200 transition-all cursor-pointer group flex flex-col pt-4 px-4 pb-0"
                  onClick={() => setSelectedProduct(product.name)}
                >
                  <div className="relative aspect-square w-full rounded-md overflow-hidden mb-3">
                    <Image
                      src={product.imgUrl}
                      alt={product.displayName}
                      fill
                      className="object-contain rounded-md group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <div className="py-4 text-center border-t border-slate-50 flex-1 flex items-center justify-center">
                    <p className="text-primary font-sans font-bold text-sm tracking-wide group-hover:text-secondary transition-colors duration-300">
                      {product.displayName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Specific Product View */
            <div className="animate-in fade-in duration-300">
              {activeProductData && (
                <>
                  <div className="mb-10">
                    <h2 className="text-2xl sm:text-3xl font-clash font-bold uppercase tracking-wider text-primary mb-4">
                      {activeProductData.displayName}
                    </h2>
                    <p className="text-slate-600 font-sans font-medium text-base md:text-lg leading-relaxed mb-6">
                      {activeProductData.desc}
                    </p>
 
                    {activeProductData.points && activeProductData.points.length > 0 && (
                      <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-8 shadow-sm">
                        <ul className="space-y-3">
                          {activeProductData.points.map((point, idx) => (
                            <li key={idx} className="flex items-start text-sm md:text-base font-sans font-normal text-slate-600">
                              <span className="text-secondary mr-3 font-bold text-lg leading-none select-none">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="border-b border-slate-100 pb-3 mb-8 relative">
                    <h3 className="text-xs font-clash font-bold uppercase tracking-widest text-primary">
                      Product Gallery
                    </h3>
                    <span className="absolute bottom-0 left-0 w-12 h-[3px] bg-secondary rounded-full" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {activeProductData.photos.map((photo, index) => (
                      <div
                        key={index}
                        className="bg-white border border-slate-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-slate-200 transition-all cursor-pointer group flex flex-col pt-4 px-4 pb-4"
                        onClick={() => setExpandedImage(photo.url)}
                      >
                        <div className="relative aspect-square w-full rounded-md overflow-hidden mb-3">
                          <Image
                            src={photo.url}
                            alt={photo.name}
                            fill
                            className="object-contain rounded-md group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-primary/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setExpandedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-secondary transition-all duration-200 p-2 bg-white/10 hover:bg-white/20 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setExpandedImage(null);
            }}
          >
            <X size={24} />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={expandedImage}
              alt="Expanded view"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}
