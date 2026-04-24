import Link from "next/link";
import Image from "next/image";

const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const company = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solution = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

export default function Footer() {
  return (
    <footer className="text-white">
      <div className=" bg-[#11040E]">

        {/* Top CTA Section */}
        <div className=" px-[24px] lg:px-[64px] py-10 border-b-2 border-[#C4C4C4] bg-[#1D0617] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-6">
          <div className="text-left">
            <p className="text-sm font-medium text-white/80 mb-2">Ready to be a part of something extraordinary?</p>
            <h2 className="md:text-[32px] text-[20px] font-bold font-nunito">Let&apos;s work together to create a difference</h2>
          </div>
          <Link
            href="#contact"
            className="px-10 py-3.5 rounded-[4px] bg-[#571244] text-white font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="px-6 sm:px-12 lg:px-[64px] py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">

            {/* Brand column */}
            <div className="space-y-8">
              <Link href="/">
                <Image
                  src="/TobamsLogo.png"
                  alt="Tobams Group"
                  width={160}
                  height={44}
                  className="h-[72px] w-[188px] object-contain scale-[170%]"
                />
              </Link>
              <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110" aria-label="LinkedIn">
                  <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110" aria-label="Instagram">
                  <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110" aria-label="X">
                  <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
              </div>
            </div>

            {/* What We Do column */}
            <div>
              <h3 className="text-base font-bold mb-6">What We Do</h3>
              <ul className="space-y-3">
                {whatWeDo.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h3 className="text-base font-bold mb-6">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution column */}
            <div>
              <h3 className="text-base font-bold mb-6">Solution</h3>
              <ul className="space-y-3">
                {solution.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-16 bg-[#FFFFFF0F] rounded-xl p-8 border border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] md:gap-12">

              {/* Offices column */}
              <div className="text-left">
                <h3 className="text-lg font-bold mb-3">Registered Offices</h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-[#EF4353] font-bold text-xs uppercase tracking-widest mb-3">United Kingdom</p>
                    <p className="text-sm text-white/70 leading-relaxed">
                      07451196 (Registered by Company House)<br />
                      Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                    </p>
                  </div>
                </div>
              </div>

              {/* Nigeria Office column */}
              <div className=" border-white/10 lg:border-l lg:pl-12 pt-10 lg:pt-10 text-left">
                <div className="space-y-8">
                  <div>
                    <p className="text-[#EF4353] font-bold text-xs uppercase tracking-widest mb-3">Nigeria</p>
                    <p className="text-sm text-white/70 leading-relaxed">
                      RC 1048722 (Registered by the Corporate Affairs Commission)<br />
                      4, Muaz Close, Angwar-Rimi
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact column */}
              <div className=" border-white/10 lg:border-l lg:pl-12 pt-10 lg:pt-0 text-left">
                <h3 className="text-lg font-bold mb-3">Contact Information</h3>
                <div className="space-y-4 flex flex-col items-start">
                  <a href="mailto:theteam@tobamsgroup.com" className="flex items-center gap-4 text-white/80 hover:text-white group">
                    <div className="w-5 h-5 flex items-center justify-center text-[#EF4353]">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                    </div>
                    <span className="text-sm">theteam@tobamsgroup.com</span>
                  </a>
                  <a href="tel:+447886600748" className="flex items-center gap-4 text-white/80 hover:text-white group">
                    <div className="w-5 h-5 flex items-center justify-center text-[#EF4353]">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                    </div>
                    <span className="text-sm">+447886600748</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white/50">
              Copyright © Tobams Group, 2024. All rights reserved.
            </p>
            <div className="flex flex-wrap max-md:justify-center gap-8">
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors underline underline-offset-4 decoration-white/20">Terms and Conditions</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors underline underline-offset-4 decoration-white/20">Privacy Policy</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors underline underline-offset-4 decoration-white/20">Cookies Policy</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
