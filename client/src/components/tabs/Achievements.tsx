import React, { useState } from "react";
import { Achievement as AchievementType } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AchievementsProps {
  achievements: AchievementType[];
}

// Helper function to generate themed achievement badges
const getAchievementIcon = (title: string): string | undefined => {
  const name = title.toLowerCase();
  
  if (name.includes('award') || name.includes('achievement')) return 'https://img.icons8.com/fluency/96/trophy.png';
  if (name.includes('certificate') || name.includes('certification')) return 'https://img.icons8.com/fluency/96/certificate.png';
  if (name.includes('recognition') || name.includes('acknowledged')) return 'https://img.icons8.com/fluency/96/medal.png';
  if (name.includes('winner') || name.includes('first place')) return 'https://img.icons8.com/fluency/96/medal-first-place.png';
  if (name.includes('volunteer') || name.includes('community')) return 'https://img.icons8.com/fluency/96/charity.png';
  if (name.includes('patent') || name.includes('invention')) return 'https://img.icons8.com/fluency/96/idea.png';
  if (name.includes('publication') || name.includes('paper') || name.includes('research')) return 'https://img.icons8.com/fluency/96/document.png';
  if (name.includes('leadership') || name.includes('lead')) return 'https://img.icons8.com/fluency/96/conference-call.png';
  
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
  
  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Achievements & Awards</h2>
      </div>
      
      {/* Decorative elements */}
      <div className="relative mb-8">
        <div className="absolute -top-16 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement) => {
          const isActive = activeAchievement === achievement.id;
          const colors = getAchievementColors(achievement);
          
          return (
            <Card 
              key={achievement.id} 
              className={`group overflow-hidden transition-all duration-500 ease-out border-0 ${
                isActive 
                  ? `shadow-lg ${colors.shadow} dark:${colors.darkShadow} scale-[1.02]` 
                  : 'shadow-md hover:shadow-lg'
              }`}
              onMouseEnter={() => setActiveAchievement(achievement.id)}
              onMouseLeave={() => setActiveAchievement(null)}
            >
              {/* Color accent top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${colors.gradient}`}></div>
              
              <CardContent className={`p-6 bg-gradient-to-br ${colors.softGradient} dark:${colors.darkGradient}`}>
                <div className="flex items-start gap-5">
                  {/* Achievement icon with animation */}
                  <div className="flex-shrink-0">
                    <div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white shadow-md overflow-hidden transition-all duration-500 ease-out p-3 ${
                        isActive ? 'scale-110 rotate-6' : ''
                      }`}
                    >
                      {getAchievementIcon(achievement.title) ? (
                        <img 
                          src={getAchievementIcon(achievement.title)} 
                          alt={achievement.title}
                          className="w-10 h-10 object-contain"
                        />
                      ) : (
                        <i className={`${achievement.icon} text-2xl`}></i>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div 
                      className={`mb-1 transform transition-transform duration-500 ${
                        isActive ? 'translate-x-2' : ''
                      }`}
                    >
                      <Badge className={`bg-white dark:bg-gray-800 text-xs rounded-md px-2 py-1 mb-2 text-gray-600 dark:text-gray-400 font-medium`}>
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
