"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "#about", hasDropdown: true },
  { name: "What We Do", href: "#what-we-do", hasDropdown: true },
  { name: "Jobs", href: "#jobs", hasDropdown: true },
  { name: "Projects", href: "#projects" },
  { name: "TG Academy", href: "#what-we-do" },
  { name: "Strategic Partnership", href: "#book-consultation" },
  { name: "Pricing", href: "#pricing" },
  { name: "Book a Consultation", href: "#book-consultation" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white relative z-50 shadow-sm">
      {/* Top Tier */}
      <div className="mx-6 sm:mx-12 lg:mx-[64px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/TobamsLogo.png"
            alt="Tobams Group"
            width={165}
            height={64}
            priority
            className="md:w-auto object-contain "
          />
        </Link>

        {/* Top Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#4B0D37] text-white font-medium text-sm hover:opacity-90 transition-all active:scale-95">
            <div className="w-6 h-6 rounded-full bg-[#DDD0DA] flex items-center justify-center">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <span>Account</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button className="px-6 py-2.5 rounded-md bg-[#EF4353] text-white font-bold text-sm hover:opacity-90 transition-all shadow-sm active:scale-95">
            Take Assessment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-8 h-8 bg-black rounded-xl flex flex-col items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Open menu</span>
          <div className={`w-5 h-0.5 bg-white rounded-full transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-5 h-0.5 bg-white rounded-full transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-5 h-0.5 bg-white rounded-full transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>
      </div>

      {/* Bottom Tier (Desktop) */}
      <div className="hidden lg:block border-t-2 border-[#DDD0DA]">
        <div className="mx-6 sm:mx-12 lg:mx-[64px]">
          <nav className="flex items-center justify-center gap-8 py-5 overflow-x-auto no-scrollbar">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1.5 text-[18px] whitespace-nowrap transition-colors duration-200 hover:text-[#4B0D37] ${link.name === "About"
                  ? "text-[#4B0D37] font-bold border-b-2 border-[#4B0D37]"
                  : "text-gray-700 font-medium"
                  }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 origin-top ${isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
      >
        <nav className="px-6 py-8 space-y-6">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between text-lg font-bold text-gray-800 hover:text-[#4B0D37] active:text-[#4B0D37]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-8 border-t border-gray-100 flex flex-col gap-4">
            <button className="w-full flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-[#4B0D37] text-white font-bold text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
              Account
            </button>
            <button className="w-full px-5 py-4 rounded-xl bg-[#EF4353] text-white font-bold text-base shadow-lg shadow-red-200">
              Take Assessment
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
