import Link from "next/link";

export default function TrainingConsultantSection() {
  const benefits = [
    {
      title: "Expert-Led Learning",
      description: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis."
    },
    {
      title: "Interactive Workshops",
      description: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights."
    },
    {
      title: "Comprehensive Curriculum",
      description: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding."
    },
    {
      title: "Global Recognition",
      description: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition."
    }
  ];

  return (
    <section
      id="training-consultant"
      className="py-24 bg-[#F1EDF1]"
      aria-labelledby="consultant-heading"
    >
      <div className="mx-6 sm:mx-12 lg:mx-[64px]">
        {/* Header Area */}
        <div className="mb-6">
          <h2
            id="consultant-heading"
            className="text-[24px] sm:text-[40px] font-bold text-[#571244] font-nunito"
          >
            Training The Consultant
          </h2>
          <p className="text-[#571244] text-[16px] md:text-lg font-medium mb-4">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="text-gray-800 text-sm md:text-[18px] leading-relaxed">
            With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
          </p>
        </div>

        {/* Benefit Grid Box */}
        <div className="bg-[#4B0D37] rounded-xl p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-5">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="space-y-3">
                <h3 className="text-white font-semibold text-[16px] md:text-[18px]">{benefit.title}</h3>
                <p className="text-white text-sm md:text-[18px] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="#"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-lg bg-[#4B0D37] text-white font-bold text-sm hover:opacity-90 transition-opacity"
        >
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 7l-10 10M17 7H7M17 7v10" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
