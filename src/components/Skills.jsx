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
import { faDatabase, faServer, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { SiPostman } from 'react-icons/si';

const Skills = () => {
  // Frontend
  const frontend = [
    { name: 'HTML5',       icon: faHtml5,   color: 'text-orange-500' },
    { name: 'CSS3',        icon: faCss3Alt, color: 'text-blue-400' },
    { name: 'JavaScript',  icon: faJs,      color: 'text-yellow-400' },
    { name: 'React',       icon: faReact,   color: 'text-cyan-400' },
    { name: 'Tailwind CSS', icon: faCss3Alt, color: 'text-teal-400' },
  ];

  // Backend
  const backend = [
    { name: 'PHP',         icon: faPhp,     color: 'text-indigo-400' },
    { name: 'Node.js',     icon: faNodeJs,  color: 'text-green-500' },
    { name: 'Express.js',  icon: faServer,  color: 'text-indigo-500' },
  ];

  // Database (MongoDB + MySQL)
  const database = [
    { name: 'MongoDB',     icon: faDatabase, color: 'text-emerald-400' },
    { name: 'MySQL',       icon: faDatabase, color: 'text-blue-500' },
  ];

  // CMS & Page Builders
  const cms = [
    { name: 'WordPress',   icon: faWordpress, color: 'text-blue-600' },
    { name: 'Elementor',   icon: faElementor, color: 'text-purple-400' },
    { name: 'Tatsu',       icon: faWordpress, color: 'text-purple-600' },
  ];

  // Tools & Others
  const toolsOthers = [
    { name: 'Git',         icon: faGitAlt,  color: 'text-orange-600' },
    { name: 'Postman',     icon: SiPostman, color: 'text-orange-500' },
  ];

  const SkillCategoryCard = ({ title, skills }) => (
    <div className="
      bg-slate-800/70 backdrop-blur-md rounded-2xl border border-cyan-900/50 
      p-6 md:p-8 transition-all duration-300 
      hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] 
      hover:bg-gradient-to-br hover:from-cyan-900/30 hover:to-teal-900/20
    ">
      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-6 text-center">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-center group"
          >
            {typeof skill.icon === 'function' ? (
              <skill.icon className={`text-4xl md:text-5xl mb-3 ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
            ) : (
              <FontAwesomeIcon
                icon={skill.icon}
                className={`text-4xl md:text-5xl mb-3 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
              />
            )}
            <p className="text-sm md:text-base font-medium text-white mt-1">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-16 text-white">
          Skills
          <span className="block w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
        </h2>

        {/* First row – 3 cards: Frontend, Backend, Database */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          <SkillCategoryCard title="Frontend" skills={frontend} />
          <SkillCategoryCard title="Backend" skills={backend} />
          <SkillCategoryCard title="Database" skills={database} />
        </div>

        {/* Second row – 2 cards centered */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 justify-center max-w-4xl mx-auto items-center">
          <SkillCategoryCard title="CMS & Page Builders" skills={cms} />
          <SkillCategoryCard title="Tools & Others" skills={toolsOthers} />
        </div>
      </div>
    </section>
  );
};

export default Skills;