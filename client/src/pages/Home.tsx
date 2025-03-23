import React, { useState } from "react";
import Header from "@/components/Header";
import ProfileOverview from "@/components/ProfileOverview";
import TabNavigation from "@/components/TabNavigation";
import Experience from "@/components/tabs/Experience";
import Skills from "@/components/tabs/Skills";
import Education from "@/components/tabs/Education";
import Achievements from "@/components/tabs/Achievements";
import Projects from "@/components/tabs/Projects";
import FutureProjects from "@/components/tabs/FutureProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio-data";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <Header profile={portfolioData.profile} />
      <ProfileOverview profile={portfolioData.profile} />
      
      <TabNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      
      <section className="container mx-auto px-4 pb-16">
        {activeTab === "experience" && <Experience experiences={portfolioData.experiences} />}
        {activeTab === "skills" && <Skills skillCategories={portfolioData.skillCategories} tools={portfolioData.tools} />}
        {activeTab === "education" && <Education education={portfolioData.education} />}
        {activeTab === "achievements" && <Achievements achievements={portfolioData.achievements} />}
        {activeTab === "projects" && <Projects projects={portfolioData.projects} />}
        {activeTab === "futureProjects" && <FutureProjects futureProjects={portfolioData.futureProjects} />}
      </section>
      
      <Contact profile={portfolioData.profile} />
      <Footer />
    </div>
  );
};

export default Home;
