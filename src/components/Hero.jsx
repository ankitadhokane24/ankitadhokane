const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        {/* Badge */}
        <div className="inline-block mt-20 mb-8 px-6 py-3 bg-cyan-600/20 backdrop-blur-md border border-cyan-500/30 rounded-full text-cyan-400 text-sm md:text-base uppercase tracking-wider font-medium">
          WEB DEVELOPER
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black leading-none mb-6 text-white">
          Hi, I'm
          <br />
          <span className="text-cyan-400 block mt-2 md:mt-4">Ankita Dhokane.</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Building scalable web experiences with MERN, WordPress & modern tools.<br />
          Based in Nashik, Maharashtra, India.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#projects"
            className="inline-block px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
          >
            Explore My Work
          </a>
          <a
            href="#about"
            className="inline-block px-10 py-5 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Fixed Scroll Indicator – pinned to bottom of viewport
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-cyan-400 pointer-events-none">
        <p className="text-sm uppercase tracking-widest mb-2 opacity-80">SCROLL</p>
        <div className="animate-bounce">
          <i className="fas fa-chevron-down text-3xl"></i>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;