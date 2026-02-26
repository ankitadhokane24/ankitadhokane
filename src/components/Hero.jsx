// src/components/Hero.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        {/* Badge */}
          <div className="
            inline-block mt-20 mb-8 px-6 py-3 
            bg-gradient-to-r from-cyan-900/30 to-teal-900/20 
            backdrop-blur-xl 
            border border-gradient-to-r from-cyan-500/40 to-teal-500/40 
            rounded-full 
            bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent 
            text-sm md:text-base uppercase tracking-wider font-bold
          ">
            WEB DEVELOPER
          </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black leading-none mb-6 text-white">
          Hi, I'm
          <br />
          <span className="
            bg-gradient-to-r from-cyan-400 to-teal-400 
            bg-clip-text 
            text-transparent 
            block mt-2 md:mt-4 
            transition-all duration-300 
            hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.7)]
          ">
            Ankita Dhokane.
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Building scalable web experiences with WordPress, MERN & modern tools.<br />
          Based in Nashik, Maharashtra, India.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Glassmorphism Explore My Work Button */}
          <a
            href="#projects"
            className="
              inline-block px-10 py-5 
              bg-white/10 backdrop-blur-2xl 
              border border-white/20 
              text-white font-bold text-lg 
              rounded-full 
              transition-all duration-300 
              shadow-lg shadow-black/20 
              hover:shadow-cyan-500/40 
              hover:bg-white/15 
              hover:border-cyan-400/40 
              hover:scale-105 
              hover:text-cyan-100
            "
          >
            Explore My Work
          </a>
          {/* Download Resume Button (unchanged) */}
          <a
            href="https://drive.google.com/file/d/1kW1W7yz3EbVgTS4avSYdAQoSUdh19FQW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            download="Ankita_Dhokane_Resume.pdf"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-105"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-3 text-xl" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;