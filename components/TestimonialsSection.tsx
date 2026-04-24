"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import TestimonialAvatar1 from '../public/Testimonial1.png';
import TestimonialAvatar2 from '../public/Testimonial2.png';
import TestimonialAvatar3 from '../public/Testimonial3.png';

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    content: (
      <>
        Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!
      </>
    ),
    avatar: TestimonialAvatar2,
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    content: (
      <>
        Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!
      </>
    ),
    avatar: TestimonialAvatar3,
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    content: (
      <>
        Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.
      </>
    ),
    avatar: TestimonialAvatar1,
  },
  {
    name: "Sarah Jenkins",
    role: "CEO, TechInnovate",
    content: (
      <>
        The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.
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

  const maxIndex = testimonials.length - 1;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.querySelector('div')?.offsetWidth || 0;
    const gap = 32; // gap-8
    container.scrollTo({
      left: index * (itemWidth + gap),
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  const next = () => {
    const nextIndex = activeIndex >= maxIndex ? 0 : activeIndex + 1;
    scrollToIndex(nextIndex);
  };

  const prev = () => {
    const prevIndex = activeIndex <= 0 ? maxIndex : activeIndex - 1;
    scrollToIndex(prevIndex);
  };

  return (
    <section id="testimonials" className="py-[64px] bg-[#F9F9F9] overflow-hidden">
      <div className="mx-6 sm:mx-12 lg:mx-[64px]">
        <h2 className="text-[20px] md:text-[40px] font-bold text-center mb-[40px] font-nunito text-[#1A1A1A]">Testimonials</h2>

        <div className="relative">
          {/* Slider Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 no-scrollbar scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white py-[32px] px-[24px] rounded-[16px] border-l-2 border-[#EF4353] shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative transition-all hover:shadow-lg flex-shrink-0 snap-center w-[85%] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)]"
              >
                {/* Header: Avatar + Info */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] text-[14px] md:text-lg">{t.name}</h3>
                    <p className="text-[#696969] text-[12px] md:text-[14px]">{t.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="text-[#333333] text-[14px] md:text-[18px] leading-relaxed italic">
                  {t.content}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center md:justify-end gap-4 mt-8 px-4">
            <button
              onClick={prev}
              className="w-[32px] h-[32px] rounded-[8px] bg-[#F043541A] flex items-center justify-center text-[#EF4353] hover:bg-[#EF4353] hover:text-white transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-[32px] h-[32px] rounded-[8px] bg-[#F043541A] flex items-center justify-center text-[#EF4353] hover:bg-[#EF4353] hover:text-white transition-all shadow-sm"
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
