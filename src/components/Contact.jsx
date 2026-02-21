// src/components/Contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-6xl md:text-7xl font-black mb-16 relative">
          Get in Touch
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-cyan-500 rounded-full glow-cyan"></span>
        </h2>
        <p className="text-2xl text-cyan-300 mb-12 uppercase tracking-wider">LET'S CONNECT</p>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16">
          <div className="p-10 bg-slate-800/70 rounded-2xl border border-cyan-900/50 glow-cyan">
            <i className="fas fa-phone text-5xl text-cyan-400 mb-6 block"></i>
            <p className="text-2xl font-bold">+91 12345 67890</p>
          </div>
          <div className="p-10 bg-slate-800/70 rounded-2xl border border-cyan-900/50 glow-cyan">
            <i className="fas fa-envelope text-5xl text-cyan-400 mb-6 block"></i>
            <p className="text-2xl font-bold">deo@example.com</p>
          </div>
        </div>

        <div className="flex justify-center gap-12 text-5xl mb-12">
          <a href="#" className="text-cyan-400 hover:text-cyan-300 transition glow-cyan-hover">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-cyan-400 hover:text-cyan-300 transition glow-cyan-hover">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-cyan-400 hover:text-cyan-300 transition glow-cyan-hover">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-cyan-400 hover:text-cyan-300 transition glow-cyan-hover">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p className="text-slate-400 text-lg">
          Open to collaborations and opportunities
        </p>
      </div>
    </section>
  );
};

export default Contact;