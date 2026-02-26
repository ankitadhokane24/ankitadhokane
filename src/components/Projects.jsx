// src/components/Projects.tsx
import { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('wordpress');

  const wpProjects = [
    {
      title: "SmritiVerse",
      desc: "Memorial platform with custom theme, photo galleries, tribute sections, family tree, and easy content management for preserving memories.",
      tech: ["WordPress", "PHP", "CSS3", "Elementor"],
      image: "../src/assets/images/smritiverse.png",
      link: "https://smritiverse.org/",
    },
    {
      title: "3PDTechnologies",
      desc: "IT services website showcasing software development, cloud solutions, cybersecurity, testimonials, and modern responsive layout.",
      tech: ["WordPress", "Tatsu", "PHP", "JS"],
      image: "../src/assets/images/3pdtech.png",
      link: "https://3pdtech.digital/",
    },
    {
      title: "I am Samarth",
      desc: "Motivational platform with blogs, success stories, coaching content, video embeds, and interactive community features.",
      tech: ["WordPress", "Elementor", "PHP", "JS"],
      image: "../src/assets/images/iamsamarth.png",
      link: "https://iamsamarth.com/",
    },
    {
      title: "Samarth CSR",
      desc: "CSR initiative site highlighting education, healthcare, environment programs, impact reports, donation options, and galleries.",
      tech: ["WordPress", "Elementor", "PHP", "JS", "Bootstrap"],
      image: "../src/assets/images/Csr.png",
      link: "https://samarthtrust.in/csr/",
    },
  ];

  const mernProjects = [
    {
      title: "ElectroTrack – Inventory & HR Management System",
      desc: "Ongoing in-progress project for electrical goods inventory tracking, employee attendance, salary calculation, reports, and admin dashboard using MERN stack.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "../src/assets/images/Omelectricals.png",
      link: "#",
      inProgress: true, // ← flag for badge
    },
  ];

  const externalProjects = [
    {
      title: "Singh Properties",
      desc: "Real estate portal with property listings, advanced search, photo galleries, virtual tours, inquiry forms, and client testimonials.",
      tech: ["WordPress", "PHP", "JS"],
      image: "../src/assets/images/singhproperties.png",
      link: "https://singhpropertiespune.in/",
    },
   {
    title: "Silver Lotus School",
    desc: "Basic static school website showcasing institution details, facilities, infrastructure, academic programs, admission process, photo gallery, and contact information with a clean and responsive design.",
    tech: ["WordPress", "PHP", "JS"],
    image: "../src/assets/images/SilverLotusSchool.png",
    link: "https://silverlotusschool.com/",
  },
  ];

  const ProjectCard = ({ title, desc, tech, image, link, inProgress = false }) => (
    <div className="bg-slate-800/70 rounded-2xl overflow-hidden border border-cyan-900/50 glow-cyan-hover transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group flex flex-col relative">
      {/* In Progress Badge (only for ongoing projects) */}
      {inProgress && (
        <div className="absolute top-4 right-4 z-10 px-4 py-1 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-xs font-medium rounded-full shadow-md shadow-cyan-500/40">
          In Progress
        </div>
      )}

      {/* Image */}
      <div className="h-48 md:h-56 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h4 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          {title}
        </h4>
        <p className="text-slate-300 mb-6 text-base flex-grow">{desc}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-gradient-to-r from-cyan-900/50 to-teal-900/50 rounded-full text-xs text-cyan-300 font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Live Demo Button */}
        {link && link !== "#" && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-medium text-sm md:text-base py-3 px-6 rounded-lg text-center transition-all duration-300 shadow-md shadow-cyan-500/30 hover:shadow-cyan-500/50"
          >
            View Live Demo →
          </a>
        )}
      </div>
    </div>
  );

  const getActiveProjects = () => {
    switch (activeTab) {
      case 'wordpress':
        return wpProjects;
      case 'mern':
        return mernProjects;
      case 'external':
        return externalProjects;
      default:
        return wpProjects;
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-800/60 backdrop-blur-md rounded-full border border-cyan-900/50 p-1.5">
            <button
              onClick={() => setActiveTab('wordpress')}
              className={`px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === 'wordpress'
                  ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-600/30 hover:to-teal-600/30 hover:text-white'
              }`}
            >
              WordPress
            </button>
            <button
              onClick={() => setActiveTab('mern')}
              className={`px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === 'mern'
                  ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-600/30 hover:to-teal-600/30 hover:text-white'
              }`}
            >
              MERN
            </button>
            <button
              onClick={() => setActiveTab('external')}
              className={`px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === 'external'
                  ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-600/30 hover:to-teal-600/30 hover:text-white'
              }`}
            >
              External / Client
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {getActiveProjects().map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Empty state */}
        {getActiveProjects().length === 0 && (
          <p className="text-center text-slate-400 text-xl mt-12">
            More projects coming soon...
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;