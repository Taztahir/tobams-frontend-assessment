import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[560px] md:min-h-[680px] lg:min-h-[760px] flex items-center overflow-hidden"
      aria-label="Hero – Training and Development"
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=80"
        alt="Professional woman working on a laptop with digital technology overlays"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-brand-purple/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl flex flex-col gap-6">
          {/* Pill label */}
          <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold uppercase tracking-widest">
            What We Do
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Training and <br className="hidden sm:block" />
            Development
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
            We enhance the skills, knowledge, and performance of individuals and
            organisations through world-class training programs tailored to
            real-world challenges.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="#book-consultation"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-white text-brand-purple font-bold text-sm hover:bg-white/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-purple"
            >
              Book a Consultation
            </Link>
            <Link
              href="#what-we-do"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-white text-white font-bold text-sm hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-purple"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
