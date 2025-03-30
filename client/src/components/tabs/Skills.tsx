import React, { useState } from "react";
import { SkillCategory, Tool } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface SkillsProps {
  skillCategories: SkillCategory[];
  tools: Tool[];
}

// Custom tech logos for popular technologies
const getTechLogo = (skillName: string): string | undefined => {
  // Convert to lowercase for consistent matching
  const name = skillName.toLowerCase();
  
  // Map to more specific icons where possible
  if (name.includes('spring')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg';
  if (name.includes('java')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg';
  if (name.includes('aws')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg';
  if (name.includes('docker')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg';
  if (name.includes('jenkins')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg';
  if (name.includes('kafka')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg';
  if (name.includes('oracle')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg';
  if (name.includes('mongodb')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg';
  if (name.includes('mysql')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg';
  if (name.includes('git')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg';
  if (name.includes('jira')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg';
  if (name.includes('micro')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg';
  if (name.includes('azure')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg';
  
  // Return undefined for anything not specifically mapped
  return undefined;
};

// AI-generated colorful category icons
const getCategoryIcon = (category: string): string | undefined => {
  switch(category.toLowerCase()) {
    case 'j2ee technologies':
      return 'https://img.icons8.com/fluency/96/java-coffee-cup-logo.png';
    case 'cloud & devops':
      return 'https://img.icons8.com/fluency/96/cloud.png';
    case 'databases & tools':
      return 'https://img.icons8.com/fluency/96/database.png';
    case 'soft skills':
      return 'https://img.icons8.com/fluency/96/communicate.png';
    default:
      return undefined;
  }
};

// Get shields.io badge for a skill - more professional look
const getShieldsBadge = (skillName: string, percentage: number): string => {
  // Format the skill name for the URL
  const formattedName = skillName.replace(/\s+/g, '%20');
  
  // Color mapping based on skill percentage
  let color = 'blue';
  if (percentage >= 90) color = 'brightgreen';
  else if (percentage >= 80) color = 'green';
  else if (percentage >= 70) color = 'yellowgreen';
  else if (percentage >= 60) color = 'yellow';
  else if (percentage < 60) color = 'orange';
  
  // Return the shields.io badge URL with appropriate styling
  return `https://img.shields.io/badge/${formattedName}-${percentage}%25-${color}?style=for-the-badge&logo=${getLogoIdentifier(skillName)}&logoColor=white`;
};

// Function to map skill names to shields.io logo identifiers
const getLogoIdentifier = (skillName: string): string => {
  const name = skillName.toLowerCase();
  
  // Map common skills to their shields.io logo identifiers
  if (name.includes('java')) return 'java';
  if (name.includes('spring')) return 'spring';
  if (name.includes('aws')) return 'amazonaws';
  if (name.includes('docker')) return 'docker';
  if (name.includes('kubernetes') || name.includes('k8s')) return 'kubernetes';
  if (name.includes('jenkins')) return 'jenkins';
  if (name.includes('git')) return 'git';
  if (name.includes('kafka')) return 'apachekafka';
  if (name.includes('hibernate')) return 'hibernate';
  if (name.includes('maven')) return 'apachemaven';
  if (name.includes('oracle')) return 'oracle';
  if (name.includes('mysql')) return 'mysql';
  if (name.includes('mongodb')) return 'mongodb';
  if (name.includes('postgresql')) return 'postgresql';
  if (name.includes('redis')) return 'redis';
  if (name.includes('jira')) return 'jira';
  if (name.includes('azure')) return 'microsoftazure';
  if (name.includes('microservice')) return 'spring';
  
  // Default (no logo)
  return '';
};

// Get realistic technology category image
const getCategoryImage = (category: string): string | undefined => {
  const name = category.toLowerCase();
  
  if (name.includes('j2ee') || name.includes('java')) {
    return 'https://www.oracle.com/a/tech/img/cb88-java-logo-001.jpg';
  }
  
  if (name.includes('cloud') || name.includes('devops')) {
    return 'https://www.eginnovations.com/blog/wp-content/uploads/2021/09/Cloud-DevOps.jpg';
  }
  
  if (name.includes('database')) {
    return 'https://www.pcworld.com/wp-content/uploads/2023/04/database_binary_data_storage_analytics_by_monsitj_getty_images-100752708-orig-5.jpg?quality=50&strip=all';
  }
  
  if (name.includes('soft')) {
    return 'https://images.squarespace-cdn.com/content/v1/5d8133574e8870104e4b5d90/1618675793656-GJXF3X6O83OT2PQ2YXWC/soft-skills.jpg';
  }
  
  return undefined;
};

const Skills: React.FC<SkillsProps> = ({ skillCategories, tools }) => {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Professional Skills</h2>
      </div>
      
      {/* AI-themed decorative element */}
      <div className="relative mb-12">
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {skillCategories.map((category) => (
          <Card 
            key={category.id}
            className={`group overflow-hidden transition-all duration-300 ease-out hover:shadow-xl border-0 ${
              hoveredCategory === category.id 
                ? 'shadow-lg shadow-blue-200 dark:shadow-blue-900/20 scale-[1.02]' 
                : 'shadow-md'
            }`}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 transform scale-[0.96] group-hover:scale-100 transition-transform duration-500"></div>
            
            {/* Category image - realistic visuals */}
            {getCategoryImage(category.title) && (
              <div className="w-full h-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={getCategoryImage(category.title)} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{category.title}</h3>
                </div>
              </div>
            )}
            
            <CardContent className="p-8 z-10 relative">
              {!getCategoryImage(category.title) && (
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 p-3 flex items-center justify-center mr-5 overflow-hidden transform group-hover:rotate-3 transition-transform duration-300">
                    {getCategoryIcon(category.title) ? (
                      <img 
                        src={getCategoryIcon(category.title)} 
                        alt={category.title}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <i className={`${category.icon} text-2xl text-blue-600 dark:text-blue-400`}></i>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{category.title}</h3>
                </div>
              )}
              
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div className="mb-4" key={index}>
                    <div className="flex items-center justify-between mb-2 flex-wrap">
                      <div className="flex items-center mb-2">
                        {getTechLogo(skill.name) ? (
                          <img 
                            src={getTechLogo(skill.name)} 
                            alt={skill.name} 
                            className="w-6 h-6 mr-3 object-contain"
                          />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-3">
                            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{skill.name.charAt(0)}</span>
                          </div>
                        )}
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      
                      {/* Shields.io badge */}
                      <img 
                        src={getShieldsBadge(skill.name, skill.percentage)} 
                        alt={`${skill.name} - ${skill.percentage}%`}
                        className="h-6 transform transition-all duration-300 hover:scale-105"
                      />
                    </div>
                    
                    <div className="relative">
                      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform origin-left transition-transform duration-1000 ease-out"
                          style={{ 
                            width: `${skill.percentage}%`, 
                            transform: `scaleX(${hoveredCategory === category.id ? 1 : 0.3})` 
                          }}
                        ></div>
                      </div>
                      {/* Animated dot */}
                      <div 
                        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-blue-600 transition-all duration-1000 ease-out ${hoveredCategory === category.id ? 'opacity-100' : 'opacity-0'}`}
                        style={{ left: `calc(${skill.percentage}% - 6px)` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex items-center mb-6">
        <div className="w-2 h-6 bg-indigo-600 rounded-full mr-4"></div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Tools & Technologies</h3>
      </div>
      
      <Card className="mb-12 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/30">
        <CardContent className="p-8">
          <div className="flex flex-wrap gap-4">
            {tools.map((tool) => (
              <Badge 
                key={tool.id} 
                variant="outline" 
                className={`group bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-800 dark:text-gray-200 px-5 py-3 rounded-xl flex items-center h-auto font-medium text-sm border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md cursor-pointer transition-all duration-300 ${
                  hoveredTool === tool.id ? 'shadow-md scale-110 border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/30' : ''
                }`}
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                {getTechLogo(tool.name) ? (
                  <img 
                    src={getTechLogo(tool.name)} 
                    alt={tool.name}
                    className="w-6 h-6 mr-3 object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                ) : (
                  <i className={`${tool.icon} text-xl text-blue-600 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300`}></i>
                )}
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">{tool.name}</span>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
