// src/components/Education.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "RNC ARTS, JDB Commerce & NSC Science College, Nashik",
      year: "2020 – 2023",
      percentage: "78.5%",
      icon: faGraduationCap,
    },
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "K K Wagh Institute of Engineering Education & Research, Nashik",
      year: "2023 – 2025",
      percentage: "81.4%",
      icon: faUserGraduate,
    },
  ];

  return (
    <section id="education" className="py-15 md:py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-lg md:text-xl uppercase tracking-wider font-medium mb-4">
            MY EDUCATION
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Education
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_#06b6d4]"></div>
        </div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {education.map((item) => (
            <div
              key={item.degree}
              className="bg-slate-800/40 backdrop-blur-md border border-cyan-900/50 rounded-2xl p-8 flex items-start gap-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/30"
            >
              {/* Icon Circle */}
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-cyan-900/40 rounded-full border-2 border-cyan-500/60">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-3xl text-cyan-400"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {item.degree}
                </h3>
                <p className="text-cyan-400 font-medium mb-1">{item.institution}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-300">
                  <span>{item.year}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="font-medium text-cyan-300">{item.percentage}</span>
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