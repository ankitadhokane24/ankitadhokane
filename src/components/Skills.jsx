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
  faElementor,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import { SiPostman } from 'react-icons/si';

const Skills = () => {
  // ── Skill data (unchanged) ────────────────────────────────────────
  const frontend = [
    { name: 'HTML5',       icon: faHtml5,   color: 'text-orange-500' },
    { name: 'CSS3',        icon: faCss3Alt, color: 'text-blue-400' },
    { name: 'JavaScript',  icon: faJs,      color: 'text-yellow-400' },
    { name: 'React',       icon: faReact,   color: 'text-cyan-400' },
    { name: 'Tailwind CSS', icon: faCss3Alt, color: 'text-teal-400' },
  ];

  const backend = [
    { name: 'PHP',         icon: faPhp,     color: 'text-indigo-400' },
    { name: 'Node.js',     icon: faNodeJs,  color: 'text-green-500' },
    { name: 'Express.js',  icon: faServer,  color: 'text-indigo-500' },
  ];

  const database = [
    { name: 'MongoDB',     icon: faDatabase, color: 'text-emerald-400' },
    { name: 'MySQL',       icon: faDatabase, color: 'text-blue-500' },
  ];

  const cms = [
    { name: 'WordPress',   icon: faWordpress, color: 'text-blue-600' },
    { name: 'Elementor',   icon: faElementor, color: 'text-purple-400' },
    { name: 'Tatsu',       icon: faWordpress, color: 'text-purple-600' },
  ];

  const toolsOthers = [
    { name: 'Git',         icon: faGitAlt,  color: 'text-orange-600' },
    { name: 'Postman',     icon: SiPostman, color: 'text-orange-500' },
  ];

  // ── Reusable Skill Category Card ──────────────────────────────────
  const SkillCategoryCard = ({ title, skills }) => (
    <div className="
      bg-slate-800/60 backdrop-blur-md 
      border border-cyan-900/50 rounded-2xl 
      p-6 sm:p-7 md:p-8 
      transition-all duration-300 
      hover:shadow-[0_0_28px_rgba(6,182,212,0.45)] 
      hover:bg-gradient-to-br hover:from-cyan-950/30 hover:to-teal-950/20
    ">
      <h3 className="
        text-xl sm:text-2xl md:text-2.5xl lg:text-3xl 
        font-bold 
        bg-gradient-to-r from-cyan-400 to-teal-400 
        bg-clip-text text-transparent 
        mb-6 md:mb-7 text-center
      ">
        {title}
      </h3>

      <div className="
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 
        gap-5 sm:gap-6 md:gap-7
      ">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
              flex flex-col items-center text-center 
              group py-2
            "
          >
            {typeof skill.icon === 'function' ? (
              <skill.icon
                className={`
                  text-4xl sm:text-4.5xl md:text-5xl 
                  mb-3 ${skill.color} 
                  transition-transform duration-300 
                  group-hover:scale-110 group-hover:rotate-6
                `}
              />
            ) : (
              <FontAwesomeIcon
                icon={skill.icon}
                className={`
                  text-4xl sm:text-4.5xl md:text-5xl 
                  mb-3 ${skill.color} 
                  transition-transform duration-300 
                  group-hover:scale-110 group-hover:rotate-6
                `}
              />
            )}
            <p className="
              text-sm sm:text-base md:text-lg 
              font-medium text-slate-100 
              mt-1 leading-tight
            ">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Heading – matched with About & Hero */}
        <div className="text-center mb-14 md:mb-16 lg:mb-20">
          <h2 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-6xl 
            font-black text-white leading-tight
          ">
            Skills
          </h2>
          <div className="
            w-20 sm:w-24 h-1 
            bg-gradient-to-r from-cyan-500 to-teal-500 
            mx-auto mt-5 sm:mt-6 
            rounded-full 
            shadow-[0_0_16px_rgba(6,182,212,0.45)]
          "></div>
        </div>

        {/* Skill Categories */}
        <div className="space-y-10 md:space-y-12 lg:space-y-14">
          {/* First row – Frontend + Backend + Database */}
          <div className="grid md:grid-cols-3 gap-7 md:gap-9 lg:gap-10">
            <SkillCategoryCard title="Frontend" skills={frontend} />
            <SkillCategoryCard title="Backend" skills={backend} />
            <SkillCategoryCard title="Database" skills={database} />
          </div>

          {/* Second row – CMS + Tools (centered layout) */}
          <div className="grid md:grid-cols-2 gap-7 md:gap-9 lg:gap-10 max-w-5xl mx-auto">
            <SkillCategoryCard title="CMS & Page Builders" skills={cms} />
            <SkillCategoryCard title="Tools & Others" skills={toolsOthers} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;