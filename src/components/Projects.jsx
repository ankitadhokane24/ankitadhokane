// src/components/Projects.tsx
import { useState } from 'react';
import smritiverse from '../assets/images/smritiverse.png';
import pdtech from '../assets/images/3pdtech.png';
import iamsamarth from '../assets/images/iamsamarth.png';
import samarthcsr from '../assets/images/Csr.png';
import omelectricals from '../assets/images/Omelectricals.png';
import singhproperties from '../assets/images/singhproperties.png';
import silverlotusschool from '../assets/images/SilverLotusSchool.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('wordpress');

  const wpProjects = [
    {
      title: "SmritiVerse",
      desc: "Memorial platform with custom theme, photo galleries, tribute sections, family tree, and easy content management for preserving memories.",
      tech: ["WordPress", "PHP", "CSS3", "Elementor"],
      image: smritiverse,
      link: "https://smritiverse.org/",
    },
    {
      title: "3PDTechnologies",
      desc: "IT services website showcasing software development, cloud solutions, cybersecurity, testimonials, and modern responsive layout.",
      tech: ["WordPress", "Tatsu", "PHP", "JS"],
      image: "pdtech",
      link: "https://3pdtech.digital/",
    },
    {
      title: "I am Samarth",
      desc: "Motivational platform with blogs, success stories, coaching content, video embeds, and interactive community features.",
      tech: ["WordPress", "Elementor", "PHP", "JS"],
      image: "iamsamarth",
      link: "https://iamsamarth.com/",
    },
    {
      title: "Samarth CSR",
      desc: "CSR initiative site highlighting education, healthcare, environment programs, impact reports, donation options, and galleries.",
      tech: ["WordPress", "Elementor", "PHP", "JS", "Bootstrap"],
      image: "samarthcsr",
      link: "https://samarthtrust.in/csr/",
    },
  ];

  const mernProjects = [
    {
      title: "ElectroTrack – Inventory & HR Management System",
      desc: "Ongoing in-progress project for electrical goods inventory tracking, employee attendance, salary calculation, reports, and admin dashboard using MERN stack.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "omelectricals",
      link: "#",
      inProgress: true,
    },
  ];

  const externalProjects = [
    {
      title: "Singh Properties",
      desc: "Real estate portal with property listings, advanced search, photo galleries, virtual tours, inquiry forms, and client testimonials.",
      tech: ["WordPress", "PHP", "JS"],
      image: "singhproperties",
      link: "https://singhpropertiespune.in/",
    },
    {
      title: "Silver Lotus School",
      desc: "Basic static school website showcasing institution details, facilities, infrastructure, academic programs, admission process, photo gallery, and contact information with a clean and responsive design.",
      tech: ["WordPress", "PHP", "JS"],
      image: "silverlotusschool",
      link: "https://silverlotusschool.com/",
    },
  ];

  const ProjectCard = ({ title, desc, tech, image, link, inProgress = false }) => (
    <div className="
      bg-slate-800/60 backdrop-blur-md 
      border border-cyan-900/50 rounded-2xl 
      overflow-hidden transition-all duration-300 
      hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]
      group flex flex-col relative
    ">
      {/* In Progress Badge */}
      {inProgress && (
        <div className="
          absolute top-4 right-4 z-10 
          px-4 py-1.5 
          bg-gradient-to-r from-cyan-600 to-teal-600 
          text-white text-xs sm:text-sm font-medium 
          rounded-full shadow-md shadow-cyan-500/40
        ">
          In Progress
        </div>
      )}

      {/* Image */}
      <div className="h-48 sm:h-52 md:h-56 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 md:p-8 flex flex-col flex-grow">
        <h4 className="
          text-xl sm:text-2xl md:text-2.5xl 
          font-bold mb-3 
          bg-gradient-to-r from-cyan-400 to-teal-400 
          bg-clip-text text-transparent 
          leading-tight
        ">
          {title}
        </h4>

        <p className="
          text-base sm:text-lg 
          text-slate-300 mb-6 
          flex-grow leading-relaxed
        ">
          {desc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="
                px-3.5 py-1.5 
                bg-gradient-to-r from-cyan-900/50 to-teal-900/50 
                rounded-full 
                text-xs sm:text-sm 
                text-cyan-200 font-medium
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Button */}
        {link && link !== "#" && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-auto inline-flex items-center justify-center 
              bg-gradient-to-r from-cyan-600 to-teal-600 
              hover:from-cyan-500 hover:to-teal-500 
              text-white font-medium 
              text-sm sm:text-base 
              py-3 px-6 rounded-lg 
              transition-all duration-300 
              shadow-md shadow-cyan-500/30 hover:shadow-cyan-500/50
            "
          >
            View Live Demo →
          </a>
        )}
      </div>
    </div>
  );

  const getActiveProjects = () => {
    switch (activeTab) {
      case 'wordpress': return wpProjects;
      case 'mern':      return mernProjects;
      case 'external':  return externalProjects;
      default:          return wpProjects;
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading – consistent with other sections */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-6xl 
            font-black text-white leading-tight
          ">
            Projects
          </h2>
          <div className="
            w-20 sm:w-24 h-1 
            bg-gradient-to-r from-cyan-500 to-teal-500 
            mx-auto mt-5 sm:mt-6 
            rounded-full 
            shadow-[0_0_16px_rgba(6,182,212,0.4)]
          "></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="
            inline-flex bg-slate-800/60 backdrop-blur-md 
            rounded-full border border-cyan-900/50 p-1.5 sm:p-2
          ">
            <button
              onClick={() => setActiveTab('wordpress')}
              className={`
                px-4 sm:px-6 py-2.5 sm:py-3 rounded-full 
                text-sm sm:text-base font-medium transition-all duration-300
                ${activeTab === 'wordpress'
                  ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/40'
                  : 'text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-700/40 hover:to-teal-700/30'
                }
              `}
            >
              WordPress
            </button>

            <button
              onClick={() => setActiveTab('mern')}
              className={`
                px-4 sm:px-6 py-2.5 sm:py-3 rounded-full 
                text-sm sm:text-base font-medium transition-all duration-300
                ${activeTab === 'mern'
                  ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/40'
                  : 'text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-700/40 hover:to-teal-700/30'
                }
              `}
            >
              MERN
            </button>

            <button
              onClick={() => setActiveTab('external')}
              className={`
                px-4 sm:px-6 py-2.5 sm:py-3 rounded-full 
                text-sm sm:text-base font-medium transition-all duration-300
                ${activeTab === 'external'
                  ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/40'
                  : 'text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-700/40 hover:to-teal-700/30'
                }
              `}
            >
              Client Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-9 lg:gap-10">
          {getActiveProjects().map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Empty state */}
        {getActiveProjects().length === 0 && (
          <p className="text-center text-slate-400 text-lg sm:text-xl mt-12">
            More projects coming soon...
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;