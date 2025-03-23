import React from "react";
import { SkillCategory, Tool } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface SkillsProps {
  skillCategories: SkillCategory[];
  tools: Tool[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories, tools }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Professional Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {skillCategories.map((category) => (
          <Card key={category.id}>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-3">
                  <i className={category.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              {category.skills.map((skill, index) => (
                <div className="mb-4" key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" indicatorClassName="bg-primary" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Tools & Technologies</h3>
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <Badge key={tool.id} variant="outline" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg flex items-center h-auto font-normal">
                <i className={`${tool.icon} text-primary mr-2`}></i>
                {tool.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
