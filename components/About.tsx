import React from "react";

export default function About() {
  return (
    <section className="py-24 bg-white scroll-mt-12" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Who We Are & Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: General Introduction, Mission & Vision */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-clash font-bold uppercase tracking-wider text-primary">
                ABOUT MARYLAND CASTING
              </h2>
              <div className="accent-line-left" />
              <p className="text-base md:text-lg font-sans font-medium text-slate-600 leading-relaxed">
                Your Dedicated Industrial Engineering Ally. For more than forty years, Maryland Casting has cooperated closely with clients to craft highly efficient, resilient, and long-lasting municipal solutions.
              </p>
            </div>

            {/* Mission & Vision Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50/50 p-6 rounded-xl border border-slate-100 border-l-4 border-l-secondary space-y-2">
                <h4 className="font-clash font-bold text-xs tracking-widest text-primary uppercase">
                  Our Commitment & Mission
                </h4>
                <p className="font-sans font-normal text-xs text-slate-500 leading-relaxed">
                  To engineer and supply casting solutions of outstanding caliber, exact dimensional accuracy, and absolute dependability—consistently surpassing our partners' project expectations.
                </p>
              </div>
              
              <div className="bg-slate-50/50 p-6 rounded-xl border border-slate-100 border-l-4 border-l-primary space-y-2">
                <h4 className="font-clash font-bold text-xs tracking-widest text-primary uppercase">
                  Our Future Vision
                </h4>
                <p className="font-sans font-normal text-xs text-slate-500 leading-relaxed">
                  To pioneer metallurgy advancements, elevate municipal fabrication standards, and build a completely friction-free, straightforward supply chain experience for our clients.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary" />
              <h3 className="text-4xl sm:text-5xl font-clash font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                40+ YEARS
              </h3>
              <p className="font-sans font-semibold text-slate-600 text-sm tracking-wider uppercase mt-2">
                Industry Excellence
              </p>
              <p className="font-sans font-normal text-xs text-slate-400 mt-1">
                Providing premier infrastructure casting solutions.
              </p>
            </div>

            <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
              <h3 className="text-4xl sm:text-5xl font-clash font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                100% QUALITY
              </h3>
              <p className="font-sans font-semibold text-slate-600 text-sm tracking-wider uppercase mt-2">
                Standards Compliant
              </p>
              <p className="font-sans font-normal text-xs text-slate-400 mt-1">
                Every batch undergo severe loading and chemical testing.
              </p>
            </div>

            <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary" />
              <h3 className="text-4xl sm:text-5xl font-clash font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                15,000+ TONS
              </h3>
              <p className="font-sans font-semibold text-slate-600 text-sm tracking-wider uppercase mt-2">
                Annual Output Capacity
              </p>
              <p className="font-sans font-normal text-xs text-slate-400 mt-1">
                High-capacity foundry built to support major municipal grids.
              </p>
            </div>
          </div>
        </div>

        {/* Divider / Spacer */}
        <div className="border-t border-slate-100 my-24" />

        {/* Bottom: Core Values */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-clash font-bold uppercase tracking-wider text-primary">
              OUR FOUNDATION PILLARS
            </h2>
            <div className="accent-line" />
            <p className="mt-4 text-base md:text-lg font-sans font-medium text-slate-600 max-w-2xl mx-auto">
              We anchor our operations on four fundamental core values, ensuring strict precision and complete client satisfaction at every touchpoint of our manufacturing process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Value 1 */}
            <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-xl shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-clash text-2xl font-bold text-secondary tracking-widest">
                  01
                </span>
                <span className="h-[1px] w-8 bg-slate-200 group-hover:w-12 group-hover:bg-secondary transition-all duration-300" />
                <h3 className="font-clash text-xs font-bold tracking-widest text-primary uppercase">
                  Uncompromising Quality
                </h3>
              </div>
              <p className="font-sans font-normal text-sm text-slate-500 leading-relaxed pl-14">
                We maintain rigorous standards and verified structural performance across every customized casting and fabricated component we forge.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-xl shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-clash text-2xl font-bold text-primary tracking-widest">
                  02
                </span>
                <span className="h-[1px] w-8 bg-slate-200 group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
                <h3 className="font-clash text-xs font-bold tracking-widest text-primary uppercase">
                  Dependability & Ownership
                </h3>
              </div>
              <p className="font-sans font-normal text-sm text-slate-500 leading-relaxed pl-14">
                Offering transparent, technically-informed communication and honoring our word—ensuring strict adherence to project scope, production schedules, and safe delivery timelines.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-xl shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-clash text-2xl font-bold text-secondary tracking-widest">
                  03
                </span>
                <span className="h-[1px] w-8 bg-slate-200 group-hover:w-12 group-hover:bg-secondary transition-all duration-300" />
                <h3 className="font-clash text-xs font-bold tracking-widest text-primary uppercase">
                  Client-First Alliance
                </h3>
              </div>
              <p className="font-sans font-normal text-sm text-slate-500 leading-relaxed pl-14">
                Building responsive, decades-long industrial relationships founded on mutual trust, engineering expertise, and relentless project follow-through.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-xl shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-clash text-2xl font-bold text-primary tracking-widest">
                  04
                </span>
                <span className="h-[1px] w-8 bg-slate-200 group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
                <h3 className="font-clash text-xs font-bold tracking-widest text-primary uppercase">
                  Integrity & Proactive Growth
                </h3>
              </div>
              <p className="font-sans font-normal text-sm text-slate-500 leading-relaxed pl-14">
                Practicing honest, fully transparent business transactions while continuously investing in our foundry workforce, modern workflows, and technical machinery.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
