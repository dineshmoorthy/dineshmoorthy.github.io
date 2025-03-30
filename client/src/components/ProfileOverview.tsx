import React, { useEffect, useState } from "react";
import { ProfileInfo } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProfileOverviewProps {
  profile: ProfileInfo;
}

const ProfileOverview: React.FC<ProfileOverviewProps> = ({ profile }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="container mx-auto px-4 py-12">
      <Card className={`mb-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <CardContent className="p-8 md:p-10 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 flex flex-col items-center">
            <div className="relative w-56 h-56 mx-auto">
              {/* Main profile image with animation and glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 animate-pulse opacity-20 blur-xl"></div>
              <div className="rounded-full w-56 h-56 mx-auto border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden z-10 relative hover:scale-105 transition-transform duration-300 ease-in-out">
                <img 
                  src="/images/dinesh.png" 
                  alt={`${profile.name} profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative tech-themed element */}
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white z-20 shadow-lg border-2 border-white">
                <i className="fas fa-laptop-code text-2xl"></i>
              </div>
            </div>
            
            <a 
              href={profile.resumeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block"
            >
              <Button variant="default" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-lg">
                <i className="fas fa-download"></i>
                <span>Download CV</span>
                <span className="hidden group-hover:inline-block transition-all duration-300">→</span>
              </Button>
            </a>
          </div>
          
          <div className="md:w-3/4">
            <div className="mb-6 flex items-center">
              <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">About Me</h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              {profile.about}
            </p>
            
            <div className="mt-8">
              <div className="mb-5 flex items-center">
                <div className="w-2 h-6 bg-blue-600 rounded-full mr-4"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Connect with me</h3>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={profile.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile" 
                  className="group flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                >
                  <i className="fab fa-github text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="font-medium">GitHub</span>
                </a>
                
                <a 
                  href={profile.socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile" 
                  className="group flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                >
                  <i className="fab fa-twitter text-2xl text-[#1DA1F2] group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="font-medium">Twitter</span>
                </a>
                
                <a 
                  href={profile.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile" 
                  className="group flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                >
                  <i className="fab fa-linkedin text-2xl text-[#0077B5] group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="font-medium">LinkedIn</span>
                </a>
                
                {profile.socialLinks.medium && (
                  <a 
                    href={profile.socialLinks.medium} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Medium Profile" 
                    className="group flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                  >
                    <i className="fab fa-medium text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                    <span className="font-medium">Medium</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProfileOverview;
