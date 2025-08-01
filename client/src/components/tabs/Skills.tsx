import React from "react";
import { SkillCategory, Tool } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";

interface SkillsProps {
  skillCategories: SkillCategory[];
  tools: Tool[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories, tools }) => {
  const getBadgeStyle = (skill: string) => {
    const style = {
      java: { color: 'E51F24', logo: 'java' },
      spring: { color: '6DB33F', logo: 'spring' },
      docker: { color: '2496ED', logo: 'docker' },
      aws: { color: '232F3E', logo: 'amazonaws' },
      git: { color: 'F05032', logo: 'git' },
      jenkins: { color: 'D24939', logo: 'jenkins' },
      mysql: { color: '4479A1', logo: 'mysql' },
      mongodb: { color: '47A248', logo: 'mongodb' },
      oracle: { color: 'F80000', logo: 'oracle' },
      junit: { color: '25A162', logo: 'junit5' },
      gradle: { color: '02303A', logo: 'gradle' },
      maven: { color: 'C71A36', logo: 'apachemaven' },
      typescript: { color: '3178C6', logo: 'typescript' },
      azure: { color: '0078D4', logo: 'microsoftazure' },
      postman: { color: 'FF6C37', logo: 'postman' },
      jira: { color: '0052CC', logo: 'jira' }
    };

    const key = Object.keys(style).find(k => skill.toLowerCase().includes(k));
    return key ? style[key] : { color: '555555', logo: 'code' };
  };

  const renderBadge = (skill: string) => {
    const style = getBadgeStyle(skill);
    const formattedSkill = skill.replace(/\s+/g, '_');
    return (
      <img
        key={skill}
        src={`https://img.shields.io/badge/${formattedSkill}-${style.color}?style=for-the-badge&logo=${style.logo}&logoColor=white`}
        alt={skill}
        className="m-1"
      />
    );
  };

  return (
    <div className="animate-fade-in space-y-8">
      <div className="flex items-center mb-8">
        <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Professional Skills</h2>
      </div>

      <div className="grid gap-6">
        {/* J2EE Technologies */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mr-4">
                <i className="fab fa-java text-xl text-blue-600 dark:text-blue-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">J2EE Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillSets.j2ee.map(skill => renderBadge(skill))}
            </div>
          </CardContent>
        </Card>

        {/* Cloud & AWS */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mr-4">
                <i className="fas fa-cloud text-xl text-indigo-600 dark:text-indigo-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Cloud & AWS Services</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[...skillSets.cloud, ...skillSets.aws].map(skill => renderBadge(skill))}
            </div>
          </CardContent>
        </Card>

        {/* Testing & Quality */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mr-4">
                <i className="fas fa-vial text-xl text-amber-600 dark:text-amber-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Testing & Quality</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[...skillSets.testing, ...skillSets.codeQuality].map(skill => renderBadge(skill))}
            </div>
          </CardContent>
        </Card>

        {/* Build Tools & Version Control */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mr-4">
                <i className="fas fa-tools text-xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Build Tools & Version Control</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[...skillSets.buildTools, ...skillSets.versionControl].map(skill => renderBadge(skill))}
            </div>
          </CardContent>
        </Card>

        {/* Databases */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/40 flex items-center justify-center mr-4">
                <i className="fas fa-database text-xl text-green-600 dark:text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Databases</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillSets.databases.map(skill => renderBadge(skill))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Tools */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center mr-4">
                <i className="fas fa-plus-circle text-xl text-cyan-600 dark:text-cyan-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Additional Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillSets.others.map(skill => renderBadge(skill))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const skillSets = {
  j2ee: ["Java_17", "Spring_Boot", "Microservices", "Docker", "REST_API", "SOAP", "JDBC", "Servlets", "JSP", "Spring_MVC"],
  testing: ["JUnit", "Mockito", "REST_Assured", "Spring_Cloud_Contract", "ALM"],
  servers: ["Apache", "Tomcat", "JBoss"],
  buildTools: ["Apache_Ant", "Maven", "Gradle"],
  ftpTools: ["WinSCP", "SecureFX"],
  databases: ["Oracle", "MongoDB", "MySQL", "DynamoDB"],
  designTools: ["Azure_RP", "StarUML"],
  versionControl: ["SVN", "Git", "Clear_Case"],
  codeQuality: ["PMD", "FindBugs", "CheckStyle", "SonarQube", "Checkmarx"],
  ides: ["Eclipse", "IntelliJ", "STS"],
  methodologies: ["Agile", "Waterfall", "TDD", "BDD"],
  projectTools: ["Jira", "TFS"],
  cicd: ["Jenkins", "Harness"],
  cloud: ["Azure", "AWS", "PCF"],
  aws: ["DynamoDB", "Lambda", "API_Gateway", "IAM", "CloudWatch", "EC2", "S3", "ELB", "SQS", "SNS"],
  others: ["Postman", "SOAPUI", "JSON", "XML", "Thymeleaf", "Apache_Camel", "Active_MQ", "Hibernate"]
};

export default Skills;