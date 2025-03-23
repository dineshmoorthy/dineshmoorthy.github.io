import React from "react";
import { Achievement as AchievementType } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";

interface AchievementsProps {
  achievements: AchievementType[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Achievements & Awards</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement) => (
          <Card key={achievement.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg mr-4 flex-shrink-0">
                  <i className={`${achievement.icon} text-lg`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{achievement.organization}</p>
                  <p className="text-gray-700">{achievement.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
