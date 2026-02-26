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
    <section id="achievements" className="py-24 md:py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent text-lg md:text-xl uppercase tracking-wider font-medium mb-4">
            HIGHLIGHTS
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className="
                bg-slate-800/40 backdrop-blur-md 
                border border-cyan-900/50 
                rounded-2xl p-8 
                transition-all duration-300 
                hover:scale-[1.02] 
                hover:shadow-cyan-500/40 
                glow-cyan 
                flex flex-col items-center text-center
              "
            >
              {/* Icon - solid color, no gradient clipping */}
              <div className="w-16 h-16 flex items-center justify-center bg-cyan-900/40 rounded-full border-2 border-cyan-500/60 mb-6">
                <FontAwesomeIcon
                  icon={ach.icon}
                  className="text-3xl text-cyan-400"
                />
              </div>

              {/* Title - gradient text */}
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-2">
                {ach.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-base mb-3 flex-grow">
                {ach.desc}
              </p>

              {/* Year badge - gradient text only */}
              <span className="inline-block px-4 py-1 bg-cyan-900/50 rounded-full text-sm bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent font-medium">
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