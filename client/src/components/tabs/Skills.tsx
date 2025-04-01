
import React from "react";
import { SkillCategory, Tool } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillsProps {
  skillCategories: SkillCategory[];
  tools: Tool[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories, tools }) => {
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
                <i className="fas fa-code text-xl text-blue-600 dark:text-blue-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">J2EE Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillSets.j2ee.map((skill, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                  {skill}
                </Badge>
              ))}
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
              {[...skillSets.cloud, ...skillSets.aws].map((skill, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300">
                  {skill}
                </Badge>
              ))}
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

export default Skills;
