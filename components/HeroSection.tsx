import Image from "next/image";
import Link from "next/link";
import HeroImage from "../public/TobamsHeroImage.jpg";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative w-full py-28 flex items-center justify-center overflow-hidden"
      aria-label="Hero – Training and Development"
    >
      {/* Background Image */}
      <Image
        src={HeroImage}
        alt="Professional woman working on a laptop with digital technology overlays"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-6 sm:mx-12 lg:mx-[64px] w-full flex flex-col items-center text-center">
        <div className="mx-6 sm:mx-12 lg:mx-[64px] flex flex-col items-center gap-4">
          {/* Pill label */}
          <span className="inline-flex items-center px-8 py-3 rounded-full bg-[#2A2A2A]/80 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest mb-2">
            What We Do
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-tight font-nunito tracking-tight">
            Training and Development
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-3xl">
            Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="#book-consultation"
              className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-[#661E4E] text-white font-bold text-sm hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#661E4E] focus:ring-offset-2"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
