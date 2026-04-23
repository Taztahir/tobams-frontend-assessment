"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    content: (
      <>
        Working with <span className="font-bold">Tobams Group</span> on our website was a <span className="font-bold">breeze</span>. They <span className="font-bold">understood</span> our vision and transformed it into a beautiful <span className="font-bold">online space</span>. Highly recommend their <span className="font-bold">Website Design</span> service!
      </>
    ),
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    content: (
      <>
        Tobams Group&apos;s Digital Marketing strategies gave our brand the <span className="font-bold">boost it needed</span>. Simple yet powerful <span className="font-bold">techniques</span> that delivered <span className="font-bold">tangible results</span>. A pleasure to collaborate with!
      </>
    ),
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    content: (
      <>
        Tobams Group has been <span className="font-bold">instrumental</span> in our talent <span className="font-bold">acquisition</span> journey. Their Tech Talent Solution service consistently connects us with the <span className="font-bold">right professionals</span>. Reliable and <span className="font-bold">straightforward</span>.
      </>
    ),
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
  },
  {
    name: "Sarah Jenkins",
    role: "CEO, TechInnovate",
    content: (
      <>
        The <span className="font-bold">Transformation Hub</span> provided exactly the <span className="font-bold">strategic edge</span> we were looking for. Their team is <span className="font-bold">exceptionally skilled</span> and dedicated to client <span className="font-bold">success</span>.
      </>
    ),
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Update items per view based on window size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = () => setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="mx-[64px]">
        <h2 className="text-5xl font-bold text-center mb-20 font-nunito text-[#1A1A1A]">Testimonials</h2>

        <div className="relative">
          {/* Slider Container */}
          <div 
            className="flex transition-transform duration-500 ease-out gap-8"
            style={{ transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)`, width: `${(testimonials.length / itemsPerView) * 100}%` }}
          >
            {testimonials.map((t, i) => (
              <div 
                key={i}
                className="bg-white p-10 rounded-[40px] border-l-2 border-t-2 border-[#EF4353] shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative transition-all hover:shadow-lg"
                style={{ width: `calc(${100 / testimonials.length}% - 2rem)` }}
              >
                {/* Header: Avatar + Info */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-[6px] border-[#FFD233]">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] text-lg">{t.name}</h3>
                    <p className="text-[#666666] text-sm">{t.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="text-[#333333] text-base leading-relaxed">
                  {t.content}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-end gap-4 mt-12 px-4">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-lg bg-[#FFF1F2] flex items-center justify-center text-[#EF4353] hover:bg-[#FFE4E6] transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-lg bg-[#FFF1F2] flex items-center justify-center text-[#EF4353] hover:bg-[#FFE4E6] transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
