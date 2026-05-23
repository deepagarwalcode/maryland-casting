import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
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
              Providing premier municipal castings and fabrication. Built for durability, quality, and precision.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-secondary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-secondary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-xs font-clash font-bold text-primary tracking-widest uppercase">Navigation</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li><Link href="/" className="text-sm font-sans font-medium text-slate-600 hover:text-secondary transition-colors">Home</Link></li>
                <li><Link href="/#about" className="text-sm font-sans font-medium text-slate-600 hover:text-secondary transition-colors">About Us</Link></li>
                <li><Link href="/catalog" className="text-sm font-sans font-medium text-slate-600 hover:text-secondary transition-colors">Catalog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-clash font-bold text-primary tracking-widest uppercase">Contact</h3>
              <ul role="list" className="mt-4 space-y-3 font-sans text-sm font-medium text-slate-600">
                <li>
                  <span className="text-primary font-bold">Cell:</span>{" "}
                  <a href="tel:+16674948953" className="hover:text-secondary transition-colors font-semibold">
                    +1 (667) 494-8953
                  </a>
                </li>
                <li>
                  <span className="text-primary font-bold">Email:</span>{" "}
                  <a href="mailto:castingmaryland@gmail.com" className="hover:text-secondary transition-colors font-semibold">
                    castingmaryland@gmail.com
                  </a>
                </li>
                <li className="pt-2 border-t border-slate-200/60 mt-2 space-y-1.5 font-normal text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>Laurel, MD, USA.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>Phoenix, Arizona, USA.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>Kolkata, West Bengal, India.</span>
                  </div>
                </li>
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
