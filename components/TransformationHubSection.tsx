import Image from "next/image";
import Link from "next/link";
import TransformationHubImage from '../public/TransformationHubImage.jpg';

const benefits = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

const PurpleBolt = () => (
  <svg className="w-5 h-5 text-[#661E4E]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default function TransformationHubSection() {
  return (
    <section id="transformation-hub" className="py-24 bg-white">
      <div className="mx-6 sm:mx-12 lg:mx-[64px]">
        {/* Main Light Pink Container */}
        <div className="bg-[#FCE7E8] rounded-[32px] p-8 sm:p-12 lg:p-16">
          {/* Header Area */}
          <div className="mb-10">
            <p className="text-[#0046FF] font-medium italic mb-2">
              Learning With Our CEO:
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#4B0D37] font-nunito leading-tight mb-6">
              Transformation Hub With Jite Newton
            </h2>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed max-w-5xl">
              Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left: Image */}
            <div className="w-full lg:w-[42%] shrink-0">
              <div className="">
                <Image
                  src={TransformationHubImage}
                  alt="Jite Newton Presentation"
                  width={560}
                  height={340}
                  className="rounded-[24px]"
                />
              </div>
            </div>

            {/* Right: Benefits Grid & Button */}
            <div className="flex-1 w-full">
              <div className="bg-[#F9D6D9] rounded-[24px] p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="bg-white p-4 rounded-xl flex items-center gap-3 shadow-sm"
                    >
                      <PurpleBolt />
                      <span className="text-gray-800 font-medium text-sm sm:text-base whitespace-nowrap">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#4B0D37] text-white font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 7l-10 10M17 7H7M17 7v10" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
