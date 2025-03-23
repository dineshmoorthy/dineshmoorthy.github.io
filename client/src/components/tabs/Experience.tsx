import React from "react";
import { Experience as ExperienceType } from "@shared/types";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Work Experience</h2>
      
      <Timeline>
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.id}
            icon={<i className="fas fa-briefcase text-xl"></i>}
            date={`${experience.startDate} - ${experience.endDate}`}
            title={experience.title}
            isLast={index === experiences.length - 1}
          >
            <h3 className="text-xl font-semibold text-gray-800">{experience.company}</h3>
            <p className="text-gray-500 mb-4">{experience.location}</p>
            <p className="text-gray-700 mb-4">{experience.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.skills.map((skill, i) => (
                <Badge key={i} variant="outline" className="bg-gray-100 text-gray-800 font-normal">
                  {skill}
                </Badge>
              ))}
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Experience;
