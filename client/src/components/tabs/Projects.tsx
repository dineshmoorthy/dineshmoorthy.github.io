import React from "react";
import { Project as ProjectType } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-md transition-all group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={`${project.title} thumbnail`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded">
                <span>{project.type}</span>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-100 text-gray-800 text-xs font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-between">
                <a href={project.demoLink} className="text-primary hover:text-primary/80 transition-colors">
                  Live Demo
                </a>
                <a href={project.sourceLink} className="text-primary hover:text-primary/80 transition-colors">
                  GitHub
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
