import Image from "next/image";

const features = [
  "One-on-one coaching sessions with industry mentors",
  "Personalised learning paths based on your goals",
  "Flexible scheduling that fits your lifestyle",
  "Real-world projects and case studies",
  "Career guidance and placement support",
];

function LightningIcon() {
  return (
    <svg
      className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export default function PersonalisedTrainingSection() {
  return (
    <section
      id="personalised-training"
      className="py-20 bg-white"
      aria-labelledby="personalised-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80"
                alt="Person engaged in a one-on-one personalised training session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
              Tailored for You
            </p>
            <h2
              id="personalised-heading"
              className="text-3xl sm:text-4xl font-extrabold text-brand-purple leading-tight mb-5 font-nunito"
            >
              Personalised Individual Training
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our individual training programmes are built around you. We work
              closely with each learner to create customised learning
              experiences that accelerate personal growth and career
              advancement.
            </p>

            <ul className="space-y-5" role="list">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <LightningIcon />
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
