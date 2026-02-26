// src/components/Education.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUserGraduate, faSchool } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "K K Wagh Institute of Engineering Education & Research, Nashik",
      year: "2023 – 2025",
      percentage: "80%",
      icon: faUserGraduate,
    },
    {
      degree: "Bachelor of Computer Science (BSc Computer Science)",
      institution: "RNC ARTS, JDB Commerce & NSC Science College, Nashik",
      year: "2020 – 2023",
      percentage: "87.05%",
      icon: faGraduationCap,
    },
    {
      degree: "Higher Secondary Certificate (HSC - Science)",
      institution: "RNC Arts, JDB Commerce & NSC Science College, Nashik",
      year: "2018 – 2020",
      percentage: "73%",
      icon: faSchool,
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "JDC Bytco English Medium High School, Nashik",
      year: "2017 – 2018",
      percentage: "87.5%",
      icon: faSchool,
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 lg:py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading – matched with Hero/About/Skills */}
        <div className="text-center mb-12 md:mb-16">
          <p className="
            bg-gradient-to-r from-cyan-400 to-teal-400 
            bg-clip-text text-transparent 
            text-base sm:text-lg uppercase tracking-wider font-semibold mb-3 md:mb-4
          ">
            MY EDUCATION
          </p>
          <h2 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-6xl 
            font-black text-white leading-tight
          ">
            Education
          </h2>
          <div className="
            w-20 sm:w-24 h-1 
            bg-gradient-to-r from-cyan-500 to-teal-500 
            mx-auto mt-5 sm:mt-6 
            rounded-full 
            shadow-[0_0_16px_rgba(6,182,212,0.4)]
          "></div>
        </div>

        {/* Education items */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {education.map((item) => (
            <div
              key={item.degree}
              className="
                bg-slate-800/40 backdrop-blur-md 
                border border-cyan-900/50 rounded-2xl 
                p-6 sm:p-7 md:p-8 
                flex items-start gap-5 sm:gap-6 
                transition-all duration-300 
                hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]
              "
            >
              {/* Icon Circle */}
              <div className="
                flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                flex items-center justify-center 
                bg-gradient-to-br from-cyan-900/40 to-teal-900/30 
                rounded-full border-2 border-cyan-500/50
              ">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-2xl sm:text-2.5xl md:text-3xl text-cyan-400"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-1.5 sm:space-y-2">
                <h3 className="
                  text-lg sm:text-xl md:text-2xl 
                  font-bold 
                  bg-gradient-to-r from-cyan-300 to-teal-300 
                  bg-clip-text text-transparent 
                  leading-tight
                ">
                  {item.degree}
                </h3>

                <p className="
                  text-base sm:text-lg 
                  text-slate-300 font-medium
                ">
                  {item.institution}
                </p>

                <div className="
                  flex flex-wrap items-center gap-2.5 sm:gap-4 
                  text-slate-400 text-sm sm:text-base
                ">
                  <span>{item.year}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="
                    font-semibold 
                    bg-gradient-to-r from-cyan-300 to-teal-300 
                    bg-clip-text text-transparent
                  ">
                    {item.percentage}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;