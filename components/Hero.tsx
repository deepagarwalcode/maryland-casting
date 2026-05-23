import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative isolate min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 -z-10 w-full h-full object-cover scale-105"
      >
        <source src="https://res.cloudinary.com/dozvnnjok/video/upload/v1681729193/cating_home_page_ocwqgy.mov" />
      </video>
      <div className="absolute inset-0 -z-10 bg-black/55 backdrop-blur-[1px]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-clash font-bold uppercase tracking-wider text-white sm:text-6xl md:text-7.5xl drop-shadow-xl animate-in fade-in zoom-in duration-1000">
          Municipal Castings <br className="hidden md:block" /> & Steel Fabrication
        </h1>
        <div className="accent-line my-6" />
        <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-100 max-w-3xl drop-shadow-md font-sans font-medium animate-in slide-in-from-bottom duration-1000 delay-300 fill-mode-both">
          Municipal castings, fabrication, and product information.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 animate-in slide-in-from-bottom duration-1000 delay-500 fill-mode-both">
          <Link
            href="/catalog"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-xs font-clash font-bold uppercase tracking-widest text-white transition-all duration-300 bg-primary border-2 border-primary hover:border-secondary hover:bg-secondary rounded-sm shadow-xl hover:shadow-[0_0_30px_rgba(212,45,46,0.35)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          >
            View Product Catalog
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
