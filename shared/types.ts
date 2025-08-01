export interface Experience {
  id: number;
  startDate: string;
  endDate: string | "Present";
  title: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  id: number;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Tool {
  id: number;
  name: string;
  icon: string;
}

export interface Education {
  id: number;
  startDate: string;
  endDate: string;
  degree: string;
  field: string;
  institution: string;
  description: string;
  skills: string[];
}

export interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
  skills: string[];
  demoLink: string;
  sourceLink: string;
}

export interface FutureProject {
  id: number;
  title: string;
  description: string;
  plannedDate: string;
  type: string;
  image: string;
  skills: string[];
  githubLink?: string;
  websiteLink?: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  about: string;
  location: string;
  email: string;
  website: string;
  phone: string;
  profileImage?: string;
  resumeLink: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    medium?: string;
  };
}

export interface PortfolioData {
  profile: ProfileInfo;
  experiences: Experience[];
  skillCategories: SkillCategory[];
  tools: Tool[];
  education: Education[];
  achievements: Achievement[];
  projects: Project[];
  futureProjects: FutureProject[];
}
