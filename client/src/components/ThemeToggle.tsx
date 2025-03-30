import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

// Self-contained theme toggle component
const ThemeToggle: React.FC = () => {
  // Get theme from localStorage or default to dark theme
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as 'dark' | 'light') || 'dark';
  });
  
  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  // Update document theme when theme changes
  useEffect(() => {
    const html = document.documentElement;
    
    if (theme === 'dark') {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
    } else {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // Animation logic
  useEffect(() => {
    const handleTransition = () => {
      document.documentElement.classList.add('theme-transition');
      window.setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 800);
    };
    
    handleTransition();
  }, [theme]);
  
  return (
    <Button
      variant="outline"
      size="icon"
      className="relative w-10 h-10 rounded-lg bg-transparent border border-white/20 hover:bg-white/10 transition-colors group overflow-hidden"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Sun icon */}
      <div className={`absolute inset-0 flex items-center justify-center text-white transition-all duration-500 ${theme === 'dark' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="relative">
          <div className="absolute -inset-1 bg-yellow-500/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </div>
      </div>
      
      {/* Moon icon */}
      <div className={`absolute inset-0 flex items-center justify-center text-white transition-all duration-500 ${theme === 'light' ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="relative">
          <div className="absolute -inset-1 bg-blue-500/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      </div>
      
      {/* Glitch effect on toggle */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-0 group-hover:opacity-20 group-active:opacity-40 transition-opacity"></div>
    </Button>
  );
};

export default ThemeToggle;