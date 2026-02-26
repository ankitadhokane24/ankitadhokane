// src/components/About.tsx
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faPeopleGroup, faArrowsRotate, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const { dark } = useContext(ThemeContext) ?? { dark: true };

  return (
    <section 
      id="about" 
      className="py-16 md:py-24 lg:py-28 relative overflow-hidden bg-slate-950"
    >
      {/* Background gradient – lighter touch */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/8 to-slate-950 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="
            bg-gradient-to-r from-cyan-400 to-teal-400 
            bg-clip-text text-transparent 
            text-base sm:text-lg uppercase tracking-wider font-semibold mb-3 md:mb-4
          ">
            GET TO KNOW ME
          </p>
          <h2 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-6xl 
            font-black text-white leading-tight
          ">
            About Me
          </h2>
          <div className="
            w-20 sm:w-24 h-1 
            bg-gradient-to-r from-cyan-500 to-teal-500 
            mx-auto mt-5 sm:mt-6 
            rounded-full 
            shadow-[0_0_16px_rgba(6,182,212,0.4)]
          "></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Bio - left side */}
          <div className="space-y-8 lg:order-1 order-2">
            <div className="
              bg-slate-800/35 backdrop-blur-lg 
              border border-cyan-900/40 
              rounded-2xl p-7 sm:p-9 
              shadow-[0_0_18px_rgba(6,182,212,0.25)]
              h-full
            ">
              <h3 className="
                bg-gradient-to-r from-cyan-400 to-teal-400 
                bg-clip-text text-transparent 
                text-lg sm:text-xl font-bold uppercase tracking-wider mb-4
              ">
                BIO
              </h3>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-5">
                I am a Web Developer based in Nashik, India, with strong hands-on experience in WordPress development. I enjoy building responsive and user-friendly websites using custom themes and plugins. I have worked on dashboards, authentication systems, donation and payment integrations, and API-based features. I also focus on SEO optimization, website performance, and clean coding practices.
              </p>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Along with WordPress, I have hands-on knowledge of the MERN stack. I have completed several academic and personal projects involving REST APIs, CRUD operations, and dynamic user interfaces. I enjoy building smooth front-end experiences with React and continuously learning to create better, scalable web applications.
              </p>
            </div>
          </div>

          {/* Right column: Stats + Strengths */}
          <div className="grid grid-cols-1 gap-6 lg:gap-8 order-1 lg:order-2">
            {/* Key Stats */}
            <div className="
              bg-slate-800/35 backdrop-blur-lg 
              border border-cyan-900/40 
              rounded-2xl p-7 sm:p-9 
              shadow-[0_0_18px_rgba(6,182,212,0.25)]
            ">
              <h3 className="
                bg-gradient-to-r from-cyan-400 to-teal-400 
                bg-clip-text text-transparent 
                text-lg sm:text-xl font-bold uppercase tracking-wider mb-6 text-center
              ">
                Key Stats
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x divide-cyan-500/30">
                <div className="py-5 sm:py-6">
                  <div className="
                    text-4xl sm:text-5xl font-black 
                    bg-gradient-to-r from-cyan-400 to-teal-400 
                    bg-clip-text text-transparent
                  ">
                    10+
                  </div>
                  <p className="text-sm sm:text-base text-slate-400 mt-2">PROJECTS</p>
                </div>
                <div className="py-5 sm:py-6">
                  <div className="
                    text-4xl sm:text-5xl font-black 
                    bg-gradient-to-r from-cyan-400 to-teal-400 
                    bg-clip-text text-transparent
                  ">
                    1+
                  </div>
                  <p className="text-sm sm:text-base text-slate-400 mt-2">YEARS EXP</p>
                </div>
                <div className="py-5 sm:py-6">
                  <div className="
                    text-4xl sm:text-5xl font-black 
                    bg-gradient-to-r from-cyan-400 to-teal-400 
                    bg-clip-text text-transparent
                  ">
                    5+
                  </div>
                  <p className="text-sm sm:text-base text-slate-400 mt-2">CERTIFICATIONS</p>
                </div>
              </div>
            </div>

           <div className="
            bg-slate-800/35 backdrop-blur-lg 
            border border-cyan-900/40 
            rounded-2xl 
            p-6 sm:p-8 lg:p-9                 /* ← reduced padding */
            shadow-[0_0_18px_rgba(6,182,212,0.25)]
            flex flex-col items-center
            min-h-[200px] sm:min-h-[240px] lg:min-h-[220px]
          ">
            <h3 className="
              bg-gradient-to-r from-cyan-400 to-teal-400 
              bg-clip-text text-transparent 
              text-lg sm:text-xl md:text-2xl 
              font-bold uppercase tracking-wider 
              mb-5 sm:mb-6 lg:mb-7            /* slightly less margin under title */
              text-center
            ">
              My Strengths
            </h3>

            <ul className="
              grid grid-cols-1 sm:grid-cols-2 
              gap-x-6 gap-y-4 sm:gap-y-5 lg:gap-y-6 
              w-full max-w-3xl                   /* wider container = better spacing */
              px-2 sm:px-0                       /* small side padding on mobile */
            ">
              <li className="
                flex items-center gap-3 
                text-slate-200 text-base sm:text-lg font-medium
                justify-center sm:justify-start
              ">
                <FontAwesomeIcon icon={faBrain} className="text-xl sm:text-2xl text-cyan-400 flex-shrink-0" />
                Problem-Solving Mindset
              </li>

              <li className="
                flex items-center gap-3 
                text-slate-200 text-base sm:text-lg font-medium
                justify-center sm:justify-start
              ">
                <FontAwesomeIcon icon={faPeopleGroup} className="text-xl sm:text-2xl text-cyan-400 flex-shrink-0" />
                Team Collaboration
              </li>

              <li className="
                flex items-center gap-3 
                text-slate-200 text-base sm:text-lg font-medium
                justify-center sm:justify-start
              ">
                <FontAwesomeIcon icon={faArrowsRotate} className="text-xl sm:text-2xl text-cyan-400 flex-shrink-0" />
                Adaptability
              </li>

              <li className="
                flex items-center gap-3 
                text-slate-200 text-base sm:text-lg font-medium
                justify-center sm:justify-start
              ">
                <FontAwesomeIcon icon={faGraduationCap} className="text-xl sm:text-2xl text-cyan-400 flex-shrink-0" />
                Continuous Learning
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