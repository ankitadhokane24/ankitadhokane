// src/components/About.tsx
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faPeopleGroup, faArrowsRotate, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const { dark } = useContext(ThemeContext) ?? { dark: true };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-slate-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/10 to-slate-950 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent text-lg md:text-xl uppercase tracking-wider font-medium mb-4">
            GET TO KNOW ME
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Bio */}
          <div className="space-y-10 order-2 lg:order-1">
            {/* Bio Card */}
            <div className="bg-slate-800/40 backdrop-blur-md border border-cyan-900/50 rounded-2xl p-8 md:p-10 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <h3 className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent text-xl font-bold uppercase tracking-wider mb-4">
                BIO
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                I am a Web Developer based in Nashik, India, with strong hands-on experience in WordPress development. I enjoy building responsive and user-friendly websites using custom themes and plugins. I have worked on dashboards, authentication systems, donation and payment integrations, and API-based features. I also focus on SEO optimization, website performance, and clean coding practices to ensure fast loading, better search visibility, and smooth user experience.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Along with WordPress, I have hands-on knowledge of the MERN stack (MongoDB, Express.js, React.js, and Node.js). I have completed several academic and personal projects involving REST APIs, CRUD operations, and dynamic user interfaces. I enjoy working on the logic behind applications and building smooth front-end experiences using React. I am continuously learning new technologies and improving my skills to build better, scalable web applications.
              </p>
            </div>
          </div>

          {/* Right: Stats + Strengths (now in place of image) */}
          <div className="space-y-5 order-1 lg:order-2">
            {/* Stats - gradient numbers */}
            <div className="bg-slate-800/40 backdrop-blur-md border border-cyan-900/50 rounded-2xl p-8 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <h3 className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent text-xl font-bold uppercase tracking-wider mb-6 text-center">
                Key Stats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-cyan-500/40">
                <div className="py-6">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">10+</div>
                  <p className="text-sm md:text-base text-slate-400 mt-2">PROJECTS</p>
                </div>
                <div className="py-6">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">1+</div>
                  <p className="text-sm md:text-base text-slate-400 mt-2">YEARS EXP</p>
                </div>
                <div className="py-6">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">5+</div>
                  <p className="text-sm md:text-base text-slate-400 mt-2">CERTIFICATIONS</p>
                </div>
              </div>
            </div>

            {/* Strengths - bullet list */}
            <div className="bg-slate-800/40 backdrop-blur-md border border-cyan-900/50 rounded-2xl p-8 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <h3 className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent text-xl font-bold uppercase tracking-wider mb-6 text-center">
                My Strengths
              </h3>
              <ul className="space-y-4 text-slate-300 text-base list-disc pl-6">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faBrain} className="text-2xl text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Problem-Solving Mindset</span>
                    <p className="text-sm text-slate-400 mt-1">Approach challenges logically and find efficient solutions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faPeopleGroup} className="text-2xl text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Team Collaboration</span>
                    <p className="text-sm text-slate-400 mt-1">Work effectively in teams to deliver high-quality results.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faArrowsRotate} className="text-2xl text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Adaptability</span>
                    <p className="text-sm text-slate-400 mt-1">Quickly learn and adjust to new technologies and requirements.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Continuous Learning</span>
                    <p className="text-sm text-slate-400 mt-1">Always upskilling to stay current with industry trends.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;