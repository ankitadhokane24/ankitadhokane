// src/components/Skills.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faPhp,
  faReact,
  faNodeJs,
  faWordpress,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const languages = [
    { name: 'JavaScript', icon: faJs, color: 'text-yellow-400' },
    { name: 'HTML5', icon: faHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: faCss3Alt, color: 'text-blue-400' },
    { name: 'PHP', icon: faPhp, color: 'text-indigo-400' },
  ];

  const tools = [
    { name: 'React', icon: faReact, color: 'text-cyan-400' },
    { name: 'Node.js', icon: faNodeJs, color: 'text-green-500' },
    { name: 'MongoDB', icon: faDatabase, color: 'text-emerald-400' },
    { name: 'WordPress', icon: faWordpress, color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: faCss3Alt, color: 'text-teal-400' },
    { name: 'Git', icon: faGitAlt, color: 'text-orange-600' },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-16 relative text-white">
          Skills
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-cyan-500 rounded-full shadow-[0_0_20px_#06b6d4]"></span>
        </h2>

        {/* Top Carousel: Left → Right (Languages) */}
        <div className="relative mb-10 md:mb-16">
          <div className="overflow-hidden mask-fade-x">
            <div
              className="flex animate-marquee gap-5 md:gap-6 py-4 will-change-transform"
              style={{ animationDuration: '35s' }}
            >
              {/* Duplicate for seamless loop */}
              {[...languages, ...languages].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 w-40 sm:w-44 md:w-52 bg-slate-800/70 rounded-xl border border-cyan-900/50 p-5 md:p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className={`text-4xl md:text-5xl mb-3 ${skill.color}`}
                  />
                  <p className="text-sm md:text-base font-medium mt-1">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Carousel: Right → Left (Tools) */}
        <div className="relative">
          <div className="overflow-hidden mask-fade-x">
            <div
              className="flex animate-marquee-reverse gap-5 md:gap-6 py-4 will-change-transform"
              style={{ animationDuration: '40s' }}
            >
              {/* Duplicate for seamless loop */}
              {[...tools, ...tools].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 w-40 sm:w-44 md:w-52 bg-slate-800/70 rounded-xl border border-cyan-900/50 p-5 md:p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className={`text-4xl md:text-5xl mb-3 ${skill.color}`}
                  />
                  <p className="text-sm md:text-base font-medium mt-1">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;