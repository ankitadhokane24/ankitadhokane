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
    <section id="contact" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading - smaller */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_#06b6d4]"></div>
        </div>

        <p className="text-lg md:text-xl text-cyan-300 mb-10 uppercase tracking-wider">
          LET'S CONNECT
        </p>

        {/* Contact Info Cards - smaller text */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <div className="p-6 bg-slate-800/70 rounded-2xl border border-cyan-900/50 glow-cyan transition-all duration-300 hover:scale-[1.02] flex flex-col items-center">
            <FontAwesomeIcon icon={faPhone} className="text-4xl text-cyan-400 mb-4" />
            <p className="text-lg md:text-xl font-bold text-white mb-1">{phone}</p>
            <p className="text-slate-400 text-xs md:text-sm">Call or WhatsApp</p>
          </div>

          {/* Email */}
          <div className="p-6 bg-slate-800/70 rounded-2xl border border-cyan-900/50 glow-cyan transition-all duration-300 hover:scale-[1.02] flex flex-col items-center overflow-hidden">
            <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-cyan-400 mb-4" />
            <p className="text-lg md:text-xl font-bold text-white break-all text-center">
              {email}
            </p>
          </div>

          {/* Location */}
          <div className="p-6 bg-slate-800/70 rounded-2xl border border-cyan-900/50 glow-cyan transition-all duration-300 hover:scale-[1.02] flex flex-col items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl text-cyan-400 mb-4" />
            <p className="text-lg md:text-xl font-bold text-white mb-1">Nashik, Maharashtra</p>
            <p className="text-slate-400 text-xs md:text-sm">India</p>
          </div>
        </div>

        {/* Social Icons - slightly smaller */}
        <div className="flex justify-center gap-8 md:gap-10 text-4xl md:text-5xl mb-10">
          <a
            href="https://www.linkedin.com/in/ankitadhokane/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition glow-cyan-hover transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/ankitadhokane24/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition glow-cyan-hover transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition glow-cyan-hover transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>

        {/* Final Message - smaller */}
        <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto">
          Open to collaborations, freelance opportunities, full-time roles, or just a casual chat about tech.  
          Feel free to reach out — I usually reply within 24 hours!
        </p>
      </div>
    </section>
  );
};

export default Contact;