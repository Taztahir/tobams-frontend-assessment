import Image from "next/image";
import ManagementDevelopmentImage from "../public/ManagementDevelopmentImage.jpg";

const benefits = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

const LightningIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default function ManagementDevelopmentSection() {
  return (
    <section id="management-development" className="py-24 bg-white">
      <div className="mx-6 sm:mx-12 lg:mx-[64px]">
        {/* Main Dark Container */}
        <div className="bg-[#1A0713] rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Column: Image */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={ManagementDevelopmentImage}
                alt="Three professionals looking at a tablet"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-nunito leading-tight">
              Management Development<br />Program
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-white/80 text-base leading-relaxed">
                Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive.
              </p>
              <p className="text-white/80 text-base leading-relaxed">
                Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
              </p>
            </div>

            {/* Benefits List */}
            <ul className="space-y-4" role="list">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 bg-[#8F6182]/60 backdrop-blur-sm p-4 rounded-xl border border-white/5 transition-transform hover:translate-x-2"
                >
                  <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center">
                    <LightningIcon />
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
