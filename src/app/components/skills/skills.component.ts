import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';
import { Skill } from '../../models/resume.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[];
  
  technicalSkills: Skill[] = [];
  softSkills: Skill[] = [];
  toolSkills: Skill[] = [];
  
  constructor(private resumeService: ResumeService) {
    this.skills = this.resumeService.getResumeData().skills;
    
    this.technicalSkills = this.skills.filter(skill => skill.category === 'technical');
    this.softSkills = this.skills.filter(skill => skill.category === 'soft');
    this.toolSkills = this.skills.filter(skill => skill.category === 'tool');
  }
}