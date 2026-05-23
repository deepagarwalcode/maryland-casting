"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://res.cloudinary.com/dozvnnjok/image/upload/v1681908687/Facilities/2_ior1gg.jpg",
  "https://res.cloudinary.com/dozvnnjok/image/upload/v1681832103/Facilities/Screenshot_207_a1hopp.png",
  "https://res.cloudinary.com/dozvnnjok/image/upload/v1681831735/Facilities/stock_w9lcbm.jpg",
  "https://res.cloudinary.com/dozvnnjok/image/upload/v1681831734/Facilities/PACKING-MACHINE_dyoecc.jpg",
  "https://res.cloudinary.com/dozvnnjok/image/upload/v1681831734/Facilities/PACKING_kkzuk5.jpg",
  "https://res.cloudinary.com/dozvnnjok/image/upload/v1681832103/Facilities/Screenshot_207_a1hopp.png",
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-slate-50/50 overflow-hidden" id="facilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-clash font-bold uppercase tracking-wider text-primary sm:text-4xl">
            Facility Images
          </h2>
          <div className="accent-line" />
          <p className="mt-4 text-base md:text-lg font-sans font-medium text-slate-600">
            State-of-the-art equipment designed for precision and durability.
          </p>
        </div>

        <div className="relative isolate group">
          <div className="overflow-hidden bg-white shadow-xl rounded-2xl border border-slate-100" ref={emblaRef}>
            <div className="flex -ml-4">
              {images.map((src, index) => (
                <div 
                   key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-300">
                    <Image
                      src={src}
                      alt={`Facility Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/90 text-primary rounded-full shadow-lg border border-slate-100 hover:bg-white hover:text-secondary hover:border-secondary hover:scale-110 transition-all z-10 backdrop-blur opacity-0 group-hover:opacity-100 disabled:opacity-50"
            disabled={!prevBtnEnabled}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/90 text-primary rounded-full shadow-lg border border-slate-100 hover:bg-white hover:text-secondary hover:border-secondary hover:scale-110 transition-all z-10 backdrop-blur opacity-0 group-hover:opacity-100 disabled:opacity-50"
            disabled={!nextBtnEnabled}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-10 gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "bg-secondary w-8" : "bg-slate-300 hover:bg-slate-400 w-2.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
