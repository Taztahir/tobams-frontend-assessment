export default function TrainingConsultantSection() {
  return (
    <section
      id="training-consultant"
      className="py-20 bg-gray-50"
      aria-labelledby="consultant-heading"
    >
      <div className="mx-6 sm:mx-12 lg:mx-[64px]">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            Consultant Development
          </p>
          <h2
            id="consultant-heading"
            className="text-3xl sm:text-4xl font-extrabold text-brand-purple leading-tight"
          >
            Training The Consultant
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            <p className="text-gray-700 leading-relaxed">
              Our &quot;Training The Consultant&quot; programme is designed for aspiring
              and practising consultants who want to sharpen their craft and
              build a thriving consulting practice. We provide the frameworks,
              tools, and mindsets needed to deliver exceptional client value.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you&apos;re transitioning from a corporate role or looking to
              formalise your independent practice, this programme equips you
              with a structured approach to problem-solving, proposal writing,
              and stakeholder management.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Participants gain access to a community of consultants, mentorship
              from senior practitioners, and live practice opportunities with
              real business challenges.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5">
            <p className="text-gray-700 leading-relaxed">
              The curriculum covers core consulting competencies including
              business diagnosis, strategy formulation, client communication,
              and change management. Our facilitators are experienced
              consultants who have worked across multiple industries and
              geographies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By the end of the programme, you will have a personal consulting
              toolkit, a polished portfolio of case studies, and the confidence
              to win and deliver impactful projects for clients across Africa
              and beyond.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Join a growing cohort of consultants who are redefining what
              professional services look like on the continent and positioning
              themselves at the forefront of Africa&apos;s consulting industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
