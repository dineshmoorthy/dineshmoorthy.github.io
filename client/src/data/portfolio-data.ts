import { PortfolioData } from '@shared/types';

export const portfolioData: PortfolioData = {
  profile: {
    name: "Dinesh Dakshinamoorthy",
    title: "Senior Software Engineer",
    about: "Over 13+ years of IT Experience in Requirements Analysis, Planning, Design, Development and Implementation, involved in all aspects of SDLC. Efficient communicator and proven team player with expertise in Java, Spring Boot, and cloud technologies.",
    location: "United Kingdom",
    email: "contactdineshmoorthy@gmail.com",
    website: "portfolio link",
    phone: "+44-7553688946",
    resumeLink: "/resume.pdf",
    socialLinks: {
      github: "https://github.com/dineshmoorthy",
      linkedin: "https://linkedin.com/in/dinesh-dakshinamoorthy87",
      twitter: "https://twitter.com",
      medium: "https://medium.com"
    }
  },
  experiences: [
    {
      id: 1,
      startDate: "Feb 2022",
      endDate: "Aug 2024",
      title: "Senior Software Engineer",
      company: "Wells Fargo International Solutions Private Ltd",
      location: "United Kingdom",
      description: "Migrated Java 8 to Java 17 using Spring Boot 2.3.6 to Spring Boot 3.x along with Junit 4 to Junit 5, which optimized performance, security, and language features. Migrated Jenkins to harness CI pipeline, achieved a 35% reduction in deployment time with cost savings and 25% uptick in development velocity. Migrated from Cron/scheduled batch jobs to Kafka-based message-driven system for instant balance rather than overnight update.",
      skills: ["Java 17", "Spring Boot 3.x", "Junit 5", "Harness CI", "Kafka"]
    },
    {
      id: 2,
      startDate: "June 2021",
      endDate: "Jan 2022",
      title: "Software Engineer",
      company: "Wells Fargo International Solutions Private Ltd",
      location: "United Kingdom",
      description: "Written test scripts in (ALM) Application Life cycle Management Tool. Identified gaps in Technical specific design documents and Discussed across the teams to resolve the dependencies for the stories as per JIRA.",
      skills: ["Java", "Spring Boot", "Testing", "JIRA", "ALM"]
    },
    {
      id: 3,
      startDate: "Oct 2016",
      endDate: "June 2021",
      title: "Technical Lead",
      company: "HCL Technologies Ltd",
      location: "India",
      description: "Developed Java projects for clients like ING Bank-Australia, Century Link, AT&T, ACT. Developed Microservices projects, Optimized code quality. As a Team Lead, I led a team of 7 Software Engineers and delegated tasks to team members and achieved 100% successful deliverables. Developed an API in serverless infrastructure using AWS Lambda and API Gateway to handle peak loads of 1 million requests per hour during seasonal sales.",
      skills: ["Java", "Microservices", "AWS Lambda", "API Gateway", "Team Leadership"]
    },
    {
      id: 4,
      startDate: "May 2014",
      endDate: "Sep 2016",
      title: "Software Engineer",
      company: "Hexaware Technologies",
      location: "India",
      description: "Worked in Java based development projects for clients like Delta Airlines, Aon Hewitt. Involved in requirement gathering, Performed comprehensive code reviews and led weekly coding standards sessions, increasing team code quality by 20%. Debugged and fixed SEV3 and SEV4 production issues.",
      skills: ["Java", "Code Reviews", "Debugging", "Production Support"]
    },
    {
      id: 5,
      startDate: "Oct 2010",
      endDate: "May 2014",
      title: "Software Engineer",
      company: "Notus Soft Solutions",
      location: "India",
      description: "Implemented backend Java code and tested the functionality for clients like Rane Groups, GV Builders. Involved in requirement gathering phase till delivery and taking up regular status calls.",
      skills: ["Java", "Backend Development", "Testing", "Requirement Gathering"]
    }
  ],
  skillCategories: [
    {
      id: 1,
      title: "J2EE Technologies",
      icon: "fas fa-code",
      skills: [
        { name: "Spring Boot", percentage: 95 },
        { name: "Microservices", percentage: 90 },
        { name: "Java (8, 17)", percentage: 95 },
        { name: "REST/SOAP Web Services", percentage: 90 },
        { name: "Junit/Mockito", percentage: 85 }
      ]
    },
    {
      id: 2,
      title: "Cloud & DevOps",
      icon: "fas fa-cloud",
      skills: [
        { name: "AWS", percentage: 85 },
        { name: "Docker", percentage: 80 },
        { name: "CI/CD (Jenkins, Harness)", percentage: 85 },
        { name: "PCF (Pivotal Cloud Foundry)", percentage: 75 },
        { name: "Azure", percentage: 70 }
      ]
    },
    {
      id: 3,
      title: "Databases & Tools",
      icon: "fas fa-database",
      skills: [
        { name: "Oracle", percentage: 85 },
        { name: "MongoDB", percentage: 80 },
        { name: "MySQL", percentage: 85 },
        { name: "DynamoDB", percentage: 75 },
        { name: "SonarQube", percentage: 85 }
      ]
    },
    {
      id: 4,
      title: "Soft Skills",
      icon: "fas fa-users",
      skills: [
        { name: "Team Leadership", percentage: 90 },
        { name: "Communication", percentage: 95 },
        { name: "Problem Solving", percentage: 92 },
        { name: "Project Management", percentage: 85 },
        { name: "Agile Methodologies", percentage: 90 }
      ]
    }
  ],
  tools: [
    { id: 1, name: "Spring Boot", icon: "fas fa-leaf" },
    { id: 2, name: "AWS Lambda", icon: "fab fa-aws" },
    { id: 3, name: "Java", icon: "fab fa-java" },
    { id: 4, name: "MongoDB", icon: "fas fa-database" },
    { id: 5, name: "Oracle", icon: "fas fa-database" },
    { id: 6, name: "Docker", icon: "fab fa-docker" },
    { id: 7, name: "Git", icon: "fab fa-git-alt" },
    { id: 8, name: "Kafka", icon: "fas fa-stream" },
    { id: 9, name: "Junit", icon: "fas fa-vial" },
    { id: 10, name: "Microservices", icon: "fas fa-cubes" },
    { id: 11, name: "Jenkins", icon: "fas fa-server" },
    { id: 12, name: "JIRA", icon: "fab fa-jira" }
  ],
  education: [
    {
      id: 1,
      startDate: "2023",
      endDate: "2025",
      degree: "MSc",
      field: "Advanced Computer Science",
      institution: "University of Leicester, United Kingdom",
      description: "Pursuing a Master's degree in Advanced Computer Science, focusing on advanced software engineering concepts, AI, and computer systems.",
      skills: ["Advanced Algorithms", "Machine Learning", "Software Engineering", "Research Methods"]
    },
    {
      id: 2,
      startDate: "2005",
      endDate: "2009",
      degree: "Bachelor of Engineering",
      field: "Electronics & Communication",
      institution: "Anna University, Chennai, India",
      description: "Completed Bachelor's degree in Electronics & Communication Engineering, focusing on electronics systems, communication protocols, and engineering fundamentals.",
      skills: ["Electronics", "Communication Systems", "Engineering Principles", "Circuit Design"]
    },
    {
      id: 3,
      startDate: "2022",
      endDate: "2022",
      degree: "Certification",
      field: "Microsoft Azure Fundamentals (AZ-900)",
      institution: "Microsoft",
      description: "Completed Microsoft Azure Fundamentals certification, demonstrating understanding of cloud concepts, Azure services, security, privacy, compliance, and trust.",
      skills: ["Cloud Concepts", "Azure Services", "Security", "Compliance"]
    },
    {
      id: 4,
      startDate: "2013",
      endDate: "2013",
      degree: "Certification",
      field: "Oracle Certified Professional, Java SE 6 Programmer",
      institution: "Oracle University",
      description: "Achieved Oracle Certified Professional status for Java SE 6, demonstrating proficiency in Java programming language fundamentals and application development.",
      skills: ["Java Programming", "OOP Concepts", "Java SE APIs", "Software Development"]
    },
    {
      id: 5,
      startDate: "2022",
      endDate: "2022",
      degree: "IELTS Academic",
      field: "Overall 6.5",
      institution: "Cambridge University",
      description: "Achieved an overall band score of 6.5 in the IELTS Academic test, demonstrating strong English language proficiency for academic purposes.",
      skills: ["English Proficiency", "Academic Writing", "Communication Skills"]
    },
    {
      id: 6,
      startDate: "2020",
      endDate: "2020",
      degree: "IELTS General",
      field: "Overall 6.5",
      institution: "Cambridge University",
      description: "Achieved an overall band score of 6.5 in the IELTS General test, demonstrating strong English language proficiency for general purposes.",
      skills: ["English Proficiency", "Communication", "Language Skills"]
    }
  ],
  achievements: [
    {
      id: 1,
      title: "Java Migration Expert",
      organization: "Wells Fargo, 2023",
      date: "2023",
      description: "Successfully migrated legacy Java 8 applications to Java 17 with Spring Boot 3.x, improving performance and security across enterprise systems.",
      icon: "fab fa-java"
    },
    {
      id: 2,
      title: "CI/CD Pipeline Optimization",
      organization: "Wells Fargo, 2023",
      date: "2023",
      description: "Led the migration from Jenkins to Harness CI pipeline, achieving 35% reduction in deployment time and 25% improvement in development velocity.",
      icon: "fas fa-code-branch"
    },
    {
      id: 3,
      title: "Team Leadership",
      organization: "HCL Technologies, 2019",
      date: "2019",
      description: "Led a team of 7 Software Engineers, delegating tasks effectively and achieving 100% successful deliverables across multiple client projects.",
      icon: "fas fa-users"
    },
    {
      id: 4,
      title: "High-Performance API Development",
      organization: "HCL Technologies, 2018",
      date: "2018",
      description: "Developed a serverless API using AWS Lambda and API Gateway that successfully handled peak loads of 1 million requests per hour during seasonal sales.",
      icon: "fas fa-bolt"
    },
    {
      id: 5,
      title: "Code Quality Champion",
      organization: "Hexaware Technologies, 2015",
      date: "2015",
      description: "Conducted weekly coding standards sessions and comprehensive code reviews, improving team code quality by 20% across projects.",
      icon: "fas fa-check-circle"
    },
    {
      id: 6,
      title: "Oracle Certified Professional",
      organization: "Oracle University, 2013",
      date: "2013",
      description: "Achieved Oracle Certified Professional status for Java SE 6, demonstrating expertise in Java programming fundamentals and application development.",
      icon: "fas fa-certificate"
    }
  ],
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with real-time inventory, payment processing, and order management.",
      type: "Web App",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      skills: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      id: 2,
      title: "Task Manager",
      description: "A productivity app that helps users organize tasks, set reminders, and track their progress on projects.",
      type: "Mobile App",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      skills: ["React Native", "Firebase", "Redux"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "A real-time analytics platform that visualizes complex data sets for business intelligence.",
      type: "Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      skills: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      id: 4,
      title: "Sentiment Analyzer",
      description: "An NLP-powered tool that analyzes customer feedback and social media mentions to gauge brand sentiment.",
      type: "AI Tool",
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      skills: ["Python", "TensorFlow", "React", "FastAPI"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      id: 5,
      title: "Smart Home Hub",
      description: "A central control system for smart home devices with voice commands and automation rules.",
      type: "IoT System",
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      skills: ["Raspberry Pi", "MQTT", "React", "Node.js"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      id: 6,
      title: "Productivity Booster",
      description: "A browser extension that blocks distracting websites and provides focus tools for improved productivity.",
      type: "Browser Extension",
      image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      skills: ["JavaScript", "Chrome API", "Firebase"],
      demoLink: "#",
      sourceLink: "#"
    }
  ],
  futureProjects: [
    {
      id: 1,
      title: "AI-powered Content Generator",
      description: "A machine learning tool that generates high-quality blog posts, social media content, and marketing copy based on simple prompts.",
      plannedDate: "Q2 2025",
      type: "Web Application",
      skills: ["Machine Learning", "NLP", "React", "Node.js", "GPT-4"],
      githubLink: "https://github.com/johndoe/content-generator"
    },
    {
      id: 2,
      title: "Blockchain Portfolio Tracker",
      description: "A comprehensive dashboard for tracking cryptocurrency investments, NFTs, and DeFi positions across multiple blockchains.",
      plannedDate: "Q3 2025",
      type: "Web3 Application",
      skills: ["Ethereum", "Solana", "React", "Web3.js", "TypeScript"],
      githubLink: "https://github.com/johndoe/crypto-portfolio"
    },
    {
      id: 3,
      title: "Augmented Reality Fitness Coach",
      description: "An AR application that provides real-time form correction and personalized workout plans using computer vision.",
      plannedDate: "Q4 2025",
      type: "Mobile Application",
      skills: ["ARKit", "CoreML", "Swift", "Computer Vision", "TensorFlow"],
      githubLink: "https://github.com/johndoe/ar-fitness"
    },
    {
      id: 4,
      title: "Sustainable Smart Home System",
      description: "An IoT ecosystem that optimizes energy usage, reduces waste, and promotes sustainable living through smart devices and AI.",
      plannedDate: "Q1 2026",
      type: "IoT System",
      skills: ["IoT", "Embedded Systems", "Machine Learning", "Cloud Architecture"],
      githubLink: "https://github.com/johndoe/eco-smart-home"
    }
  ]
};
