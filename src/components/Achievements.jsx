// src/components/Achievements.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faMedal,
  faBookOpenReader,
} from '@fortawesome/free-solid-svg-icons';

const Achievements = () => {
  const achievements = [
    {
      title: "Secured 3rd Rank in MCA First Year",
      desc: "Achieved 3rd position in the Master of Computer Applications (MCA) first-year university examination.",
      year: "2023–2024",
      icon: faAward,
    },
    {
      title: "Secured 2nd Rank in MCA Second Year",
      desc: "Stood 2nd in the MCA second-year university examination with outstanding academic performance.",
      year: "2024–2025",
      icon: faMedal,
    },
    {
      title: "Secured 2nd Rank in Essay Competition",
      desc: "Won 2nd place in a state/national-level essay writing competition on technology and innovation.",
      year: "2024",
      icon: faBookOpenReader,
    },
  ];

  return (
    <section id="achievements" className="py-16 md:py-24 lg:py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading – consistent with other sections */}
        <div className="text-center mb-12 md:mb-16">
          <p className="
            bg-gradient-to-r from-cyan-400 to-teal-400 
            bg-clip-text text-transparent 
            text-base sm:text-lg uppercase tracking-wider font-semibold mb-3 md:mb-4
          ">
            HIGHLIGHTS
          </p>
          <h2 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-6xl 
            font-black text-white leading-tight
          ">
            Achievements
          </h2>
          <div className="
            w-20 sm:w-24 h-1 
            bg-gradient-to-r from-cyan-500 to-teal-500 
            mx-auto mt-5 sm:mt-6 
            rounded-full 
            shadow-[0_0_16px_rgba(6,182,212,0.4)]
          "></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className="
                bg-slate-800/50 backdrop-blur-md 
                border border-cyan-900/50 
                rounded-2xl 
                p-6 sm:p-7 md:p-8 
                transition-all duration-300 
                hover:scale-[1.02] 
                hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]
                flex flex-col items-center text-center
              "
            >
              {/* Icon Circle */}
              <div className="
                w-14 h-14 sm:w-16 sm:h-16 
                flex items-center justify-center 
                bg-cyan-900/40 rounded-full 
                border-2 border-cyan-500/50 
                mb-5 sm:mb-6
              ">
                <FontAwesomeIcon
                  icon={ach.icon}
                  className="text-2xl sm:text-3xl text-cyan-400"
                />
              </div>

              {/* Title */}
              <h3 className="
                text-xl sm:text-2xl md:text-2.5xl 
                font-bold 
                bg-gradient-to-r from-cyan-300 to-teal-300 
                bg-clip-text text-transparent 
                mb-3 leading-tight
              ">
                {ach.title}
              </h3>

              {/* Description */}
              <p className="
                text-base sm:text-lg 
                text-slate-300 
                mb-5 sm:mb-6 
                flex-grow leading-relaxed
              ">
                {ach.desc}
              </p>

              {/* Year Badge */}
              <span className="
                inline-block px-4 sm:px-5 py-1.5 sm:py-2 
                bg-cyan-900/50 rounded-full 
                text-sm sm:text-base 
                font-medium 
                bg-gradient-to-r from-cyan-300 to-teal-300 
                bg-clip-text text-transparent
              ">
                {ach.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;