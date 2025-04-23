import { Injectable } from '@angular/core';
import { ResumeData } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private resumeData: ResumeData = {
    name: 'John Smith',
    title: 'Senior Software Developer',
    summary: 'Passionate software developer with over 5 years of experience building web applications with modern JavaScript frameworks. Specializing in Angular, React, and Node.js development with a focus on creating user-friendly, high-performance web applications.',
    contact: {
      email: 'john.smith@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/johnsmith',
      github: 'github.com/johnsmith',
      website: 'johnsmith.dev'
    },
    experiences: [
      {
        company: 'Tech Solutions Inc.',
        position: 'Senior Software Developer',
        duration: 'Jan 2021 - Present',
        description: [
          'Lead developer for enterprise client portal serving 50,000+ users',
          'Implemented CI/CD pipeline reducing deployment time by 40%',
          'Mentored junior developers and conducted code reviews',
          'Modernized legacy application by migrating to Angular 15'
        ],
        technologies: ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'MongoDB']
      },
      {
        company: 'Digital Innovations LLC',
        position: 'Frontend Developer',
        duration: 'Mar 2018 - Dec 2020',
        description: [
          'Developed responsive web applications for various clients',
          'Collaborated with UX designers to implement user-friendly interfaces',
          'Reduced application load time by 30% through code optimization',
          'Implemented automated testing increasing code coverage to 85%'
        ],
        technologies: ['React', 'JavaScript', 'Redux', 'CSS3', 'Jest']
      },
      {
        company: 'Startup Ventures',
        position: 'Junior Developer',
        duration: 'Jun 2016 - Feb 2018',
        description: [
          'Assisted in developing MVP for startup clients',
          'Created reusable UI components library',
          'Participated in daily scrums and agile development process',
          'Optimized applications for maximum speed and scalability'
        ],
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap']
      }
    ],
    education: [
      {
        school: 'University of California, Berkeley',
        degree: 'Master of Science in Computer Science',
        duration: '2014 - 2016',
        description: 'Specialized in Software Engineering and Human-Computer Interaction'
      },
      {
        school: 'San Francisco State University',
        degree: 'Bachelor of Science in Computer Science',
        duration: '2010 - 2014',
        description: 'Graduated with honors, 3.8 GPA'
      }
    ],
    skills: [
      { name: 'Angular', level: 95, category: 'technical' },
      { name: 'TypeScript', level: 90, category: 'technical' },
      { name: 'JavaScript', level: 95, category: 'technical' },
      { name: 'React', level: 85, category: 'technical' },
      { name: 'Node.js', level: 80, category: 'technical' },
      { name: 'HTML/CSS', level: 90, category: 'technical' },
      { name: 'RESTful APIs', level: 85, category: 'technical' },
      { name: 'Git', level: 90, category: 'tool' },
      { name: 'MongoDB', level: 75, category: 'technical' },
      { name: 'SQL', level: 80, category: 'technical' },
      { name: 'Docker', level: 70, category: 'tool' },
      { name: 'Agile/Scrum', level: 85, category: 'soft' },
      { name: 'Problem Solving', level: 95, category: 'soft' },
      { name: 'Communication', level: 90, category: 'soft' },
      { name: 'Team Leadership', level: 85, category: 'soft' }
    ]
  };

  getResumeData(): ResumeData {
    return this.resumeData;
  }
}