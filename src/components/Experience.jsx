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
    <section id="experience" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent text-lg md:text-xl uppercase tracking-wider font-medium mb-4">
            MY JOURNEY
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-900/50 hidden md:block"></div>

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:items-start gap-8 relative ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Date Badge - background kept cyan, only text is gradient */}
                <div className="md:w-1/2 md:text-right md:pr-12 lg:pr-16">
                  <div className="inline-block px-6 py-3 bg-cyan-900/60 rounded-full font-bold border border-cyan-500/40 glow-cyan">
                    <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                      {exp.year}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-3/5 bg-slate-800/50 backdrop-blur-md border border-cyan-900/50 rounded-2xl p-6 md:p-8 glow-cyan transition-all duration-300 hover:shadow-cyan-500/40 ${
                    index % 2 === 0 ? 'md:ml-auto md:pr-12' : 'md:mr-auto md:pl-12'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs md:text-sm font-medium px-3 py-1 bg-cyan-900/50 rounded-full text-cyan-300">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{exp.company}</p>

                  <ul className="space-y-3 text-slate-300 list-disc pl-6 text-base">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-500 rounded-full glow-cyan md:block hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;