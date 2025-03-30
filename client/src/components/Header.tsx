import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProfileInfo } from "@shared/types";

interface HeaderProps {
  profile: ProfileInfo;
}

const Header: React.FC<HeaderProps> = ({ profile }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? 'bg-black/80 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Cyberpunk Logo */}
        <div className="relative">
          <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg opacity-70 blur transition-opacity ${scrolled ? 'opacity-75' : 'opacity-40'}`}></div>
          <a href="#" className="relative block px-3 py-2 bg-black rounded-lg">
            <h1 className="text-xl md:text-2xl font-mono font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent tracking-tight">
              <span className="inline-block transform hover:scale-105 transition-transform">D.MOORTHY</span>
            </h1>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute h-0.5 w-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
            <span className={`absolute h-0.5 w-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 rounded-full top-2 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute h-0.5 w-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="space-x-6 text-sm font-medium text-gray-300">
            <a href="#experience" className="hover:text-white transition-colors hover:underline decoration-cyan-500 decoration-2 underline-offset-4">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors hover:underline decoration-fuchsia-500 decoration-2 underline-offset-4">Skills</a>
            <a href="#education" className="hover:text-white transition-colors hover:underline decoration-cyan-500 decoration-2 underline-offset-4">Education</a>
            <a href="#projects" className="hover:text-white transition-colors hover:underline decoration-fuchsia-500 decoration-2 underline-offset-4">Projects</a>
            <a href="#resume" className="hover:text-white transition-colors hover:underline decoration-cyan-500 decoration-2 underline-offset-4">Resume</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#contact"
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded opacity-70 blur group-hover:opacity-100 transition duration-300"></div>
              <Button className="relative bg-black hover:bg-gray-900 text-white border border-gray-800 group-hover:border-transparent px-4 py-2 text-sm rounded-md">
                <i className="fas fa-envelope mr-2 text-fuchsia-400"></i>
                Contact
              </Button>
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center space-y-8 z-50 transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <nav className="flex flex-col items-center space-y-8">
            <a 
              href="#experience" 
              className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#skills" 
              className="text-2xl font-bold text-white hover:text-fuchsia-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#education" 
              className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </a>
            <a 
              href="#projects" 
              className="text-2xl font-bold text-white hover:text-fuchsia-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#resume" 
              className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
            <a 
              href="#contact" 
              className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white rounded-full text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </a>
          </nav>
          
          {/* Social Links */}
          <div className="flex space-x-6 mt-8">
            <a 
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href={profile.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
      </div>
    </header>
  );
};

export default Header;
