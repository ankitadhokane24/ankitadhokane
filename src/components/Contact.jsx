// src/components/Contact.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const email = "ankitadhokane24@gmail.com";
  const phone = "+91 8767539448";
  const whatsapp = "918767539448"; // without + for WhatsApp link

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-28 bg-slate-950">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <h2 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-6xl 
            font-black text-white leading-tight
          ">
            Get in Touch
          </h2>
          <div className="
            w-20 sm:w-24 h-1 
            bg-gradient-to-r from-cyan-500 to-teal-500 
            mx-auto mt-5 sm:mt-6 
            rounded-full 
            shadow-[0_0_16px_rgba(6,182,212,0.4)]
          "></div>
        </div>

        <p className="
          bg-gradient-to-r from-cyan-400 to-teal-400 
          bg-clip-text text-transparent 
          text-base sm:text-lg uppercase tracking-wider font-semibold 
          mb-10 md:mb-12
        ">
          LET'S CONNECT
        </p>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 md:mb-16">
          {/* Phone */}
          <div className="
            p-6 sm:p-7 md:p-8 
            bg-slate-800/50 backdrop-blur-md 
            border border-cyan-900/50 rounded-2xl 
            transition-all duration-300 
            hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]
            flex flex-col items-center
          ">
            <FontAwesomeIcon icon={faPhone} className="text-4xl sm:text-5xl text-cyan-400 mb-5" />
            <p className="text-xl sm:text-2xl font-bold text-white mb-1.5">{phone}</p>
            <p className="text-sm sm:text-base text-slate-400">Call or WhatsApp</p>
          </div>

          {/* Email */}
          <div className="
            p-6 sm:p-7 md:p-8 
            bg-slate-800/50 backdrop-blur-md 
            border border-cyan-900/50 rounded-2xl 
            transition-all duration-300 
            hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]
            flex flex-col items-center
          ">
            <FontAwesomeIcon icon={faEnvelope} className="text-4xl sm:text-5xl text-cyan-400 mb-5" />
            <p className="
              text-lg sm:text-xl md:text-2xl 
              font-bold text-white 
              break-all text-center leading-snug
            ">
              {email}
            </p>
          </div>

          {/* Location */}
          <div className="
            p-6 sm:p-7 md:p-8 
            bg-slate-800/50 backdrop-blur-md 
            border border-cyan-900/50 rounded-2xl 
            transition-all duration-300 
            hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]
            flex flex-col items-center
          ">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl sm:text-5xl text-cyan-400 mb-5" />
            <p className="text-xl sm:text-2xl font-bold text-white mb-1.5">Nashik, Maharashtra</p>
            <p className="text-sm sm:text-base text-slate-400">India</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 sm:gap-10 md:gap-12 mb-10 md:mb-12">
          <a
            href="https://www.linkedin.com/in/ankitadhokane/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-cyan-400 hover:text-cyan-300 
              transition-all duration-300 
              transform hover:scale-110
              text-4xl sm:text-5xl
            "
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/ankitadhokane24/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-cyan-400 hover:text-cyan-300 
              transition-all duration-300 
              transform hover:scale-110
              text-4xl sm:text-5xl
            "
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-cyan-400 hover:text-cyan-300 
              transition-all duration-300 
              transform hover:scale-110
              text-4xl sm:text-5xl
            "
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>

        {/* Final Message */}
        <p className="
          text-base sm:text-lg md:text-xl 
          text-slate-300 max-w-3xl mx-auto 
          leading-relaxed
        ">
          Open to collaborations, freelance opportunities, full-time roles,  
          or just a casual chat about tech.  
          Feel free to reach out — I usually reply within 24 hours!
        </p>
      </div>
    </section>
  );
};

export default Contact;