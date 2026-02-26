// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Achievements/>
      <Certifications/>
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-cyan-900/30 text-slate-500">
        <p>© 2026 Ankita Dhokane</p>
      </footer>
    </div>
  );
}

export default App;