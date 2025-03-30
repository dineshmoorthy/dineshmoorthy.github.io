import React, { useEffect, useState, useRef } from "react";
import { ProfileInfo } from "@shared/types";
import { Button } from "@/components/ui/button";

interface ProfileOverviewProps {
  profile: ProfileInfo;
}

const ProfileOverview: React.FC<ProfileOverviewProps> = ({ profile }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Cyberpunk neon glitch effect
  const glitchText = (text: string) => {
    return (
      <span className="relative inline-block group">
        {text}
        <span className="absolute -inset-0.5 bg-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse blur-sm bg-gradient-to-r from-cyan-400 to-fuchsia-600 duration-500"></span>
      </span>
    );
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 border-b border-white/10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/60 via-black to-blue-950/60"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Glowing orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full filter blur-[128px] opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/30 rounded-full filter blur-[128px] opacity-30 animate-pulse" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-[128px] opacity-20 animate-pulse" style={{animationDelay: '1s', animationDuration: '7s'}}></div>
        
        {/* Retro neon lines */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left column - Profile image */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              {/* Cyberpunk frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 rounded-lg opacity-75 blur-lg animate-pulse"></div>
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 rounded-lg opacity-75"></div>
              
              {/* Tech-themed decorative elements */}
              <div className="absolute -left-6 -top-6 w-12 h-12 border-l-2 border-t-2 border-cyan-400 animate-pulse"></div>
              <div className="absolute -right-6 -bottom-6 w-12 h-12 border-r-2 border-b-2 border-fuchsia-400 animate-pulse"></div>
              
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black border-4 border-gray-800 shadow-[0_0_20px_rgba(80,250,250,0.5),0_0_40px_rgba(233,70,255,0.3)]">
                {/* Image container */}
                <div className="aspect-square w-72 lg:w-80 xl:w-96 relative overflow-hidden">
                  {/* Scan lines effect */}
                  <div className="absolute inset-0 pointer-events-none z-20 bg-scan-lines opacity-5"></div>
                  
                  {/* Glitch overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  
                  {/* Profile image */}
                  <img 
                    src="/images/institutions/dinesh.png" 
                    alt={profile.name}
                    className="w-full h-full object-cover z-0"
                  />
                  
                  {/* Scanner effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent absolute animate-scan-fast opacity-70 z-30"></div>
                  </div>
                  
                  {/* Secondary scanner effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent absolute animate-scan opacity-50 z-30" style={{animationDelay: '0.7s'}}></div>
                  </div>
                  
                  {/* Digital noise overlay */}
                  <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay pointer-events-none"></div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-fuchsia-400"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-fuchsia-400"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
                </div>
                
                {/* Cyberpunk name tag */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <div className="px-4 py-1 bg-black/70 backdrop-blur-md text-center border border-cyan-500/50 shadow-[0_0_10px_rgba(80,250,250,0.5)]">
                    <h3 className="text-lg font-mono text-white tracking-wider">
                      <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent font-bold">
                        {profile.name.toUpperCase()}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Tech indicators */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(80,250,250,0.7)]">
                <i className="fas fa-microchip text-sm"></i>
              </div>
              
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(233,70,255,0.7)]">
                <i className="fas fa-code text-sm"></i>
              </div>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            {/* Name and title with cyberpunk effect */}
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
                <span className="inline-block relative">
                  <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent whitespace-nowrap">
                    {profile.name}
                  </span>
                  <span className="absolute z-0 inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-50 blur-xl animate-pulse"></span>
                </span>
              </h1>
              
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto lg:mx-0 my-4"></div>
              
              <h2 className="text-xl lg:text-2xl font-mono text-cyan-200 mt-2 glitch-text relative">
                <span className="inline-block">
                  {profile.title}
                  <span className="absolute left-0 top-0 h-full w-full bg-black/60 mix-blend-multiply"></span>
                </span>
              </h2>
            </div>
            
            {/* About section */}
            <div className="mb-8 text-gray-300 backdrop-blur-sm bg-black/20 p-6 border border-gray-800 rounded-lg shadow-inner">
              <div className="flex items-center mb-4">
                <div className="h-px flex-grow bg-gradient-to-r from-transparent to-cyan-500 opacity-50"></div>
                <span className="px-4 text-cyan-400 font-mono uppercase text-sm tracking-widest">Bio.sys</span>
                <div className="h-px flex-grow bg-gradient-to-l from-transparent to-fuchsia-500 opacity-50"></div>
              </div>
              
              <p className="leading-relaxed text-lg mb-4">
                {profile.about}
              </p>
              
              {/* Location and contact info */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-cyan-400"></i>
                  <span>{profile.location}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <i className="fas fa-envelope text-fuchsia-400"></i>
                  <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">
                    {profile.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-2">
                  <i className="fas fa-globe text-cyan-400"></i>
                  <a href={profile.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    {profile.website.replace('https://', '')}
                  </a>
                </div>
                
                <div className="flex items-center gap-2">
                  <i className="fas fa-phone text-fuchsia-400"></i>
                  <a href={`tel:${profile.phone}`} className="hover:text-white transition-colors">
                    {profile.phone}
                  </a>
                </div>
              </div>
            </div>
            
            {/* CTA buttons and social links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              {/* Download CV button */}
              <a 
                href={profile.resumeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block"
              >
                <Button className="group bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white px-8 py-6 rounded-lg font-medium text-lg flex items-center gap-3 shadow-[0_0_20px_rgba(80,250,250,0.4)]">
                  <i className="fas fa-download text-lg"></i>
                  <span>Download CV</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </a>
              
              {/* Social links */}
              <div className="flex gap-3">
                <a 
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-cyan-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(80,250,250,0.5)] group"
                >
                  <i className="fab fa-github text-xl group-hover:text-cyan-400 transition-colors"></i>
                </a>
                
                <a 
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group"
                >
                  <i className="fab fa-linkedin-in text-xl group-hover:text-blue-400 transition-colors"></i>
                </a>
                
                <a 
                  href={profile.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-blue-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(29,161,242,0.5)] group"
                >
                  <i className="fab fa-twitter text-xl group-hover:text-[#1DA1F2] transition-colors"></i>
                </a>
                
                {profile.socialLinks.medium && (
                  <a 
                    href={profile.socialLinks.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Medium"
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] group"
                  >
                    <i className="fab fa-medium-m text-xl group-hover:text-white transition-colors"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileOverview;
