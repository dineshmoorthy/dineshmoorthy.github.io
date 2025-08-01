import React from "react";
import { SkillCategory, Tool } from "@shared/types";
import { Progress } from "@/components/ui/progress";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";

interface SkillsModalProps {
  skillCategories: SkillCategory[];
  tools: Tool[];
}

const SkillsModal: React.FC<SkillsModalProps> = ({ skillCategories, tools }) => {
  const closeModal = () => {
    const modal = document.getElementById('skills-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  };

  return (
    <div 
      id="skills-modal" 
      className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[100] hidden overflow-auto py-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="w-full max-w-4xl mx-4 bg-black border border-gray-800 rounded-lg shadow-[0_0_20px_rgba(80,250,250,0.3)] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-black flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
            Skills & Technologies
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills Categories */}
            {skillCategories.map((category) => (
              <ScrollReveal key={category.id} delay={1} type="up">
                <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg p-5 h-full shadow-lg hover:shadow-[0_0_15px_rgba(80,250,250,0.2)] transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 flex items-center justify-center border border-gray-700">
                      <i className={`${category.icon} text-lg bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent`}></i>
                    </div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-gray-400 font-mono text-sm">{skill.percentage}%</span>
                        </div>
                        <div className="relative h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r ${i % 2 === 0 ? 'from-cyan-500 to-blue-500' : 'from-fuchsia-500 to-purple-500'}`}
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                          <div className="absolute inset-0 bg-scan-lines opacity-20"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          {/* Tools Section */}
          <ScrollReveal delay={2} type="up">
            <div className="mt-12">
              <div className="flex items-center mb-6">
                <div className="h-px flex-grow bg-gradient-to-r from-transparent to-cyan-500 opacity-50"></div>
                <h3 className="text-xl font-bold text-white px-4">Tools & Environments</h3>
                <div className="h-px flex-grow bg-gradient-to-l from-transparent to-fuchsia-500 opacity-50"></div>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {tools.map((tool) => (
                  <div 
                    key={tool.id} 
                    className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg flex items-center gap-2 hover:border-cyan-500/50 transition-colors"
                  >
                    <i className={`${tool.icon} text-lg bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent`}></i>
                    <span className="text-gray-300">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;