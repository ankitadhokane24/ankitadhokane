// src/components/Certifications.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faAward } from '@fortawesome/free-solid-svg-icons';

const Certifications = () => {
  const certifications = [
    {
      title: "Mern (Backend) Development",
      issuer: "Knowledge Gate Coding",
      year: "Dec 2025",
      icon: faCertificate,
      link: "https://drive.google.com/file/d/1cUaCZCf8_fdwmdZdMbZ0u0D_YfBX8F_N/view?usp=sharing",
    },
    {
      title: "PHP and MYSQL",
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
    <section id="certifications" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent text-lg md:text-xl uppercase tracking-wider font-medium mb-4">
            MY CREDENTIALS
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/40 backdrop-blur-md border border-cyan-900/50 rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] glow-cyan flex flex-col"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-cyan-900/40 rounded-full border-2 border-cyan-500/60 mb-6 mx-auto">
                <FontAwesomeIcon
                  icon={cert.icon}
                  className="text-3xl text-cyan-400"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent text-center mb-2">
                {cert.title}
              </h3>
              <p className="text-slate-300 font-medium text-center mb-1">{cert.issuer}</p>
              <p className="text-slate-400 text-center mb-6">{cert.year}</p>

              {/* Verification Button */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-medium text-sm py-3 px-6 rounded-lg text-center transition-all duration-300 shadow-md shadow-cyan-500/30 hover:shadow-cyan-500/50"
                >
                  View Certificate
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