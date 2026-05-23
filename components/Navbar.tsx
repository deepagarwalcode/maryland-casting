"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/#about" },
  { name: "PRODUCT CATALOG", href: "/catalog" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = pathname === "/";
  const isTransparentHeroNav = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isTransparentHeroNav
          ? "bg-transparent py-5"
          : "bg-white/95 backdrop-blur-md shadow-md py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/mc-logo.png"
                alt="Maryland Casting logo"
                width={300}
                height={72}
                className={`h-12 w-auto md:h-14 transition-all duration-300 ${
                  isTransparentHeroNav ? "brightness-0 invert" : ""
                }`}
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-clash font-semibold tracking-[0.22em] transition-all duration-300 relative py-2 group ${
                  isTransparentHeroNav
                    ? "text-white hover:text-secondary"
                    : "text-primary hover:text-secondary"
                }`}
              >
                <span className="relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`transition-colors ${
                isTransparentHeroNav ? "text-white hover:text-secondary" : "text-primary hover:text-secondary"
              }`}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md shadow-xl absolute w-full left-0 top-full border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-clash font-semibold tracking-[0.18em] text-primary hover:text-secondary transition-colors border-b border-slate-50 pb-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
