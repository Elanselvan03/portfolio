export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'technical' | 'soft' | 'language' | 'tool';
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone?: string;
    location: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  projects?: Project[];
}