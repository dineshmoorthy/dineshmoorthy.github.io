import React from "react";
import { SkillCategory, Tool } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillsProps {
  skillCategories: SkillCategory[];
  tools: Tool[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories, tools }) => {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="flex items-center mb-8">
        <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Professional Skills</h2>
      </div>

      <div className="grid gap-8">
        {skillCategories.map((category) => (
          <Card key={category.id} className="overflow-hidden border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mr-4">
                  <i className={`${category.icon} text-xl text-blue-600 dark:text-blue-400`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="px-4 py-2 text-sm bg-blue-50 dark:bg-blue-900/30 
                             border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300
                             hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <div className="flex items-center mb-6">
          <div className="w-2 h-6 bg-indigo-600 rounded-full mr-4"></div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Tools & Technologies</h3>
        </div>

        <Card className="border-0 shadow-lg bg-white dark:bg-gray-800/50">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <Badge 
                  key={tool.id}
                  variant="outline"
                  className="px-4 py-2 text-sm bg-indigo-50 dark:bg-indigo-900/30
                           border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300
                           hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors
                           flex items-center"
                >
                  <i className={`${tool.icon} mr-2`}></i>
                  {tool.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;