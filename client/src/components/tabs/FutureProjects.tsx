import React from "react";
import { FutureProject } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FutureProjectsProps {
  futureProjects: FutureProject[];
}

const FutureProjects: React.FC<FutureProjectsProps> = ({ futureProjects }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Upcoming Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {futureProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center text-white shadow-md mr-4 flex-shrink-0">
                  <i className="fas fa-calendar-alt text-lg"></i>
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.title}</h3>
                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full font-medium">
                      {project.plannedDate}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 block mb-3">{project.type}</span>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-100 text-gray-800 text-xs font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-end gap-3">
                    {project.websiteLink && (
                      <a 
                        href={project.websiteLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:text-primary/80 transition-colors flex items-center"
                      >
                        <i className="fas fa-external-link-alt mr-1"></i> Visit Website
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:text-primary/80 transition-colors flex items-center"
                      >
                        <i className="fab fa-github mr-1"></i> GitHub Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FutureProjects;