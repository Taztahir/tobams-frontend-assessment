"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Aisha Yusuf",
    role: "Product Manager, Fintech Startup",
    quote:
      "The TG Academy programme completely transformed how I approach product strategy. The facilitators were world-class and the curriculum was directly applicable to my day-to-day work.",
    initials: "AY",
  },
  {
    id: 2,
    name: "John Davies",
    role: "Head of Operations, Multinational Corp",
    quote:
      "Tobams Group's Corporate Training programme delivered measurable results for our team. Employee satisfaction scores jumped 40% within three months of completing the training.",
    initials: "JD",
  },
  {
    id: 3,
    name: "Ngozi Okafor",
    role: "Independent Consultant",
    quote:
      "Training The Consultant gave me the frameworks and confidence I needed to launch my consulting practice. Within 6 months I had signed my first three clients.",
    initials: "NO",
  },
  {
    id: 4,
    name: "Emeka Adeyemi",
    role: "Senior Manager, Banking Sector",
    quote:
      "The Management Development Programme was a game changer. I now lead with clarity and purpose. My team's performance has never been stronger.",
    initials: "EA",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="py-20 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            What People Say
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-extrabold text-brand-purple"
          >
            Testimonials
          </h2>
        </div>

        {/* Cards row – desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="flex flex-col gap-5 p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <svg
                className="w-8 h-8 text-brand-red/40"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <span className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </span>
                <div>
                  <p className="font-bold text-brand-purple text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel – mobile */}
        <div className="md:hidden">
          <article className="flex flex-col gap-5 p-6 rounded-xl border border-gray-100 bg-white shadow-md">
            <svg className="w-8 h-8 text-brand-red/40" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-gray-600 text-sm leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {t.initials}
              </span>
              <div>
                <p className="font-bold text-brand-purple text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          </article>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-brand-purple text-brand-purple flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm text-gray-500" aria-live="polite">
              {active + 1} / {testimonials.length}
            </span>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-brand-purple text-brand-purple flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
