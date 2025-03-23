import { PortfolioData } from '@shared/types';

export const portfolioData: PortfolioData = {
  profile: {
    name: "John Doe",
    title: "Full Stack Developer",
    about: "I'm a passionate full-stack developer with 5+ years of experience building web applications and digital experiences. Specialized in React, Node.js, and cloud architecture, I combine technical expertise with creative problem-solving to deliver elegant, user-centered solutions.",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    website: "www.johndoe.dev",
    phone: "(555) 123-4567",
    resumeLink: "/resume.pdf",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      medium: "https://medium.com"
    }
  },
  experiences: [
    {
      id: 1,
      startDate: "2021",
      endDate: "Present",
      title: "Senior Developer",
      company: "Innovative Tech Inc.",
      location: "San Francisco, CA",
      description: "Led the frontend development team in building a scalable, accessible SaaS platform. Implemented modern CI/CD practices and mentored junior developers.",
      skills: ["React", "TypeScript", "AWS", "Team Leadership"]
    },
    {
      id: 2,
      startDate: "2018",
      endDate: "2021",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "Portland, OR",
      description: "Developed and maintained multiple client web applications. Designed RESTful APIs and implemented responsive frontends following accessibility best practices.",
      skills: ["Node.js", "Express", "MongoDB", "Vue.js"]
    },
    {
      id: 3,
      startDate: "2016",
      endDate: "2018",
      title: "Junior Developer",
      company: "Tech Startup Co.",
      location: "Seattle, WA",
      description: "Started as an intern and quickly progressed to a full-time role. Worked on frontend development using jQuery and Bootstrap, later transitioning to React.",
      skills: ["JavaScript", "React", "CSS", "Git"]
    }
  ],
  skillCategories: [
    {
      id: 1,
      title: "Technical Skills",
      icon: "fas fa-code",
      skills: [
        { name: "JavaScript/TypeScript", percentage: 95 },
        { name: "React/Redux", percentage: 90 },
        { name: "Node.js/Express", percentage: 85 },
        { name: "HTML/CSS/SASS", percentage: 92 },
        { name: "SQL/NoSQL Databases", percentage: 80 }
      ]
    },
    {
      id: 2,
      title: "Cloud & DevOps",
      icon: "fas fa-cloud",
      skills: [
        { name: "AWS", percentage: 85 },
        { name: "Docker/Kubernetes", percentage: 75 },
        { name: "CI/CD (GitHub Actions, Jenkins)", percentage: 80 },
        { name: "Terraform/Infrastructure as Code", percentage: 70 },
        { name: "Monitoring & Logging", percentage: 75 }
      ]
    },
    {
      id: 3,
      title: "Soft Skills",
      icon: "fas fa-users",
      skills: [
        { name: "Team Leadership", percentage: 90 },
        { name: "Communication", percentage: 95 },
        { name: "Problem Solving", percentage: 92 },
        { name: "Project Management", percentage: 85 },
        { name: "Time Management", percentage: 88 }
      ]
    }
  ],
  tools: [
    { id: 1, name: "React", icon: "fab fa-react" },
    { id: 2, name: "Node.js", icon: "fab fa-node-js" },
    { id: 3, name: "TypeScript", icon: "fab fa-js" },
    { id: 4, name: "MongoDB", icon: "fas fa-database" },
    { id: 5, name: "AWS", icon: "fab fa-aws" },
    { id: 6, name: "Docker", icon: "fab fa-docker" },
    { id: 7, name: "Git", icon: "fab fa-git-alt" },
    { id: 8, name: "SASS", icon: "fab fa-sass" },
    { id: 9, name: "Figma", icon: "fab fa-figma" },
    { id: 10, name: "Redux", icon: "fas fa-cogs" },
    { id: 11, name: "Express", icon: "fas fa-server" },
    { id: 12, name: "PostgreSQL", icon: "fas fa-table" }
  ],
  education: [
    {
      id: 1,
      startDate: "2014",
      endDate: "2018",
      degree: "Bachelor's Degree",
      field: "Computer Science",
      institution: "University of Technology",
      description: "Graduated with honors. Specialized in software engineering with a focus on web technologies and distributed systems. Completed a capstone project on real-time data visualization.",
      skills: ["Algorithms", "Data Structures", "Web Development", "Database Systems"]
    },
    {
      id: 2,
      startDate: "2020",
      endDate: "2020",
      degree: "Professional Certification",
      field: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      description: "Earned certification demonstrating expertise in designing distributed systems on AWS. Mastered key services including EC2, S3, RDS, Lambda, and CloudFormation.",
      skills: ["Cloud Architecture", "Serverless", "High Availability", "Scalability"]
    },
    {
      id: 3,
      startDate: "2019",
      endDate: "2019",
      degree: "Professional Certification",
      field: "Full Stack Web Developer",
      institution: "Tech Academy",
      description: "Completed intensive program covering modern web development stack, including React, Node.js, and database management. Built several full-stack applications.",
      skills: ["MERN Stack", "RESTful APIs", "Authentication", "Responsive Design"]
    }
  ],
  achievements: [
    {
      id: 1,
      title: "Hackathon Winner",
      organization: "TechCrunch Disrupt 2022",
      date: "2022",
      description: "Led a team of 4 developers to build an innovative accessibility tool for visually impaired users. Won first place among 50+ competing teams.",
      icon: "fas fa-trophy"
    },
    {
      id: 2,
      title: "Employee of the Year",
      organization: "Innovative Tech Inc., 2022",
      date: "2022",
      description: "Recognized for exceptional leadership and technical contributions that led to a 40% improvement in application performance and user satisfaction.",
      icon: "fas fa-award"
    },
    {
      id: 3,
      title: "Patent Contributor",
      organization: "US Patent #12345678, 2021",
      date: "2021",
      description: "Co-inventor on a patent for an innovative algorithm that optimizes database queries, resulting in significant performance improvements for enterprise applications.",
      icon: "fas fa-lightbulb"
    },
    {
      id: 4,
      title: "Technical Publication",
      organization: "Journal of Web Engineering, 2020",
      date: "2020",
      description: "Published a research paper on performance optimization techniques for React applications, which has been cited by over 200 developers and researchers.",
      icon: "fas fa-book"
    },
    {
      id: 5,
      title: "Community Leadership",
      organization: "2019 - Present",
      date: "2019",
      description: "Founded a local tech mentorship program that has helped over 50 emerging developers launch successful careers in web development.",
      icon: "fas fa-users"
    },
    {
      id: 6,
      title: "Conference Speaker",
      organization: "ReactConf 2021, JSConf 2022",
      date: "2021-2022",
      description: "Delivered talks on advanced React patterns and performance optimization to audiences of 500+ developers. Presentations received highest attendee ratings.",
      icon: "fas fa-chalkboard-teacher"
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
