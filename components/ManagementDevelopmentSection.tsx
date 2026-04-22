import Image from "next/image";

const benefits = [
  "Executive leadership & strategic thinking",
  "Change management and organisational transformation",
  "Communication and stakeholder engagement",
  "Decision-making under uncertainty",
  "Building and leading high-performance teams",
  "Financial acumen for non-finance managers",
];

function LightningIcon() {
  return (
    <svg
      className="w-5 h-5 text-white flex-shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export default function ManagementDevelopmentSection() {
  return (
    <section
      id="management-development"
      className="py-20 bg-gray-50"
      aria-labelledby="management-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-stretch">
          {/* Large Image */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative w-full h-80 lg:h-full min-h-[400px] rounded-2xl lg:rounded-r-none lg:rounded-l-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Senior manager leading a management development programme"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Benefits on purple bar */}
          <div className="w-full lg:w-1/2 bg-brand-purple rounded-2xl lg:rounded-l-none lg:rounded-r-2xl p-8 sm:p-12 flex flex-col justify-center">
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
              Leadership Growth
            </p>
            <h2
              id="management-heading"
              className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5"
            >
              Management Development Programme
            </h2>
            <p className="text-white/80 leading-relaxed mb-8 text-sm">
              Our Management Development Programme equips current and aspiring
              leaders with the tools and mindset needed to drive organisational
              growth and inspire their teams.
            </p>

            <ul className="space-y-4" role="list">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <LightningIcon />
                  <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
