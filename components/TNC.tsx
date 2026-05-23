import React from "react";

const tncItems = [
  {
    num: "01",
    title: "SCOPE & ORDER AGREEMENT",
    desc: "All fabrications and castings are custom built to approved drawings and structural specifications. Any modifications requested after the foundry patterns have been forged may incur additional tooling costs and lead time adjustments."
  },
  {
    num: "02",
    title: "STANDARDS & QUALITY ASSURANCE",
    desc: "Our castings strictly comply with specified ASTM standards for load-bearing capabilities and chemical metallurgy. Independent inspection reports can be provided upon shipment request for verified peace of mind."
  },
  {
    num: "03",
    title: "DELIVERY, TIMELINES & STORAGE",
    desc: "Estimated lead times start from the date of final design approval. While we coordinate reliable freight transit, we are not liable for environmental or logistical transport delays once the materials leave our facility."
  },
  {
    num: "04",
    title: "WARRANTY & PERFORMANCE",
    desc: "We stand by our craftsmanship. Maryland Casting warrants that all products are free from structural manufacturing defects for a period of 12 months under standard installation, municipal load ratings, and use."
  }
];

export default function TNC() {
  return (
    <section className="py-24 bg-slate-50/50 border-t border-slate-100 scroll-mt-12" id="tnc">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-clash font-bold uppercase tracking-wider text-primary sm:text-4xl">
            TERMS & CONDITIONS
          </h2>
          <div className="accent-line" />
          <p className="mt-4 text-base md:text-lg font-sans font-medium text-slate-600 max-w-2xl mx-auto">
            Operating agreements ensuring premium engineering quality and project alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tncItems.map((item) => (
            <div 
              key={item.num}
              className="bg-white border border-slate-100 p-8 rounded-xl shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-clash text-2xl font-bold text-secondary tracking-widest">
                  {item.num}
                </span>
                <span className="h-[1px] w-8 bg-slate-200 group-hover:w-12 group-hover:bg-secondary transition-all duration-300" />
                <h3 className="font-clash text-sm font-bold tracking-widest text-primary uppercase">
                  {item.title}
                </h3>
              </div>
              <p className="font-sans font-normal text-sm text-slate-500 leading-relaxed pl-14">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
