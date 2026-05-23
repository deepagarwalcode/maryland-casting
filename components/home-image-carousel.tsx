"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HomeImageCarouselProps = {
  images: string[];
};

export function HomeImageCarousel({ images }: HomeImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className="overflow-hidden bg-white">
      <div className="relative aspect-[5/1] min-h-[220px] sm:min-h-[320px]">
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Facility image ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 bg-white px-4 py-4">
        {images.map((image, index) => (
          <button
            key={`${image}-dot-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 rounded-full ${
              index === activeIndex
                ? "bg-[var(--color-accent)]"
                : "bg-[#cfcfcf]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
