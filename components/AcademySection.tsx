import Image from "next/image";
import Link from "next/link";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Product Management",
  "Data Analytics",
  "Cybersecurity Fundamentals",
  "Cloud Computing",
];

export default function AcademySection() {
  return (
    <section
      id="tg-academy"
      className="py-20 bg-white"
      aria-labelledby="academy-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 order-2 lg:order-1">
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
              Learning Management System
            </p>
            <h2
              id="academy-heading"
              className="text-3xl sm:text-4xl font-extrabold text-brand-purple leading-tight mb-5"
            >
              TG Academy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
              TG Academy is our cutting-edge learning management platform
              designed to upskill professionals with in-demand technology and
              business skills. Access world-class courses taught by industry
              experts at your own pace.
            </p>

            <ul className="space-y-3 mb-10" role="list">
              {courses.map((course) => (
                <li key={course} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full bg-brand-purple/10 flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3 text-brand-purple"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium text-sm">{course}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-purple text-white font-bold text-sm hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Circular Image */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-brand-purple/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                alt="Students collaborating and learning in TG Academy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
