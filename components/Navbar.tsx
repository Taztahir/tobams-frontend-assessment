"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "#about", hasDropdown: true },
  { name: "What We Do", href: "#what-we-do", hasDropdown: true },
  { name: "Jobs", href: "#jobs", hasDropdown: true },
  { name: "Projects", href: "#projects" },
  { name: "TG Academy", href: "#tg-academy" },
  { name: "Strategic Partnership", href: "#strategic-partnership" },
  { name: "Pricing", href: "#pricing" },
  { name: "Book a Consultation", href: "#book-consultation" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Tier: Logo + CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 rounded"
            aria-label="Tobams Group – Home"
          >
            <Image
              src="/TobamsLogo.png"
              alt="Tobams Group"
              width={140}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-brand-purple text-brand-purple font-semibold text-sm hover:bg-brand-purple hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
              aria-haspopup="true"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Account
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              className="px-6 py-2.5 rounded-lg bg-brand-red text-white font-bold text-sm hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 active:scale-95"
            >
              Take Assessment
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-brand-purple hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-purple"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Tier: Nav links (desktop only) */}
      <nav aria-label="Main navigation" className="hidden md:block border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center gap-6 h-12" role="list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-brand-purple font-medium transition-colors duration-200 whitespace-nowrap focus:outline-none focus:underline"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-gray-100 bg-white transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav aria-label="Mobile navigation">
          <ul className="px-4 pt-2 pb-4 space-y-1" role="list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-purple transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4 pt-2 border-t border-gray-100 flex flex-col gap-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-brand-purple text-brand-purple font-semibold text-sm hover:bg-brand-purple hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Account
            </button>
            <button
              type="button"
              className="w-full px-5 py-3 rounded-lg bg-brand-red text-white font-bold text-sm hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              Take Assessment
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
