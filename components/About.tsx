import React from "react";
import { Lightbulb, Target } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-white scroll-mt-12" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-clash font-bold uppercase tracking-wider text-primary">
              About Maryland Casting
            </h2>
            <div className="accent-line-left" />
            <p className="text-base md:text-lg font-sans font-medium text-slate-600 leading-relaxed">
              Maryland Casting presents product information for municipal
              castings, fabrication items, and related catalog categories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-50/50 p-7 rounded-xl border border-slate-100 border-l-4 border-l-secondary space-y-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white">
                  <Target size={18} />
                </div>
                <h4 className="font-clash font-bold text-base sm:text-lg tracking-[0.18em] text-primary uppercase">
                  Mission
                </h4>
              </div>
              <p className="font-sans font-normal text-sm md:text-base text-slate-500 leading-relaxed">
                To supply casting and fabrication products according to project
                drawings, specifications, and catalog requirements.
              </p>
            </div>

            <div className="bg-slate-50/50 p-7 rounded-xl border border-slate-100 border-l-4 border-l-primary space-y-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <Lightbulb size={18} />
                </div>
                <h4 className="font-clash font-bold text-base sm:text-lg tracking-[0.18em] text-primary uppercase">
                  Vision
                </h4>
              </div>
              <p className="font-sans font-normal text-sm md:text-base text-slate-500 leading-relaxed">
                To provide a clear catalog and contact point for municipal
                casting and fabrication enquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
