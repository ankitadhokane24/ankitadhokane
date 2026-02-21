import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faPeopleGroup, faArrowsRotate, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const { dark } = useContext(ThemeContext) ?? { dark: true };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-slate-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/10 to-slate-950 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-cyan-400 text-lg md:text-xl uppercase tracking-wider font-medium mb-4">
            GET TO KNOW ME
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full glow-cyan"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Bio + Stats */}
          <div className="space-y-10 order-2 lg:order-1">
            {/* Bio Card */}
            <div className="bg-slate-800/40 backdrop-blur-md border border-cyan-900/50 rounded-2xl p-8 md:p-10 glow-cyan">
              <h3 className="text-cyan-400 text-xl font-bold uppercase tracking-wider mb-4">BIO</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                I am a Web Developer based in Nashik, India, with strong experience in WordPress development and hands-on knowledge of the MERN stack (MongoDB, Express.js, React.js, Node.js). I build responsive and user-friendly web applications.
                I have developed custom WordPress plugins, dashboards, authentication systems, and payment integrations. I have also completed several academic and personal MERN projects involving REST APIs, CRUD operations, and dynamic user interfaces.
                I focus on writing clean code, improving performance, and continuously learning new technologies.
              </p>
               {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 text-center mt-10 divide-y md:divide-y-0 md:divide-x divide-cyan-500/40">
                  <div className="py-6">
                    <div className="text-4xl md:text-5xl font-black text-cyan-400">10+</div>
                    <p className="text-sm md:text-base text-slate-400 mt-2">PROJECTS</p>
                  </div>
                  <div className="py-6">
                    <div className="text-4xl md:text-5xl font-black text-cyan-400">1+</div>
                    <p className="text-sm md:text-base text-slate-400 mt-2">YEARS EXP</p>
                  </div>
                  <div className="py-6">
                    <div className="text-4xl md:text-5xl font-black text-cyan-400">5+</div>
                    <p className="text-sm md:text-base text-slate-400 mt-2">CERTIFICATIONS</p>
                  </div>
                </div>
            </div>
          </div>

          {/* Right: Professional Photo */}
          <div className="relative mx-auto max-w-[380px] lg:max-w-none order-1 lg:order-2">
            {/* Outer gradient frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 rounded-3xl -rotate-2 scale-[1.02] blur-sm opacity-70"></div>

            {/* Photo container */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-slate-800/80 shadow-2xl shadow-cyan-900/30 transition-all duration-500 hover:shadow-cyan-500/40 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent pointer-events-none"></div>
              <img
                src="../src/assets/images/MyImage.jpg" 
                alt="Ankita Dhokane - Web Developer"
                className="w-full h-150 object-cover rounded-3xl"
                loading="lazy"
              />
            </div>

            {/* Badge below photo */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-cyan-600/80 backdrop-blur-md rounded-full text-white text-sm font-medium shadow-lg">
              Web Developer
            </div>
          </div>
        </div>

        {/* Strengths Section - Fixed Icons */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 md:mt-15">
          <div className="bg-slate-800/40 backdrop-blur-md border border-cyan-900/50 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-lg">
            <FontAwesomeIcon icon={faBrain} className="text-4xl text-cyan-400 mb-4" />
            <p className="font-bold text-lg text-white">Problem-Solving Mindset</p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md border border-cyan-900/50 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-lg">
            <FontAwesomeIcon icon={faPeopleGroup} className="text-4xl text-cyan-400 mb-4" />
            <p className="font-bold text-lg text-white">Team Collaboration</p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md border border-cyan-900/50 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-lg">
            <FontAwesomeIcon icon={faArrowsRotate} className="text-4xl text-cyan-400 mb-4" />
            <p className="font-bold text-lg text-white">Adaptability</p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md border border-cyan-900/50 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-lg">
            <FontAwesomeIcon icon={faBookOpen} className="text-4xl text-cyan-400 mb-4" />
            <p className="font-bold text-lg text-white">Continuous Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;