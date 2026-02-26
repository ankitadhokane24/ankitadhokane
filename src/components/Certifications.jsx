// src/components/Certifications.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faAward } from '@fortawesome/free-solid-svg-icons';

const Certifications = () => {
  const certifications = [
    {
      title: "MERN (Backend) Development",
      issuer: "Knowledge Gate Coding",
      year: "Dec 2025",
      icon: faCertificate,
      link: "https://drive.google.com/file/d/1cUaCZCf8_fdwmdZdMbZ0u0D_YfBX8F_N/view?usp=sharing",
    },
    {
      title: "PHP and MySQL",
      issuer: "Spoken Tutorials At IIT Bombay",
      year: "Jan 2025",
      icon: faCertificate,
      link: "https://drive.google.com/file/d/1Le8SjXg1g39oipm7_hfGHPbTQXnt5DBi/view?usp=sharing",
    },
    {
      title: "Web Development",
      issuer: "SoftCodes Technologies",
      year: "2024",
      icon: faCertificate,
      link: "https://drive.google.com/file/d/1RcSiFiQPX3r633GYLMe3tA0go6EH6dlL/view?usp=sharing",
    },
  ];

  return (
    <section id="certifications" className="py-16 md:py-24 lg:py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading – consistent with other sections */}
        <div className="text-center mb-12 md:mb-16">
          <p className="
            bg-gradient-to-r from-cyan-400 to-teal-400 
            bg-clip-text text-transparent 
            text-base sm:text-lg uppercase tracking-wider font-semibold mb-3 md:mb-4
          ">
            MY CREDENTIALS
          </p>
          <h2 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-6xl 
            font-black text-white leading-tight
          ">
            Certifications
          </h2>
          <div className="
            w-20 sm:w-24 h-1 
            bg-gradient-to-r from-cyan-500 to-teal-500 
            mx-auto mt-5 sm:mt-6 
            rounded-full 
            shadow-[0_0_16px_rgba(6,182,212,0.4)]
          "></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="
                bg-slate-800/50 backdrop-blur-md 
                border border-cyan-900/50 
                rounded-2xl 
                p-6 sm:p-7 md:p-8 
                transition-all duration-300 
                hover:scale-[1.02] 
                hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]
                flex flex-col items-center text-center
              "
            >
              {/* Icon Circle */}
              <div className="
                w-14 h-14 sm:w-16 sm:h-16 
                flex items-center justify-center 
                bg-cyan-900/40 rounded-full 
                border-2 border-cyan-500/50 
                mb-5 sm:mb-6
              ">
                <FontAwesomeIcon
                  icon={cert.icon}
                  className="text-2xl sm:text-3xl text-cyan-400"
                />
              </div>

              {/* Title */}
              <h3 className="
                text-xl sm:text-2xl md:text-2.5xl 
                font-bold 
                bg-gradient-to-r from-cyan-300 to-teal-300 
                bg-clip-text text-transparent 
                mb-3 leading-tight
              ">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="
                text-base sm:text-lg 
                text-slate-300 font-medium 
                mb-2
              ">
                {cert.issuer}
              </p>

              {/* Year */}
              <p className="
                text-sm sm:text-base 
                text-slate-400 
                mb-6
              ">
                {cert.year}
              </p>

              {/* View Certificate Button */}
              {cert.link && (
                <a
                  href={cert.link}
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
                  View Certificate →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;