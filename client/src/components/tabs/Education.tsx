import React, { useState } from "react";
import { Education as EducationType } from "@shared/types";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface EducationProps {
  education: EducationType[];
}

// Helper function to get institution logos
const getInstitutionLogo = (institutionName: string): string | undefined => {
  const name = institutionName.toLowerCase();
  
  // Map popular institutions to their logos
  if (name.includes('stanford')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png';
  if (name.includes('mit') || name.includes('massachusetts institute')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png';
  if (name.includes('harvard')) return 'https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png';
  if (name.includes('berkeley') || name.includes('uc berkeley')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png';
  if (name.includes('oxford')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png';
  if (name.includes('cambridge')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Cambridge_University_crest.svg/1200px-Cambridge_University_crest.svg.png';
  if (name.includes('caltech')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Caltech_seal.svg/1200px-Caltech_seal.svg.png';
  if (name.includes('princeton')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Princeton_University_shield.svg/1200px-Princeton_University_shield.svg.png';
  if (name.includes('yale')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yale_University_logo.svg/1200px-Yale_University_logo.svg.png';
  if (name.includes('columbia')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png';
  
  // Certificate providers
  if (name.includes('udemy')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png';
  if (name.includes('coursera')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png';
  if (name.includes('edx')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/EdX.svg/1200px-EdX.svg.png';
  if (name.includes('linkedin learning') || name.includes('lynda')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/LinkedIn_Learning_logo.svg/2560px-LinkedIn_Learning_logo.svg.png';
  if (name.includes('google')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png';
  if (name.includes('microsoft')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png';
  if (name.includes('aws') || name.includes('amazon')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png';
  if (name.includes('ibm')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png';
  if (name.includes('oracle')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png';
  
  // If no specific logo found, return undefined
  return undefined;
};

// Get an appropriate color scheme based on education type
const getEducationColorScheme = (degree: string) => {
  if (degree.toLowerCase().includes('certification')) {
    return {
      iconBg: 'from-emerald-400 to-teal-500',
      cardGradient: 'from-emerald-50 to-teal-50',
      darkCardGradient: 'from-emerald-900/20 to-teal-900/20',
      timelineDot: 'bg-emerald-500',
      timelineLine: 'bg-emerald-200'
    };
  }
  
  if (degree.toLowerCase().includes('master')) {
    return {
      iconBg: 'from-blue-400 to-indigo-500',
      cardGradient: 'from-blue-50 to-indigo-50',
      darkCardGradient: 'from-blue-900/20 to-indigo-900/20',
      timelineDot: 'bg-blue-500',
      timelineLine: 'bg-blue-200'
    };
  }
  
  // Default scheme for bachelor's or other education
  return {
    iconBg: 'from-purple-400 to-indigo-500',
    cardGradient: 'from-purple-50 to-indigo-50',
    darkCardGradient: 'from-purple-900/20 to-indigo-900/20',
    timelineDot: 'bg-purple-500',
    timelineLine: 'bg-purple-200'
  };
};

const Education: React.FC<EducationProps> = ({ education }) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Education & Certifications</h2>
      </div>
      
      {/* Decorative elements */}
      <div className="relative mb-8">
        <div className="absolute -top-16 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="space-y-12 relative">
        {/* Timeline connector */}
        <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent dark:from-blue-800 dark:via-purple-800 z-0"></div>
        
        {education.map((item, index) => {
          const colorScheme = getEducationColorScheme(item.degree);
          const isExpanded = expandedItem === item.id;
          
          return (
            <div key={item.id} className="relative z-10">
              {/* Timeline dot */}
              <div className={`absolute left-9 w-5 h-5 -ml-2.5 rounded-full ${colorScheme.timelineDot} border-4 border-white dark:border-gray-900 shadow-md`}></div>
              
              <div className="ml-20 relative">
                {/* Date indicator */}
                <div className="inline-block px-4 py-1.5 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
                  {item.startDate} - {item.endDate}
                </div>
                
                <Card 
                  className={`overflow-hidden transition-all duration-500 ease-out hover:shadow-lg cursor-pointer border-0 ${
                    isExpanded ? 'shadow-lg' : 'shadow-md'
                  }`}
                  onClick={() => setExpandedItem(isExpanded ? null : item.id)}
                >
                  {/* Color gradient top bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${colorScheme.iconBg}`}></div>
                  
                  <div className={`p-6 bg-gradient-to-br ${colorScheme.cardGradient} dark:${colorScheme.darkCardGradient}`}>
                    <div className="flex items-start">
                      {/* Institution logo or icon */}
                      <div className="mr-5 flex-shrink-0">
                        <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${colorScheme.iconBg} flex items-center justify-center p-3 shadow-md overflow-hidden`}>
                          {getInstitutionLogo(item.institution) ? (
                            <img 
                              src={getInstitutionLogo(item.institution)} 
                              alt={item.institution}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <i className={`${item.degree.toLowerCase().includes("certification") ? "fas fa-certificate" : "fas fa-graduation-cap"} text-2xl text-white`}></i>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`text-xl font-bold text-transparent bg-gradient-to-r ${colorScheme.iconBg} bg-clip-text`}>
                            {item.degree}
                          </h3>
                          
                          {/* Interactive expand indicator */}
                          <div className={`w-6 h-6 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                            <i className="fas fa-chevron-down text-xs text-gray-500 dark:text-gray-400"></i>
                          </div>
                        </div>
                        
                        <div className="mt-1.5 mb-3">
                          <h4 className="font-semibold text-gray-700 dark:text-gray-300">{item.field}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{item.institution}</p>
                        </div>
                        
                        <div className={`transition-all duration-500 ease-out overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {item.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mt-4">
                            {item.skills.map((skill, i) => (
                              <Badge key={i} variant="outline" className="bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-normal border-gray-200 dark:border-gray-700">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
