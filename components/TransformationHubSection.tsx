import Image from "next/image";

const features = [
  {
    title: "Expert Facilitation",
    description: "Sessions led by Jite Newton, a seasoned transformation expert.",
    icon: "🎯",
  },
  {
    title: "Systems Thinking",
    description: "Understand the interconnected dynamics within your organisation.",
    icon: "🔗",
  },
  {
    title: "Innovation Mindset",
    description: "Develop the creative confidence to challenge the status quo.",
    icon: "💡",
  },
  {
    title: "Agile Transformation",
    description: "Adopt agile methodologies to deliver value faster and smarter.",
    icon: "⚡",
  },
  {
    title: "Culture Change",
    description: "Build a culture of continuous learning and psychological safety.",
    icon: "🌱",
  },
  {
    title: "Sustainable Growth",
    description: "Strategies that ensure long-term organisational resilience.",
    icon: "📈",
  },
];

export default function TransformationHubSection() {
  return (
    <section
      id="transformation-hub"
      className="py-20 bg-white"
      aria-labelledby="transformation-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column intro */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          {/* Text */}
          <div className="flex-1">
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
              Transformation Hub
            </p>
            <h2
              id="transformation-heading"
              className="text-3xl sm:text-4xl font-extrabold text-brand-purple leading-tight mb-5 font-nunito"
            >
              Transformation Hub with Jite Newton
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              The Transformation Hub is a dynamic space where leaders, teams,
              and organisations come to rethink, redesign, and reimagine how
              they operate. Facilitated by renowned transformation coach Jite
              Newton, this programme blends strategic insight with practical
              tools for lasting change.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Jite Newton brings over 15 years of experience working with
              multinationals, NGOs, and start-ups across Africa and Europe to
              deliver meaningful organisational transformation.
            </p>
          </div>

          {/* Portrait image */}
          <div className="flex-shrink-0 w-full lg:w-96">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=600&q=80"
                alt="Jite Newton, transformation coach and hub facilitator"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
          </div>
        </div>

        {/* 6-feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col gap-3 p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-3xl" role="img" aria-label={feature.title}>
                {feature.icon}
              </span>
              <h3 className="font-bold text-brand-purple text-base">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
