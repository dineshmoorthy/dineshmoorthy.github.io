import React, { useEffect, useState } from "react";
import { ProfileInfo } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProfileOverviewProps {
  profile: ProfileInfo;
}

const ProfileOverview: React.FC<ProfileOverviewProps> = ({ profile }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Futuristic background with AI elements */}
      <Card className={`mb-8 relative overflow-hidden shadow-2xl transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* AI-themed background with circuit patterns */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 to-indigo-900 opacity-90 z-0">
          {/* Animated circuit lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"></path>
                <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" className="animate-pulse"></circle>
                <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" className="animate-pulse"></circle>
                <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"></line>
                <line x1="100" y1="0" x2="0" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"></line>
                {/* Animated pulsing dots */}
                <circle cx="20" cy="20" r="1" fill="white" className="animate-ping"></circle>
                <circle cx="80" cy="80" r="1" fill="white" className="animate-ping" style={{animationDelay: '0.5s'}}></circle>
                <circle cx="80" cy="20" r="1" fill="white" className="animate-ping" style={{animationDelay: '1s'}}></circle>
                <circle cx="20" cy="80" r="1" fill="white" className="animate-ping" style={{animationDelay: '1.5s'}}></circle>
              </svg>
            </div>
          </div>
          
          {/* Glowing orbs */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <CardContent className="p-8 md:p-10 flex flex-col md:flex-row gap-8 relative z-10">
          <div className="md:w-1/4 flex flex-col items-center">
            <div className="relative w-56 h-56 mx-auto">
              {/* Main profile image with advanced effects */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-0 ${animationComplete ? 'animate-pulse opacity-30' : ''} blur-xl`}></div>
              
              {/* Holographic ring effect */}
              <div className={`absolute inset-0 rounded-full border-4 border-transparent ${animationComplete ? 'animate-spin-slow opacity-70' : 'opacity-0'} transition-opacity duration-1000`} style={{
                background: 'linear-gradient(45deg, transparent, transparent 40%, rgba(0, 255, 255, 0.4) 45%, rgba(0, 255, 255, 0) 50%, transparent 60%, transparent)',
                filter: 'blur(1px)',
                transformOrigin: 'center center'
              }}></div>
              
              <div className="rounded-full w-56 h-56 mx-auto border-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6),0_0_30px_rgba(59,130,246,0.4),inset_0_0_15px_rgba(59,130,246,0.6)] overflow-hidden z-10 relative hover:scale-105 transition-transform duration-500 ease-out">
                <img 
                  src="/images/institutions/dinesh.png" 
                  alt={`${profile.name} profile`}
                  className={`w-full h-full object-cover transition-all duration-500 ${isVisible ? 'filter-none' : 'blur-sm'}`}
                />
                
                {/* Scan line effect */}
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent h-full w-full opacity-0 ${animationComplete ? 'animate-scan' : ''}`} style={{
                  backgroundSize: '100% 8px',
                  backgroundRepeat: 'no-repeat',
                  animation: animationComplete ? 'scan 3s ease-in-out infinite' : 'none',
                }}></div>
              </div>
              
              {/* Tech badge with animated elements */}
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white z-20 shadow-lg border-2 border-white transform hover:rotate-12 transition-transform duration-300">
                <div className="relative">
                  <i className="fas fa-microchip text-2xl"></i>
                  {/* Small animated dots */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
            
            <a 
              href={profile.resumeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-8 inline-block"
            >
              <Button variant="default" className="group bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-700 text-white shadow-[0_4px_20px_rgba(59,130,246,0.5)] px-8 py-3 rounded-full flex items-center gap-3 transition-all duration-300 hover:shadow-[0_6px_25px_rgba(59,130,246,0.7)]">
                <i className="fas fa-download"></i>
                <span className="font-medium">Download CV</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </a>
          </div>
          
          <div className="md:w-3/4 text-white">
            <div className="mb-6 flex items-center">
              <div className="w-2 h-8 bg-cyan-400 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">About Me</h2>
            </div>
            
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              {profile.about}
            </p>
            
            <div className="mt-8">
              <div className="mb-5 flex items-center">
                <div className="w-2 h-6 bg-cyan-400 rounded-full mr-4"></div>
                <h3 className="text-xl font-bold text-blue-100">Connect with me</h3>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={profile.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile" 
                  className="group flex items-center gap-2 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 hover:from-blue-800/90 hover:to-indigo-800/90 text-white px-4 py-3 rounded-xl shadow-[0_4px_10px_rgba(30,64,175,0.3)] hover:shadow-[0_6px_15px_rgba(30,64,175,0.5)] transition-all duration-300 backdrop-blur-sm border border-blue-500/30"
                >
                  <i className="fab fa-github text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="font-medium">GitHub</span>
                </a>
                
                <a 
                  href={profile.socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile" 
                  className="group flex items-center gap-2 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 hover:from-blue-800/90 hover:to-indigo-800/90 text-white px-4 py-3 rounded-xl shadow-[0_4px_10px_rgba(30,64,175,0.3)] hover:shadow-[0_6px_15px_rgba(30,64,175,0.5)] transition-all duration-300 backdrop-blur-sm border border-blue-500/30"
                >
                  <i className="fab fa-twitter text-2xl text-[#1DA1F2] group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="font-medium">Twitter</span>
                </a>
                
                <a 
                  href={profile.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile" 
                  className="group flex items-center gap-2 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 hover:from-blue-800/90 hover:to-indigo-800/90 text-white px-4 py-3 rounded-xl shadow-[0_4px_10px_rgba(30,64,175,0.3)] hover:shadow-[0_6px_15px_rgba(30,64,175,0.5)] transition-all duration-300 backdrop-blur-sm border border-blue-500/30"
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
                    className="group flex items-center gap-2 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 hover:from-blue-800/90 hover:to-indigo-800/90 text-white px-4 py-3 rounded-xl shadow-[0_4px_10px_rgba(30,64,175,0.3)] hover:shadow-[0_6px_15px_rgba(30,64,175,0.5)] transition-all duration-300 backdrop-blur-sm border border-blue-500/30"
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
