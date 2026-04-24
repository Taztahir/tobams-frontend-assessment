import Image from "next/image";
import Link from "next/link";
import AcademySectionImage from '../public/AcademySectionImage.jpg';

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export default function AcademySection() {
  return (
    <section
      id="what-we-do"
      className="py-20 bg-[#F3F0F4]"
      aria-labelledby="academy-heading"
    >
      <div className="mx-6 sm:mx-12 lg:mx-[64px] min-h-[664px]">
        {/* Mobile Heading */}
        <h2
          id="academy-heading"
          className="lg:hidden text-3xl sm:text-4xl font-extrabold text-[#661E4E] leading-tight mb-8 font-nunito text-center"
        >
          Learning Management System
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 ">
          {/* Circular Image */}
          <div className="flex-shrink-0 order-1 lg:order-1 mx-auto">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-xl">
              <Image
                src={AcademySectionImage}
                alt="Two professionals collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-2">
            <h2
              className="hidden lg:block text-[40px] font-extrabold text-[#661E4E] leading-tight mb-8 font-nunito"
            >
              Learning Management System
            </h2>

            {/* Description Box */}
            <div className="bg-[#E6DFE5] p-6 sm:p-10 rounded-2xl mb-8">
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-8">
                TG Academy is a hub of knowledge and skill-building resources designed to
                empower tech talents on their learning journey. From technical courses
                covering the latest programming languages and development frameworks to
                soft skills training in leadership, effective communication and project
                management, TG Academy offers a wide range of courses to cater to diverse
                learning needs. With accessible and interactive learning materials, individuals
                can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
              </p>

              <h3 className="text-[#661E4E] font-bold text-base mb-4">
                Some of our courses include:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 text-xs sm:text-sm font-medium text-gray-800" role="list">
                {courses.map((course) => (
                  <li key={course} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" aria-hidden="true" />
                    {course}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#661E4E] text-white font-bold text-sm hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-[#661E4E] focus:ring-offset-2"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 7l-10 10M17 7H7M17 7v10" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
