import Image from "next/image";

const benefits = [
  "Customised training programs for your team",
  "Expert facilitators with industry experience",
  "Interactive workshops and hands-on learning",
  "Measurable performance outcomes",
  "Flexible scheduling for corporate teams",
];

export default function CorporateTrainingsSection() {
  return (
    <section
      id="corporate-trainings"
      className="py-20 bg-gray-50"
      aria-labelledby="corporate-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                alt="Professionals engaged in a corporate training workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
              Enterprise Solutions
            </p>
            <h2
              id="corporate-heading"
              className="text-3xl sm:text-4xl font-extrabold text-brand-purple leading-tight mb-5 font-nunito"
            >
              Corporate Trainings
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We partner with organisations to design and deliver bespoke
              training programmes that address specific skill gaps, drive
              productivity, and align with your strategic business goals.
            </p>

            <ul className="space-y-4" role="list">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-purple flex items-center justify-center" aria-hidden="true">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
