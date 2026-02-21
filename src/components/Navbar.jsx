// src/components/Navbar.jsx
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.error('ThemeContext not found — is ThemeProvider wrapping App?');
    return <div>Theme not available</div>;
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-cyan-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo + Name - Left side */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Small "A" logo */}
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg shadow-cyan-500/30">
            A
          </div>
          {/* Name */}
          <div className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-tight">
            Ankita
          </div>
        </div>

        {/* Right side: Desktop Menu + Theme Toggle + Mobile Hamburger */}
        <div className="flex items-center gap-6 md:gap-10">
          {/* Desktop Menu Items - Aligned right */}
          <ul className="hidden md:flex items-center space-x-8 lg:space-x-12 text-sm uppercase font-medium tracking-wide">
            <li><a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">Projects</a></li>
            <li><a href="#experience" className="text-slate-300 hover:text-cyan-400 transition-colors">Experience</a></li>
            <li><a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>

          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="text-2xl md:text-3xl text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none"
            aria-label="Toggle dark/light mode"
          >
            <FontAwesomeIcon icon={dark ? faSun : faMoon} />
          </button> */}

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl md:text-3xl text-cyan-400 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 border-t border-cyan-900/50">
          <ul className="flex flex-col px-6 py-6 space-y-6 text-base font-medium">
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Projects</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Experience</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;