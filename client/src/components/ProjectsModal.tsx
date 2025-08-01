import React from "react";
import { Project as ProjectType } from "@shared/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";

interface ProjectsModalProps {
  projects: ProjectType[];
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({ projects }) => {
  const closeModal = () => {
    const modal = document.getElementById('projects-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  };

  return (
    <div 
      id="projects-modal" 
      className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[100] hidden overflow-auto py-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="w-full max-w-5xl mx-4 bg-black border border-gray-800 rounded-lg shadow-[0_0_20px_rgba(80,250,250,0.3)] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-black flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <button 
            onClick={closeModal}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={(index % 3 === 0 ? 1 : index % 3 === 1 ? 2 : 3) as 1 | 2 | 3} threshold={0.1}>
                <div className="group h-full bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(80,250,250,0.3)]">
                  {/* Project Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    {/* Cyberpunk overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                    <div className="absolute inset-0 bg-scan-lines opacity-10 z-20"></div>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
                      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent absolute animate-scan opacity-70"></div>
                    </div>
                    
                    {/* Image */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Type Badge */}
                    <div className="absolute top-3 right-3 z-30">
                      <Badge className="bg-black/70 backdrop-blur-sm border border-cyan-500/50 text-cyan-300 hover:bg-black/80">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.slice(0, 3).map((skill, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="border-fuchsia-500/40 bg-gray-900/50 text-gray-300 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {project.skills.length > 3 && (
                        <Badge variant="outline" className="border-gray-700 bg-gray-900/50 text-gray-400 text-xs">
                          +{project.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-3 mt-auto">
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1"
                      >
                        <Button 
                          variant="outline" 
                          className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-950/30 hover:text-cyan-200 group-hover:border-cyan-500"
                        >
                          <i className="fas fa-globe mr-2"></i> Live Demo
                        </Button>
                      </a>
                      <a 
                        href={project.sourceLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1"
                      >
                        <Button 
                          variant="outline" 
                          className="w-full border-fuchsia-500/50 text-fuchsia-300 hover:bg-fuchsia-950/30 hover:text-fuchsia-200 group-hover:border-fuchsia-500"
                        >
                          <i className="fas fa-code-branch mr-2"></i> Source
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;