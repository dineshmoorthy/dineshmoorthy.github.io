import React from "react";
import { Button } from "@/components/ui/button";
import { ProfileInfo } from "@shared/types";

interface HeaderProps {
  profile: ProfileInfo;
}

const Header: React.FC<HeaderProps> = ({ profile }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
          <p className="text-lg text-gray-600">{profile.title}</p>
        </div>
        <div className="flex space-x-4">
          <a 
            href={profile.resumeLink} 
            className="text-primary hover:text-primary/80 transition-colors flex items-center"
            aria-label="Download Resume"
          >
            <i className="fas fa-file-download mr-2"></i>Resume
          </a>
          <a href="#contact">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
