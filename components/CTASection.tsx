import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="book-consultation"
      className="py-10 bg-[#F9F9F9]"
      aria-labelledby="cta-heading"
    >
      <div className="mx-6 sm:mx-12 lg:mx-[120px] bg-[#4B0D37] rounded-[8px] max-md:px-[24px] py-[32px] text-center flex flex-col items-center">
        <h2
          id="cta-heading"
          className="text-white lg:text-[20px] font-medium mb-3 max-w-4xl"
        >
          Want to accelerate professional growth and development at your organisation?
        </h2>
        <p className="text-white text-lg sm:text-xl mb-10">
          See how we can help.
        </p>

        <Link
          href="#book-consultation"
          className="inline-flex items-center justify-center px-12 py-4 rounded-lg bg-white text-[#4B0D37] font-semibold text-[14px] md:text-[18px] hover:bg-white/90 transition-all duration-200 shadow-lg active:scale-95"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
