import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="book-consultation"
      className="py-24 bg-[#11020B]"
      aria-labelledby="cta-heading"
    >
      <div className="mx-6 sm:mx-12 lg:mx-[64px] text-center">
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 font-nunito"
        >
          Let&apos;s work together to build something extraordinary
        </h2>
        <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you&apos;re an individual looking to upskill, an organisation
          seeking to transform your workforce, or a consultant building your
          practice — we&apos;re here to help you succeed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#book-consultation"
            className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-white text-brand-purple font-bold text-base hover:bg-white/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-purple"
          >
            Book a Consultation
          </Link>
          <Link
            href="mailto:hello@tobamsgroup.com"
            className="inline-flex items-center justify-center px-10 py-4 rounded-lg border-2 border-white text-white font-bold text-base hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-purple"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
