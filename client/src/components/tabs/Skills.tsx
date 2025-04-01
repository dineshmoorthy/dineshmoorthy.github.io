import React from "react";
import { SkillCategory, Tool } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";

interface SkillsProps {
  skillCategories: SkillCategory[];
  tools: Tool[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories, tools }) => {
  const renderBadge = (skill: string, category: string) => {
    const style = getBadgeStyle(category);
    const formattedSkill = encodeURIComponent(skill);
    return (
      <img
        key={skill}
        src={`https://img.shields.io/badge/${formattedSkill}-${style.color}?style=for-the-badge&logo=${style.logo}&logoColor=white`}
        alt={skill}
        className="m-1"
      />
    );
  };

  const getBadgeStyle = (category: string) => {
    const styles: { [key: string]: { color: string, logo: string } } = {
      'J2EE': { color: '007396', logo: 'java' },
      'Spring': { color: '6DB33F', logo: 'spring' },
      'AWS': { color: '232F3E', logo: 'amazonaws' },
      'Database': { color: '4479A1', logo: 'mysql' },
      'Testing': { color: 'E34F26', logo: 'junit5' },
      'DevOps': { color: '2496ED', logo: 'docker' }
    };
    return styles[category] || { color: '555555', logo: 'code' };
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
              {renderBadge('Java-17', 'J2EE')}
              {renderBadge('Spring_Boot', 'Spring')}
              {renderBadge('Microservices', 'J2EE')}
              {renderBadge('Docker', 'DevOps')}
              {renderBadge('REST_API', 'J2EE')}
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
              {renderBadge('AWS', 'AWS')}
              {renderBadge('Lambda', 'AWS')}
              {renderBadge('DynamoDB', 'AWS')}
              {renderBadge('S3', 'AWS')}
              {renderBadge('API_Gateway', 'AWS')}
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
              {renderBadge('MySQL', 'Database')}
              {renderBadge('MongoDB', 'Database')}
              {renderBadge('Oracle', 'Database')}
              {renderBadge('DynamoDB', 'AWS')}
            </div>
          </CardContent>
        </Card>

        {/* Testing */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mr-4">
                <i className="fas fa-vial text-xl text-amber-600 dark:text-amber-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Testing & Quality</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {renderBadge('JUnit', 'Testing')}
              {renderBadge('Mockito', 'Testing')}
              {renderBadge('REST_Assured', 'Testing')}
              {renderBadge('SonarQube', 'Testing')}
            </div>
          </CardContent>
        </Card>
        {/* Tools & Infrastructure */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mr-4">
                <i className="fas fa-tools text-xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Tools & Infrastructure</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[...skillSets.buildTools, ...skillSets.versionControl, ...skillSets.cicd].map((skill, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Databases & Storage */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/40 flex items-center justify-center mr-4">
                <i className="fas fa-database text-xl text-green-600 dark:text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Databases & Storage</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillSets.databases.map((skill, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1 bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300">
                  {skill}
                </Badge>
              ))}
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
              {[...skillSets.testing, ...skillSets.codeQuality].map((skill, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1 bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Additional Tools & Technologies */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center mr-4">
                <i className="fas fa-plus-circle text-xl text-cyan-600 dark:text-cyan-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Additional Tools & Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillSets.others.map((skill, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/30 border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const skillSets = {
  j2ee: ["Spring Boot", "Microservices", "Docker", "AJSC 6", "Spring Cloud Contract", "Core Java", "Java 1.6", "Java 8", "Java 17", "JDBC", "Servlets", "JSP", "Java Beans", "J2EE Spring Framework", "Spring MVC", "REST / SOAP Web Services", "SonarQube", "Splunk logs", "Scala (Basic)"],
  testing: ["Junit", "Mockito", "Power Mockito", "Rest Assured", "Spring Cloud Contract", "ALM"],
  servers: ["Apache", "Tomcat", "JBoss Application Server"],
  buildTools: ["Apache Ant", "Apache Maven", "Gradle"],
  ftpTools: ["WinSCP", "SecureFX"],
  databases: ["Oracle", "MongoDB", "MySQL", "DynamoDB"],
  designTools: ["Microsoft Azure RP Pro v7", "StarUML"],
  versionControl: ["SVN", "Clear case", "Git"],
  codeQuality: ["PMD", "Findbugs", "CheckStyle", "Checkmarx", "Sonar Lint"],
  ides: ["Eclipse", "IntelliJ", "STS"],
  methodologies: ["Waterfall", "Agile", "TDD", "BDD"],
  projectTools: ["Jira", "TFS"],
  cicd: ["Jenkins", "Harness"],
  cloud: ["Azure", "Amazon Web Services (AWS)", "PCF (Pivotal Cloud Foundry)"],
  aws: ["DynamoDB", "AWS Lambda", "API Gateway", "IAM", "Security Groups", "CloudWatch", "EC2", "Auto Scaling", "Amazon S3", "ELB", "SQS", "SNS"],
  others: ["Postman", "SOAPUI", "JSON", "XML", "WSDL", "Thymeleaf", "Apache Camel", "Active MQ", "Common Logging Framework", "GWT", "IBM Extreme Scale", "Hibernate", "HPQC", "Citrix", "VDI"]
};

export default Skills;