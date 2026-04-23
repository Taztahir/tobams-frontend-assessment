import Image from "next/image";

const LightningIcon = () => (
  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Section = ({ title, description, list, image, reverse = false }: { title: string, description: string, list: string[], image: string, reverse?: boolean }) => (
  <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-20 mb-24 last:mb-0`}>
    {/* Mobile Heading */}
    <h2 className="lg:hidden text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-nunito text-center">
      {title}
    </h2>

    {/* Image Column */}
    <div className="w-full lg:w-1/2 order-1 lg:order-none">
      <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Content Column */}
    <div className="flex-1 order-2 lg:order-none">
      <h2 className="hidden lg:block text-[40px] font-bold text-[#1A1A1A] mb-6 font-nunito leading-tight">
        {title}
      </h2>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl text-center lg:text-left">
        {description}
      </p>
      <ul className="space-y-4 max-w-lg mx-auto lg:mx-0">
        {list.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <LightningIcon />
            <span className="text-gray-800 text-sm sm:text-base font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function TrainingServices() {
  return (
    <section id="corporate-training" className="py-24 bg-white">
      <div className="mx-6 sm:mx-12 lg:mx-[64px]">
        {/* Corporate Trainings */}
        <Section 
          title="Corporate Trainings"
          description="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
          list={[
            "Leadership Training",
            "Strategic Planning and Implementation",
            "Project Management",
            "Sustainability Training",
            "Customised Training"
          ]}
          image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
        />

        {/* Personalised Individual Training */}
        <Section 
          title="Personalised Individual Training"
          description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals."
          list={[
            "Leadership Development",
            "Soft Skills Development",
            "Industry Specific Knowledge",
            "Technical Skills Enhancement",
            "Time Management and Productivity",
            "Career Development"
          ]}
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
          reverse
        />

        {/* Capacity Development */}
        <Section 
          title="Capacity Development"
          description="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:"
          list={[
            "Tailored Training Programs",
            "Expert-Led Workshops",
            "Personalized Mentorship",
            "Technical Skills Enhancement",
            "Collaborative Learning Environment",
            "Ongoing Support and Resources"
          ]}
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
        />
      </div>
    </section>
  );
}
