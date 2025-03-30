import React, { useState } from "react";
import { Experience as ExperienceType } from "@shared/types";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";

interface ExperienceProps {
  experiences: ExperienceType[];
}

// Helper function to get tech badge styles
const getTechBadgeStyle = (tech: string) => {
  const techLower = tech.toLowerCase();
  
  // Programming Languages
  if (techLower.includes('java')) return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200', icon: 'fab fa-java text-red-600' };
  if (techLower.includes('python')) return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200', icon: 'fab fa-python text-blue-600' };
  if (techLower.includes('javascript') || techLower.includes('js')) return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200', icon: 'fab fa-js text-yellow-600' };
  if (techLower.includes('typescript') || techLower.includes('ts')) return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200', icon: 'fas fa-code text-blue-600' };
  
  // Frameworks & Libraries
  if (techLower.includes('react')) return { bg: 'bg-cyan-100', text: 'text-cyan-800', border: 'border-cyan-200', icon: 'fab fa-react text-cyan-600' };
  if (techLower.includes('angular')) return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200', icon: 'fab fa-angular text-red-600' };
  if (techLower.includes('vue')) return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200', icon: 'fab fa-vuejs text-green-600' };
  if (techLower.includes('node')) return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200', icon: 'fab fa-node-js text-green-600' };
  if (techLower.includes('spring')) return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200', icon: 'fas fa-leaf text-green-600' };
  
  // Tools & Platforms
  if (techLower.includes('docker')) return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200', icon: 'fab fa-docker text-blue-600' };
  if (techLower.includes('kubernetes') || techLower.includes('k8s')) return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200', icon: 'fas fa-dharmachakra text-blue-600' };
  if (techLower.includes('aws')) return { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-200', icon: 'fab fa-aws text-orange-600' };
  if (techLower.includes('azure')) return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200', icon: 'fab fa-microsoft text-blue-600' };
  if (techLower.includes('git')) return { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-200', icon: 'fab fa-git-alt text-orange-600' };
  if (techLower.includes('jenkins')) return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200', icon: 'fas fa-cogs text-red-600' };
  
  // Databases
  if (techLower.includes('mongodb') || techLower.includes('mongo')) return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200', icon: 'fas fa-database text-green-600' };
  if (techLower.includes('sql') || techLower.includes('mysql') || techLower.includes('postgresql')) return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200', icon: 'fas fa-database text-blue-600' };
  if (techLower.includes('oracle')) return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200', icon: 'fas fa-database text-red-600' };
  
  // Testing
  if (techLower.includes('junit') || techLower.includes('test') || techLower.includes('testing')) return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200', icon: 'fas fa-vial text-green-600' };
  
  // Messaging
  if (techLower.includes('kafka')) return { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-200', icon: 'fas fa-exchange-alt text-purple-600' };
  if (techLower.includes('mq') || techLower.includes('rabbitmq')) return { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-200', icon: 'fas fa-exchange-alt text-orange-600' };
  
  // Default
  return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200', icon: 'fas fa-code' };
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);
  
  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <div className="w-2 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-4"></div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Work Experience
        </h2>
      </div>
      
      {/* Decorative elements */}
      <div className="relative mb-8 overflow-hidden">
        <div className="absolute -top-16 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <Timeline>
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.id}
            icon={<i className="fas fa-briefcase text-xl"></i>}
            date={`${experience.startDate} - ${experience.endDate}`}
            title={experience.title}
            isLast={index === experiences.length - 1}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{experience.company}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{experience.location}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.skills.map((skill, i) => {
                const badgeStyles = getTechBadgeStyle(skill);
                const isHovered = hoveredBadge === `${experience.id}-${i}`;
                
                return (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className={`${badgeStyles.bg} ${badgeStyles.text} font-medium border ${badgeStyles.border} transition-all duration-300 ${isHovered ? 'scale-110 shadow-md' : ''}`}
                    onMouseEnter={() => setHoveredBadge(`${experience.id}-${i}`)}
                    onMouseLeave={() => setHoveredBadge(null)}
                  >
                    <i className={`${badgeStyles.icon} mr-1.5`}></i>
                    {skill}
                  </Badge>
                );
              })}
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Experience;
