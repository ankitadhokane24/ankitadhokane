// src/components/Experience.tsx
const Experience = () => {
  const experiences = [
    {
      year: "Jan 2025 - Jun 2025",
      role: "WordPress Developer Intern",
      company: "Samarth Trust",
      type: "Internship",
      points: [
        "Learned core WordPress development, including theme and plugin customization.",
        "Worked with core technologies such as PHP, HTML, CSS, MySQL, and JavaScript.",
        "Developed custom themes and plugins from scratch.",
        "Assisted in website testing, debugging, performance improvements, and basic SEO optimization."
      ],
    },
    {
      year: "July 2025 - Present",
      role: "Junior WordPress Developer",
      company: "Samarth Trust",
      type: "Full-time",
      points: [
        "Develop and maintain custom WordPress websites in collaboration with the team.",
        "Built dynamic modules including Donation and CSR systems with an integrated admin dashboard.",
        "Implemented third-party API integrations for payment gateways, analytics, and social media platforms.",
        "Optimized website performance, security, and SEO to enhance user experience and search rankings."
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading – consistent with other sections */}
        <div className="text-center mb-12 md:mb-16">
          <p className="
            bg-gradient-to-r from-cyan-400 to-teal-400 
            bg-clip-text text-transparent 
            text-base sm:text-lg uppercase tracking-wider font-semibold mb-3 md:mb-4
          ">
            MY JOURNEY
          </p>
          <h2 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-6xl 
            font-black text-white leading-tight
          ">
            Experience
          </h2>
          <div className="
            w-20 sm:w-24 h-1 
            bg-gradient-to-r from-cyan-500 to-teal-500 
            mx-auto mt-5 sm:mt-6 
            rounded-full 
            shadow-[0_0_16px_rgba(6,182,212,0.4)]
          "></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line – only visible on md+ */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 md:w-1 bg-cyan-900/50 hidden md:block"></div>

          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 lg:gap-10 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Date Badge */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-10 lg:pr-14' : 'md:text-left md:pl-10 lg:pl-14'}`}>
                  <div className="
                    inline-block px-5 sm:px-6 py-2.5 sm:py-3 
                    bg-cyan-900/60 rounded-full 
                    border border-cyan-500/40 
                    font-medium text-base sm:text-lg
                  ">
                    <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                      {exp.year}
                    </span>
                  </div>
                </div>

                {/* Main Card */}
                <div
                  className={`
                    w-full md:w-3/5 
                    bg-slate-800/50 backdrop-blur-md 
                    border border-cyan-900/50 rounded-2xl 
                    p-6 sm:p-7 md:p-8 
                    transition-all duration-300 
                    hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]
                    ${index % 2 === 0 ? 'md:ml-auto md:pr-10 lg:pr-14' : 'md:mr-auto md:pl-10 lg:pl-14'}
                  `}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="
                      text-xs sm:text-sm font-medium 
                      px-3.5 py-1.5 
                      bg-cyan-900/60 rounded-full 
                      text-cyan-200
                    ">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="
                    text-xl sm:text-2xl md:text-2.5xl 
                    font-bold text-white mb-2 leading-tight
                  ">
                    {exp.role}
                  </h3>

                  <p className="
                    text-base sm:text-lg md:text-xl 
                    text-cyan-400 font-medium mb-5
                  ">
                    {exp.company}
                  </p>

                  <ul className="space-y-3 sm:space-y-3.5 text-slate-300 text-base sm:text-lg list-disc pl-5 sm:pl-6 leading-relaxed">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Timeline dot – desktop only */}
                <div className="
                  absolute left-1/2 transform -translate-x-1/2 
                  w-4 h-4 md:w-5 md:h-5 
                  bg-cyan-500 rounded-full 
                  border-2 border-slate-950 
                  shadow-[0_0_12px_rgba(6,182,212,0.7)] 
                  hidden md:block
                "></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;