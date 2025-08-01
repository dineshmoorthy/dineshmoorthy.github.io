import React, { useState } from "react";
import { FutureProject } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FutureProjectsProps {
  futureProjects: FutureProject[];
}

// Helper to get project type color theme
const getProjectTypeColors = (type: string) => {
  const projectType = type.toLowerCase();

  if (projectType.includes('web') || projectType.includes('platform')) {
    return {
      gradient: 'from-blue-400 to-indigo-500',
      softGradient: 'from-blue-100/40 to-indigo-100/40',
      darkGradient: 'from-blue-900/30 to-indigo-900/30',
      textGradient: 'from-blue-500 to-indigo-600',
      badge: 'bg-blue-500'
    };
  }

  if (projectType.includes('ai') || projectType.includes('ml') || projectType.includes('artificial intelligence')) {
    return {
      gradient: 'from-amber-400 to-orange-500',
      softGradient: 'from-amber-100/40 to-orange-100/40',
      darkGradient: 'from-amber-900/30 to-orange-900/30',
      textGradient: 'from-amber-500 to-orange-600',
      badge: 'bg-amber-500'
    };
  }

  if (projectType.includes('cloud') || projectType.includes('framework')) {
    return {
      gradient: 'from-violet-400 to-purple-500',
      softGradient: 'from-violet-100/40 to-purple-100/40',
      darkGradient: 'from-violet-900/30 to-purple-900/30',
      textGradient: 'from-violet-500 to-purple-600',
      badge: 'bg-violet-500'
    };
  }

  if (projectType.includes('security') || projectType.includes('blockchain')) {
    return {
      gradient: 'from-emerald-400 to-green-500',
      softGradient: 'from-emerald-100/40 to-green-100/40',
      darkGradient: 'from-emerald-900/30 to-green-900/30',
      textGradient: 'from-emerald-500 to-green-600',
      badge: 'bg-emerald-500'
    };
  }

  // Default
  return {
    gradient: 'from-cyan-400 to-blue-500',
    softGradient: 'from-cyan-100/40 to-blue-100/40',
    darkGradient: 'from-cyan-900/30 to-blue-900/30',
    textGradient: 'from-cyan-500 to-blue-600',
    badge: 'bg-cyan-500'
  };
};

const FutureProjects: React.FC<FutureProjectsProps> = ({ futureProjects }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [hoverSkill, setHoverSkill] = useState<string | null>(null);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <div className="w-2 h-8 bg-orange-600 rounded-full mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Upcoming Projects</h2>
      </div>
      
      {/* Decorative elements */}
      <div className="relative mb-10">
        <div className="absolute -top-16 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {futureProjects.map((project) => {
          const isActive = activeProject === project.id;
          const colors = getProjectTypeColors(project.type);
          
          return (
            <Card 
              key={project.id} 
              className="overflow-hidden group border-0 shadow-lg hover:shadow-xl transition-all duration-500 ease-out"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-56 overflow-hidden">
                {/* Gradient overlay for contrast with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60"></div>
                
                {/* Project image with zoom effect */}
                <img 
                  src={project.image} 
                  alt={`${project.title} thumbnail`}
                  className={`w-full h-full object-cover transition-all duration-1000 ease-out ${isActive ? 'scale-110' : 'scale-100'}`}
                />
                
                {/* Project type badge */}
                <div className={`absolute top-3 right-3 ${colors.badge} text-white text-xs px-3 py-1.5 rounded-full z-20 font-medium shadow-md`}>
                  <span>{project.type}</span>
                </div>
                
                {/* Planned date badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full z-20 font-medium shadow-md">
                  <span>{project.plannedDate}</span>
                </div>
                
                {/* Project title overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <CardContent className={`p-6 bg-gradient-to-br ${colors.softGradient} dark:${colors.darkGradient}`}>
                <p className="text-gray-700 dark:text-gray-300 mb-5 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className={`bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 text-xs font-normal py-1 px-2 rounded-md transition-all duration-300 ${
                        hoverSkill === skill ? 'bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700 scale-105' : 'border-gray-200 dark:border-gray-700'
                      }`}
                      onMouseEnter={() => setHoverSkill(skill)}
                      onMouseLeave={() => setHoverSkill(null)}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
                  {project.websiteLink && (
                    <a 
                      href={project.websiteLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button variant="ghost" size="sm" className="group text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20">
                        <i className="fas fa-external-link-alt mr-2 group-hover:scale-110 transition-transform duration-300"></i>
                        <span>Visit Website</span>
                      </Button>
                    </a>
                  )}
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button variant="ghost" size="sm" className="group text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20">
                        <i className="fab fa-github mr-2 group-hover:scale-110 transition-transform duration-300"></i>
                        <span>GitHub Repository</span>
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
              
              {/* Animated bottom border that slides in on hover */}
              <div 
                className={`h-1 bg-gradient-to-r ${colors.gradient} transition-all duration-700 ease-out ${
                  isActive ? 'w-full' : 'w-0'
                }`}
              ></div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FutureProjects;