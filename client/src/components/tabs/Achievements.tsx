import React, { useState, useEffect } from "react";
import { Achievement as AchievementType } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AchievementsProps {
  achievements: AchievementType[];
}

// Helper function to generate themed achievement badges
const getAchievementIcon = (achievement: AchievementType): string | undefined => {
  const title = achievement.title.toLowerCase();
  const organization = achievement.organization.toLowerCase();
  
  // Custom uploaded images first
  if (organization.includes('oracle')) return '/images/institutions/Logo_oracle.jpg';
  if (organization.includes('azure') || organization.includes('microsoft')) return '/images/institutions/azure.png';
  if (organization.includes('ielts')) return '/images/institutions/ielts.jpg';
  
  // Generic icons based on achievement type
  if (title.includes('award') || title.includes('achievement')) return 'https://img.icons8.com/fluency/96/trophy.png';
  if (title.includes('certificate') || title.includes('certification')) return 'https://img.icons8.com/fluency/96/certificate.png';
  if (title.includes('recognition') || title.includes('acknowledged')) return 'https://img.icons8.com/fluency/96/medal.png';
  if (title.includes('winner') || title.includes('first place')) return 'https://img.icons8.com/fluency/96/medal-first-place.png';
  if (title.includes('volunteer') || title.includes('community')) return 'https://img.icons8.com/fluency/96/charity.png';
  if (title.includes('patent') || title.includes('invention')) return 'https://img.icons8.com/fluency/96/idea.png';
  if (title.includes('publication') || title.includes('paper') || title.includes('research')) return 'https://img.icons8.com/fluency/96/document.png';
  if (title.includes('leadership') || title.includes('lead')) return 'https://img.icons8.com/fluency/96/conference-call.png';
  
  return undefined;
};

// Determine a color theme based on the achievement
const getAchievementColors = (achievement: AchievementType) => {
  const title = achievement.title.toLowerCase();
  
  if (title.includes('excellence') || title.includes('outstanding')) {
    return {
      gradient: 'from-amber-400 to-yellow-500',
      softGradient: 'from-amber-50 to-yellow-50',
      darkGradient: 'from-amber-900/20 to-yellow-900/20',
      textGradient: 'from-amber-500 to-yellow-600',
      shadow: 'shadow-amber-200',
      darkShadow: 'shadow-amber-900/20',
      icon: 'text-amber-500'
    };
  }
  
  if (title.includes('innovation') || title.includes('creative')) {
    return {
      gradient: 'from-purple-400 to-indigo-500',
      softGradient: 'from-purple-50 to-indigo-50',
      darkGradient: 'from-purple-900/20 to-indigo-900/20',
      textGradient: 'from-purple-500 to-indigo-600',
      shadow: 'shadow-purple-200',
      darkShadow: 'shadow-purple-900/20',
      icon: 'text-purple-500'
    };
  }
  
  if (title.includes('leadership') || title.includes('lead')) {
    return {
      gradient: 'from-blue-400 to-cyan-500',
      softGradient: 'from-blue-50 to-cyan-50',
      darkGradient: 'from-blue-900/20 to-cyan-900/20',
      textGradient: 'from-blue-500 to-cyan-600',
      shadow: 'shadow-blue-200',
      darkShadow: 'shadow-blue-900/20',
      icon: 'text-blue-500'
    };
  }
  
  // Default colors
  return {
    gradient: 'from-teal-400 to-emerald-500',
    softGradient: 'from-teal-50 to-emerald-50',
    darkGradient: 'from-teal-900/20 to-emerald-900/20',
    textGradient: 'from-teal-500 to-emerald-600',
    shadow: 'shadow-teal-200',
    darkShadow: 'shadow-teal-900/20',
    icon: 'text-teal-500'
  };
};

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  const [activeAchievement, setActiveAchievement] = useState<number | null>(null);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  
  // Staggered animation effect for cards
  useEffect(() => {
    const timer = setTimeout(() => {
      const ids = achievements.map(a => a.id);
      setAnimatedItems(ids);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [achievements]);
  
  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <div className="w-2 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mr-4"></div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
          Achievements & Certifications
        </h2>
      </div>
      
      {/* Futuristic AI-themed decorative elements */}
      <div className="relative mb-8 overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute -top-16 right-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-16 left-20 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Digital circuit pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="40" viewBox="0 0 400 40" preserveAspectRatio="none">
            <path d="M0,20 L400,20" stroke="rgba(56,189,248,0.3)" strokeWidth="0.5" />
            <path d="M20,0 L20,40" stroke="rgba(56,189,248,0.3)" strokeWidth="0.5" />
            <path d="M80,0 L80,40" stroke="rgba(56,189,248,0.3)" strokeWidth="0.5" />
            <path d="M140,0 L140,40" stroke="rgba(56,189,248,0.3)" strokeWidth="0.5" />
            <path d="M200,0 L200,40" stroke="rgba(56,189,248,0.3)" strokeWidth="0.5" />
            <path d="M260,0 L260,40" stroke="rgba(56,189,248,0.3)" strokeWidth="0.5" />
            <path d="M320,0 L320,40" stroke="rgba(56,189,248,0.3)" strokeWidth="0.5" />
            <path d="M380,0 L380,40" stroke="rgba(56,189,248,0.3)" strokeWidth="0.5" />
            {/* Pulsing dots at intersections */}
            <circle cx="20" cy="20" r="1.5" fill="rgba(56,189,248,0.7)" className="animate-ping" style={{animationDuration: '3s'}} />
            <circle cx="80" cy="20" r="1.5" fill="rgba(56,189,248,0.7)" className="animate-ping" style={{animationDuration: '4s', animationDelay: '0.5s'}} />
            <circle cx="140" cy="20" r="1.5" fill="rgba(56,189,248,0.7)" className="animate-ping" style={{animationDuration: '3.5s', animationDelay: '1s'}} />
            <circle cx="200" cy="20" r="1.5" fill="rgba(56,189,248,0.7)" className="animate-ping" style={{animationDuration: '4.5s', animationDelay: '1.5s'}} />
            <circle cx="260" cy="20" r="1.5" fill="rgba(56,189,248,0.7)" className="animate-ping" style={{animationDuration: '3.8s', animationDelay: '0.8s'}} />
            <circle cx="320" cy="20" r="1.5" fill="rgba(56,189,248,0.7)" className="animate-ping" style={{animationDuration: '4.2s', animationDelay: '1.2s'}} />
            <circle cx="380" cy="20" r="1.5" fill="rgba(56,189,248,0.7)" className="animate-ping" style={{animationDuration: '3.3s', animationDelay: '0.3s'}} />
          </svg>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => {
          const isActive = activeAchievement === achievement.id;
          const isAnimated = animatedItems.includes(achievement.id);
          const colors = getAchievementColors(achievement);
          
          return (
            <Card 
              key={achievement.id} 
              className={`group overflow-hidden transition-all duration-500 ease-out border-0 backdrop-blur-sm
                ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                ${isActive 
                  ? `shadow-lg ${colors.shadow} dark:${colors.darkShadow} scale-[1.02]` 
                  : 'shadow-md hover:shadow-lg'
                }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: isActive ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)'
              }}
              onMouseEnter={() => setActiveAchievement(achievement.id)}
              onMouseLeave={() => setActiveAchievement(null)}
            >
              {/* Futuristic accent elements */}
              <div className="relative">
                {/* Color accent top bar with pulse effect */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${colors.gradient}`}>
                  <div className={`absolute h-1.5 w-8 left-0 bg-white opacity-50 ${isActive ? 'animate-pulse' : ''}`} 
                       style={{animationDuration: '2s'}}></div>
                </div>
                
                {/* Digital blip animation */}
                <div className={`absolute top-0 right-0 w-1 h-1 bg-white rounded-full opacity-0 ${isActive ? 'animate-ping' : ''}`}
                     style={{animationDuration: '1.5s'}}></div>
              </div>
              
              <CardContent className={`p-6 bg-gradient-to-br ${colors.softGradient} dark:${colors.darkGradient} relative overflow-hidden`}>
                {/* Background tech pattern */}
                {isActive && (
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <pattern id={`grid-${achievement.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                      <rect width="100%" height="100%" fill={`url(#grid-${achievement.id})`} />
                    </svg>
                  </div>
                )}
                
                <div className="flex items-start gap-5 relative z-10">
                  {/* Achievement icon with animation */}
                  <div className="flex-shrink-0">
                    <div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white overflow-hidden transition-all duration-500 ease-out p-3 ${
                        isActive ? 'scale-110 rotate-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'shadow-md'
                      }`}
                    >
                      {getAchievementIcon(achievement) ? (
                        <img 
                          src={getAchievementIcon(achievement)} 
                          alt={achievement.title}
                          className={`w-10 h-10 object-contain ${isActive ? 'animate-pulse' : ''}`}
                          style={{animationDuration: '3s'}}
                        />
                      ) : (
                        <i className={`${achievement.icon} text-2xl ${isActive ? 'animate-pulse' : ''}`}
                           style={{animationDuration: '3s'}}></i>
                      )}
                      
                      {/* Corner accent dot */}
                      {isActive && (
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div 
                      className={`mb-1 transform transition-transform duration-500 ${
                        isActive ? 'translate-x-2' : ''
                      }`}
                    >
                      <Badge className={`bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-xs rounded-md px-2 py-1 mb-2 text-gray-600 dark:text-gray-300 font-medium border-l-2 ${isActive ? 'border-blue-500' : 'border-transparent'}`}>
                        {achievement.date}
                      </Badge>
                    </div>
                    
                    <h3 
                      className={`text-xl font-bold bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent mb-2 transition-all duration-500 ${
                        isActive ? 'translate-x-2' : ''
                      }`}
                    >
                      {achievement.title}
                    </h3>
                    
                    <p 
                      className={`text-gray-600 dark:text-gray-400 text-sm font-medium mb-3 transition-all duration-500 ${
                        isActive ? 'translate-x-2' : ''
                      }`}
                    >
                      {achievement.organization}
                    </p>
                    
                    <p 
                      className={`text-gray-700 dark:text-gray-300 transition-all duration-500 ${
                        isActive ? 'translate-x-2' : ''
                      }`}
                    >
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
