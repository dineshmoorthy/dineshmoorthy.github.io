import React, { useState } from "react";
import { Education as EducationType } from "@shared/types";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

interface EducationProps {
  education: EducationType[];
}

// Helper function to get institution logos
const getInstitutionLogo = (institutionName: string): string | undefined => {
  const name = institutionName.toLowerCase();
  
  // Custom provided logos - use these first
  if (name.includes('anna') || name.includes('university')) return '/images/institutions/anna-university-chennai.jpg';
  if (name.includes('ielts') || name.includes('british')) return '/images/institutions/ielts.jpg';
  if (name.includes('oracle')) return '/images/institutions/Logo_oracle.jpg';
  if (name.includes('azure') || (name.includes('microsoft') && name.includes('certified'))) return '/images/institutions/azure.png';
  
  // Return path relative to public directory
  return undefined;
  
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
  if (name.includes('iit')) return 'https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png';
  if (name.includes('nit')) return 'https://upload.wikimedia.org/wikipedia/en/f/fd/National_Institute_of_Technology%2C_Tiruchirappalli_Logo.png';
  if (name.includes('bits')) return 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png';
  
  // Certificate providers
  if (name.includes('udemy')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png';
  if (name.includes('coursera')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png';
  if (name.includes('edx')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/EdX.svg/1200px-EdX.svg.png';
  if (name.includes('linkedin learning') || name.includes('lynda')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/LinkedIn_Learning_logo.svg/2560px-LinkedIn_Learning_logo.svg.png';
  if (name.includes('google')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png';
  if (name.includes('microsoft') && !name.includes('azure')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png';
  if (name.includes('aws') || name.includes('amazon')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png';
  if (name.includes('ibm')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png';
  if (name.includes('spring') || name.includes('vmware')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png';
  
  // If no specific logo found, return undefined
  return undefined;
};

// Get a realistic image for institution or certification type
const getEducationImage = (item: EducationType): string | undefined => {
  const institution = item.institution.toLowerCase();
  const degree = item.degree.toLowerCase();
  const field = item.field.toLowerCase();

  // First try to get institution-specific image
  const institutionLogo = getInstitutionLogo(institution);
  if (institutionLogo) return institutionLogo;
  
  // Universities and college campus images
  if (
    institution.includes('university') || 
    institution.includes('college') || 
    institution.includes('school') ||
    institution.includes('institute')
  ) {
    // If it's a specific famous institution, use its image
    if (institution.includes('anna') || institution.includes('university')) {
      return '/images/institutions/anna-university-chennai.jpg';
    }
    
    if (institution.includes('iit')) {
      return 'https://www.shiksha.com/online-courses/articles/wp-content/uploads/sites/11/2022/02/IIT-Delhi.jpg';
    }
    
    if (institution.includes('nit')) {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/National_Institute_of_Technology%2C_Tiruchirappalli_-_Central_Library.jpg/1200px-National_Institute_of_Technology%2C_Tiruchirappalli_-_Central_Library.jpg';
    }
    
    // Generic university campus image
    return 'https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/university-of-calicut-distance-education.jpg';
  }
  
  // Certificate or training images based on field
  if (degree.includes('certification') || degree.includes('certificate') || degree.includes('course')) {
    if (field.includes('java') || field.includes('spring')) {
      return 'https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg';
    }
    
    if (field.includes('aws') || field.includes('cloud')) {
      return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80';
    }
    
    if (field.includes('devops') || field.includes('kubernetes') || field.includes('docker')) {
      return 'https://www.opsmx.com/wp-content/uploads/2022/07/What-is-DevOps-opsmax.jpeg';
    }
    
    if (field.includes('database') || field.includes('sql')) {
      return 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Database.jpg';
    }
    
    if (field.includes('web') || field.includes('frontend') || field.includes('ui')) {
      return 'https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg';
    }
    
    // Generic certificate image
    return 'https://assets-global.website-files.com/62e3ee10882dc50bcae8d07a/634970c53d6c9d5c068c7258_9-2-education-certificate-premium.jpg';
  }
  
  // Default education themed image
  return 'https://blog.coursify.me/wp-content/uploads/2018/08/graduation.jpg';
};

// Get an appropriate color scheme based on education type
const getEducationColorScheme = (degree: string) => {
  if (degree.toLowerCase().includes('certification')) {
    return {
      iconBg: 'from-cyan-500 to-fuchsia-500',
      cardGradient: 'from-cyan-900/20 to-fuchsia-900/20',
      border: 'border-cyan-800/50',
      glow: 'cyan',
      textGradient: 'from-cyan-400 to-fuchsia-400'
    };
  }
  
  if (degree.toLowerCase().includes('master')) {
    return {
      iconBg: 'from-fuchsia-500 to-cyan-500',
      cardGradient: 'from-fuchsia-900/20 to-cyan-900/20',
      border: 'border-fuchsia-800/50',
      glow: 'fuchsia', 
      textGradient: 'from-fuchsia-400 to-cyan-400'
    };
  }
  
  // Default scheme for bachelor's or other education
  return {
    iconBg: 'from-cyan-500 to-blue-500',
    cardGradient: 'from-cyan-900/20 to-blue-900/20',
    border: 'border-cyan-800/50',
    glow: 'blue',
    textGradient: 'from-cyan-400 to-blue-400'
  };
};

const Education: React.FC<EducationProps> = ({ education }) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  return (
    <div>
      <ScrollReveal type="up">
        <div className="flex items-center mb-8">
          <div className="w-2 h-8 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full mr-4"></div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
        </div>
      </ScrollReveal>
      
      {/* Decorative elements */}
      <div className="relative mb-8 overflow-hidden">
        <div className="absolute -top-16 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 left-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="space-y-12 relative">
        {/* Timeline connector with cyberpunk styling */}
        <div className="absolute left-9 top-0 bottom-0 w-0.5 overflow-hidden z-0">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-fuchsia-500 to-cyan-500 bg-[length:100%_300%] animate-gradient-y"></div>
          
          {/* Dotted pattern overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="h-full w-full opacity-50" 
                style={{ 
                  backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.2) 5%, rgba(255, 255, 255, 0.2) 10%)', 
                  backgroundSize: '0.5px 20px'
                }}>
            </div>
          </div>
          
          {/* Scanner effect */}
          <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
            <div className="h-24 w-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent absolute animate-scan"></div>
          </div>
        </div>
        
        {education.map((item, index) => {
          const colorScheme = getEducationColorScheme(item.degree);
          const isExpanded = expandedItem === item.id;
          
          return (
            <ScrollReveal 
              key={item.id} 
              type="left" 
              delay={Math.min(index + 1, 8) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}
              className="relative z-10"
            >
              {/* Cyberpunk timeline node */}
              <div className="absolute left-9 w-5 h-5 -ml-2.5 rounded-full z-10">
                <div className="absolute inset-0 bg-black rounded-full"></div>
                <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme.iconBg} rounded-full opacity-80 animate-pulse`}></div>
                <div className="absolute inset-0 rounded-full border border-white/20"></div>
              </div>
              
              <div className="ml-20 relative">
                {/* Date indicator with cyberpunk styling */}
                <div className="inline-block px-4 py-1.5 rounded-md bg-black/40 backdrop-blur-sm text-gray-300 border border-gray-700 text-sm font-medium mb-3 shadow-[0_0_10px_rgba(80,150,250,0.3)]">
                  {item.startDate} - {item.endDate}
                </div>
                
                <Card 
                  className={`overflow-hidden transition-all duration-500 ease-out border-0 
                    bg-black/30 backdrop-blur-sm border ${colorScheme.border} 
                    shadow-[0_0_15px_rgba(80,250,250,0.15)] 
                    hover:shadow-[0_0_30px_rgba(80,250,250,0.3)] 
                    cursor-pointer`}
                  onClick={() => setExpandedItem(isExpanded ? null : item.id)}
                >
                  {/* Animated top bar */}
                  <div className="relative h-1 w-full overflow-hidden">
                    <div className={`h-full w-full bg-gradient-to-r ${colorScheme.iconBg}`}></div>
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="w-20 h-full bg-white/50 animate-glow-line-x"></div>
                    </div>
                  </div>
                  
                  {/* Education image with overlay and mask effects */}
                  {getEducationImage(item) && isExpanded && (
                    <div className="relative w-full h-48 overflow-hidden">
                      {/* Glitch/scan effect overlay */}
                      <div className="absolute inset-0 z-10 opacity-40 pointer-events-none scan-lines-dark"></div>
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10"></div>
                      
                      {/* Image with cyberpunk filter */}
                      <img 
                        src={getEducationImage(item)} 
                        alt={item.degree}
                        className="w-full h-full object-cover transition-all duration-700 ease-out transform hover:scale-105 filter saturate-[1.2] contrast-[1.1]"
                      />
                      
                      {/* Tech overlay line effect */}
                      <div className="absolute inset-0 z-20 overflow-hidden opacity-20 pointer-events-none">
                        <div className="h-1 w-full bg-cyan-400 absolute top-[40%] animate-scan-fast"></div>
                      </div>
                    </div>
                  )}
                  
                  <div className={`p-6 bg-gradient-to-br ${colorScheme.cardGradient}`}>
                    <div className="flex items-start">
                      {/* Institution logo with cyberpunk styling */}
                      <ScrollReveal type="scale" delay={2}>
                        <div className="mr-5 flex-shrink-0">
                          <div className="relative group">
                            <div className={`absolute -inset-1 bg-gradient-to-r ${colorScheme.iconBg} rounded-md opacity-70 blur-sm group-hover:opacity-100 transition-all duration-500`}></div>
                            <div className="relative w-16 h-16 rounded-md bg-black flex items-center justify-center p-3 overflow-hidden border border-white/10">
                              {getInstitutionLogo(item.institution) ? (
                                <img 
                                  src={getInstitutionLogo(item.institution)} 
                                  alt={item.institution}
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <i className={`${item.degree.toLowerCase().includes("certification") ? "fas fa-certificate" : "fas fa-graduation-cap"} text-2xl text-white`}></i>
                              )}
                              
                              {/* Scan effect */}
                              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
                                <div className="h-8 w-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent absolute animate-scan-fast"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <ScrollReveal type="right" delay={2}>
                            <h3 className={`text-xl font-bold bg-gradient-to-r ${colorScheme.textGradient} bg-clip-text text-transparent`}>
                              {item.degree}
                            </h3>
                          </ScrollReveal>
                          
                          {/* Cyberpunk expand button */}
                          <div className={`relative w-8 h-8 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center border border-white/20`}>
                                <i className="fas fa-chevron-down text-xs text-white/80"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <ScrollReveal type="right" delay={3}>
                          <div className="mt-1.5 mb-3">
                            <h4 className="font-semibold text-white/90">{item.field}</h4>
                            <p className="text-gray-400 text-sm">{item.institution}</p>
                          </div>
                        </ScrollReveal>
                        
                        <div className={`transition-all duration-700 ease-out overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <ScrollReveal type="up" delay={4}>
                            <p className="text-gray-300 mb-4">
                              {item.description}
                            </p>
                          </ScrollReveal>
                          
                          <ScrollReveal type="up" delay={5}>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {item.skills.map((skill, i) => (
                                <Badge 
                                  key={i} 
                                  variant="outline" 
                                  className="bg-black/60 text-white font-normal border-white/20 hover:bg-black/80 transition-colors duration-300 hover:border-cyan-500/50"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </ScrollReveal>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
