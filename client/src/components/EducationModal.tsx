import React from "react";
import { Education as EducationType } from "@shared/types";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";

interface EducationModalProps {
  education: EducationType[];
}

const EducationModal: React.FC<EducationModalProps> = ({ education }) => {
  const closeModal = () => {
    const modal = document.getElementById('education-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  };

  const getEducationImage = (item: EducationType): string | undefined => {
    const institutionMap: Record<string, string> = {
      "Anna University": "/images/institutions/anna-university-chennai.jpg",
      "Oracle University": "/images/institutions/Logo_oracle.jpg",
      "British Council": "/images/institutions/ielts.jpg"
    };
    
    return institutionMap[item.institution];
  };

  return (
    <div 
      id="education-modal" 
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
            Education & Certifications
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
          <ScrollReveal>
            <Timeline>
              {education.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  icon={<i className="fas fa-graduation-cap text-fuchsia-400"></i>}
                  date={
                    <div className="flex flex-col">
                      <span className="text-cyan-400 font-mono text-sm">{item.startDate}</span>
                      <span className="text-fuchsia-400 font-mono text-sm">
                        {item.endDate}
                      </span>
                    </div>
                  }
                  title={
                    <div className="mb-2">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent inline-block">
                        {item.degree}
                      </h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="text-gray-400 text-sm">{item.field}</span>
                        <span className="text-gray-500 mx-2">•</span>
                        <span className="text-gray-400 text-sm">{item.institution}</span>
                      </div>
                    </div>
                  }
                  isLast={index === education.length - 1}
                >
                  <div className="space-y-4">
                    {getEducationImage(item) && (
                      <div className="relative w-20 h-20 rounded-md overflow-hidden border border-gray-800 mb-3">
                        <img 
                          src={getEducationImage(item)} 
                          alt={item.institution} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                    )}
                    
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.skills.map((skill, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="border-fuchsia-500/40 bg-gray-900/50 text-gray-200 hover:bg-gray-800"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TimelineItem>
              ))}
            </Timeline>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default EducationModal;