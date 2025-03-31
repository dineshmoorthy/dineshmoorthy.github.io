import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import ProfileOverview from "@/components/ProfileOverview";
import TabNavigation from "@/components/TabNavigation";
import Experience from "@/components/tabs/Experience";
import Skills from "@/components/tabs/Skills";
import Education from "@/components/tabs/Education";
import Achievements from "@/components/tabs/Achievements";
import Projects from "@/components/tabs/Projects";
import FutureProjects from "@/components/tabs/FutureProjects";
import Resume from "@/components/tabs/Resume";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio-data";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [isLoaded, setIsLoaded] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);
  
  // Simulate a loading sequence
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);
  
  // Handle hash change for direct navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const tabId = hash.substring(1);
        
        // Map URL hash to corresponding tab ID
        const tabMapping: Record<string, string> = {
          "experience": "experience",
          "skills": "skills",
          "education": "education",
          "achievements": "achievements",
          "projects": "projects",
          "futureprojects": "futureProjects",
          "resume": "resume"
        };
        
        if (tabMapping[tabId]) {
          setActiveTab(tabMapping[tabId]);
        }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check hash on initial load
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      {/* Loading overlay */}
      <div className={`fixed inset-0 z-50 bg-gray-950 flex flex-col items-center justify-center transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="relative">
          <div className="h-1 w-52 bg-gray-800 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-blue-600 rounded-full" style={{width: '100%'}}></div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Loading Portfolio</div>
            <div className="text-lg text-white font-bold">Dinesh Moorthy</div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className={`flex flex-col w-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} ref={mainContentRef}>
        <Header profile={portfolioData.profile} />
        
        {/* Add a spacer so the fixed header doesn't overlap content */}
        <div className="pt-20"></div>
        
        <ProfileOverview profile={portfolioData.profile} />
        
        <TabNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        
        <section className="container mx-auto px-4 pb-16">
          {/* Tab content */}
          <div>
            {activeTab === "experience" && <Experience experiences={portfolioData.experiences} />}
            {activeTab === "skills" && <Skills skillCategories={portfolioData.skillCategories} tools={portfolioData.tools} />}
            {activeTab === "education" && <Education education={portfolioData.education} />}
            {activeTab === "achievements" && <Achievements achievements={portfolioData.achievements} />}
            {activeTab === "projects" && <Projects projects={portfolioData.projects} />}
            {activeTab === "futureProjects" && <FutureProjects futureProjects={portfolioData.futureProjects} />}
            {activeTab === "resume" && <Resume profile={portfolioData.profile} />}
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Home;
