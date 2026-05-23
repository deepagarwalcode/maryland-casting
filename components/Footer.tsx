import React from "react";
import Link from "next/link";
import Image from "next/image";
import { contactInfo, officeLocations } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/mc-logo.png"
                alt="Maryland Casting logo"
                width={300}
                height={72}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-base text-slate-700 max-w-xs">
              Municipal castings, fabrication, catalog access, and contact details.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 xl:col-span-3 xl:mt-0">
            <div>
              <h3 className="text-sm font-clash font-bold text-primary tracking-[0.18em] uppercase">Navigation</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li><Link href="/" className="text-sm font-sans font-medium text-slate-600 hover:text-secondary transition-colors">Home</Link></li>
                <li><Link href="/#products" className="text-sm font-sans font-medium text-slate-600 hover:text-secondary transition-colors">Our Products</Link></li>
                <li><Link href="/#about" className="text-sm font-sans font-medium text-slate-600 hover:text-secondary transition-colors">About Us</Link></li>
                <li><Link href="/catalog" className="text-sm font-sans font-medium text-slate-600 hover:text-secondary transition-colors">Catalog</Link></li>
                <li><Link href="/contact" className="text-sm font-sans font-medium text-slate-600 hover:text-secondary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-clash font-bold text-primary tracking-[0.18em] uppercase">Contact</h3>
              <ul role="list" className="mt-4 space-y-3 font-sans text-sm font-medium text-slate-600">
                <li>
                  <span className="text-primary font-bold">Cell:</span>{" "}
                  <a href={contactInfo.phoneHref} className="hover:text-secondary transition-colors font-semibold">
                    {contactInfo.phone}
                  </a>
                </li>
                <li>
                  <span className="text-primary font-bold">Email:</span>{" "}
                  <a href={contactInfo.emailHref} className="hover:text-secondary transition-colors font-semibold">
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-clash font-bold text-primary tracking-[0.18em] uppercase">Offices</h3>
              <ul role="list" className="mt-4 space-y-3 font-sans text-sm font-medium text-slate-600">
                {officeLocations.map((office) => (
                  <li key={office}>{office}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm font-sans font-medium text-slate-500">
            &copy; {new Date().getFullYear()} Maryland Casting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
