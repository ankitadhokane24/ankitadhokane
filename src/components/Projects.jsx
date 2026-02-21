// src/components/Projects.tsx
import { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('wordpress');

  const wpProjects = [
    {
      title: "SmritiVerse",
      desc: "Modern corporate website with custom theme, SEO optimization, and advanced contact forms.",
      tech: ["WordPress", "PHP", "CSS3", "Elementor"],
      image: "../src/assets/images/smritiverse.png",
      link: "https://smritiverse.org/",
    },
    {
      title: "3PDTechnologies",
      desc: "Full-featured WooCommerce store with payment integration and responsive design.",
      tech: ["WordPress", "Tatsu", "PHP", "JS"],
      image: "../src/assets/images/3pdtech.png",
      link: "https://3pdtech.digital/",
    },
    {
      title: "I am Samarth",
      desc: "Full-featured WooCommerce store with payment integration and responsive design.",
      tech: ["WordPress", "Elementor", "PHP", "JS"],
      image: "../src/assets/images/iamsamarth.png",
      link: "https://iamsamarth.com/",
    },
  ];

  const mernProjects = [
    {
      title: "Real-Time Chat Application",
      desc: "WebSocket-powered chat app with authentication, group chats, and message history.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "/images/projects/chat-app.jpg",
      link: "https://chat-app-demo.yourdomain.com", // ← optional for MERN too
    },
    {
      title: "Task Management Dashboard",
      desc: "Kanban-style project management tool with drag-and-drop and real-time updates.",
      tech: ["React", "Express", "MongoDB", "Tailwind"],
      image: "/images/projects/task-dashboard.jpg",
      link: "https://task-dashboard-demo.yourdomain.com", // ← optional
    },
    // Add more MERN projects
  ];

  const ProjectCard = ({ title, desc, tech, image, link }) => (
    <div className="bg-slate-800/70 rounded-2xl overflow-hidden border border-cyan-900/50 glow-cyan-hover transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40 group flex flex-col">
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
        <h4 className="text-2xl font-bold mb-3 text-white">{title}</h4>
        <p className="text-slate-300 mb-6 text-base flex-grow">{desc}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-cyan-900/50 rounded-full text-xs text-cyan-300 font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Live Demo Button (only shown if link exists) */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-sm md:text-base py-3 px-6 rounded-lg text-center transition-all duration-300 shadow-md shadow-cyan-500/30 hover:shadow-cyan-500/50"
          >
            View Live Demo →
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Projects
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_#06b6d4]"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-800/60 backdrop-blur-md rounded-full border border-cyan-900/50 p-1.5">
            <button
              onClick={() => setActiveTab('wordpress')}
              className={`px-6 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 ${
                activeTab === 'wordpress'
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-cyan-400 hover:text-cyan-300'
              }`}
            >
              WordPress Projects
            </button>
            <button
              onClick={() => setActiveTab('mern')}
              className={`px-6 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 ${
                activeTab === 'mern'
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-cyan-400 hover:text-cyan-300'
              }`}
            >
              MERN Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {(activeTab === 'wordpress' ? wpProjects : mernProjects).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Empty state */}
        {(activeTab === 'wordpress' ? wpProjects : mernProjects).length === 0 && (
          <p className="text-center text-slate-400 text-xl mt-12">
            More projects coming soon...
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;