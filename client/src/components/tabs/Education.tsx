import React from "react";
import { Education as EducationType } from "@shared/types";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Education & Certifications</h2>
      
      <Timeline>
        {education.map((item, index) => (
          <TimelineItem
            key={item.id}
            icon={<i className={item.degree.includes("Certification") ? "fas fa-certificate text-xl" : "fas fa-graduation-cap text-xl"}></i>}
            date={`${item.startDate} - ${item.endDate}`}
            title={item.degree}
            isLast={index === education.length - 1}
          >
            <h3 className="text-xl font-semibold text-gray-800">{item.field}</h3>
            <p className="text-gray-600 mb-2">{item.institution}</p>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, i) => (
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

export default Education;
