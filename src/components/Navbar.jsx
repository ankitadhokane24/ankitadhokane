// src/components/Navbar.tsx
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Logo */}
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg shadow-cyan-500/40">
            A
          </div>
          {/* Name */}
          <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
            Ankita
          </div>
        </div>

        {/* Desktop Menu + Theme Toggle */}
        <div className="flex items-center gap-6 md:gap-10">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 lg:space-x-12 text-sm md:text-base uppercase font-medium tracking-wide">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                    relative text-slate-300 hover:text-white transition-colors duration-300
                    after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 
                    after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-teal-400 
                    after:transition-all after:duration-300 hover:after:w-full
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-cyan-400 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 border-t border-cyan-900/50 backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-6 space-y-6 text-base font-medium">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="
                    relative block text-slate-300 hover:text-white transition-colors duration-300
                    after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 
                    after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-teal-400 
                    after:transition-all after:duration-300 hover:after:w-full
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;