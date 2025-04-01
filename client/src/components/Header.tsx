import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProfileInfo } from "@shared/types";
import ThemeToggle from "./ThemeToggle";
import TabNavigation from "./TabNavigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 py-2' : 'bg-gray-900 py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="block">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            D.MOORTHY
          </h1>
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute h-0.5 w-full bg-white rounded-full transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
            <span className={`absolute h-0.5 w-full bg-white rounded-full top-2 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute h-0.5 w-full bg-white rounded-full transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => {
                const modal = document.getElementById('contact-modal');
                if (modal) {
                  modal.classList.remove('hidden');
                }
              }}
              className="text-sm text-gray-300 hover:text-white flex items-center"
            >
              <i className="fas fa-envelope mr-1"></i>
              <span>Contact</span>
            </button>
            
            <ThemeToggle />
          </div>
        </nav>
        
        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-gray-900/98 flex flex-col justify-center items-center z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <nav className="flex flex-col items-center space-y-5">
            {/* Divider line */}
            <div className="w-16 h-px bg-gray-700 my-2"></div>
            
            <button 
              className="text-lg font-medium text-white hover:text-blue-400 transition-colors"
              onClick={() => {
                setIsMenuOpen(false);
                // Show the Contact form in a modal
                const modal = document.getElementById('contact-modal');
                if (modal) {
                  modal.classList.remove('hidden');
                }
              }}
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact
            </button>
            
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
