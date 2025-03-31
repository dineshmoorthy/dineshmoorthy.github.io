import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import ProfileOverview from "@/components/ProfileOverview";
import Achievements from "@/components/tabs/Achievements";
import FutureProjects from "@/components/tabs/FutureProjects";
import Resume from "@/components/tabs/Resume";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio-data";
import { ScrollReveal } from "@/components/ScrollReveal";

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);
  
  // Simulate a loading sequence
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);
  
  return (
    <div className="min-h-screen bg-black dark:bg-gray-950 text-gray-100 flex flex-col theme-transition">
      {/* Loading overlay */}
      <div className={`fixed inset-0 z-50 bg-black dark:bg-gray-950 flex flex-col items-center justify-center transition-opacity duration-1000 theme-transition ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="relative">
          <div className="h-1 w-52 bg-gray-800 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full animate-scan" style={{width: '100%'}}></div>
          </div>
          <div className="font-mono text-center">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">INITIALIZING SYSTEM</div>
            <div className="text-lg bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent font-bold">PORTFOLIO.SYS</div>
          </div>
        </div>
      </div>
      
      {/* Background noise texture (subtle) */}
      <div className="fixed inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
      
      {/* Scan lines */}
      <div className="fixed inset-0 bg-scan-lines opacity-10 pointer-events-none z-10"></div>
      
      {/* Main content */}
      <div className={`flex flex-col w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} ref={mainContentRef}>
        <Header profile={portfolioData.profile} />
        
        {/* Add a spacer so the fixed header doesn't overlap content */}
        <div className="pt-20"></div>
        
        <ProfileOverview profile={portfolioData.profile} />
        
        {/* Anchor points for remaining sections */}
        <div id="achievements" className="pt-12 -mt-12"></div>
        <div id="futureprojects" className="pt-12 -mt-12"></div>
        <div id="resume" className="pt-12 -mt-12"></div>
        
        {/* Achievements Section */}
        <section id="achievements-section" className="container mx-auto px-4 py-16 relative">
          <ScrollReveal type="up">
            <div className="relative z-10 mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent mb-3">Achievements</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full"></div>
            </div>
          </ScrollReveal>
          
          <div className="relative z-10">
            <Achievements achievements={portfolioData.achievements} />
          </div>
          
          {/* Decorative horizontal line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
        </section>
        
        {/* Future Projects Section */}
        <section id="futureprojects-section" className="container mx-auto px-4 py-16 relative">
          <ScrollReveal type="up">
            <div className="relative z-10 mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent mb-3">Future Projects</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full"></div>
            </div>
          </ScrollReveal>
          
          <div className="relative z-10">
            <FutureProjects futureProjects={portfolioData.futureProjects} />
          </div>
          
          {/* Decorative horizontal line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
        </section>
        
        {/* Resume Section */}
        <section id="resume-section" className="container mx-auto px-4 py-16 relative">
          <ScrollReveal type="up">
            <div className="relative z-10 mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent mb-3">Resume</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full"></div>
            </div>
          </ScrollReveal>
          
          <div className="relative z-10">
            <Resume profile={portfolioData.profile} />
          </div>
          
          {/* Decorative horizontal line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Home;
