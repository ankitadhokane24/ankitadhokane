// src/context/ThemeContext.jsx
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('Initial theme:', saved || (prefersDark ? 'dark (system)' : 'light (system)'));
    return saved === 'dark' || (!saved && prefersDark);
  });

  useEffect(() => {
    console.log('Applying theme:', dark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggleTheme = () => {
    console.log('Toggle clicked — current:', dark ? 'dark' : 'light');
    setDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};