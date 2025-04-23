import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';
import { Education } from '../../models/resume.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: Education[];
  
  constructor(private resumeService: ResumeService) {
    this.education = this.resumeService.getResumeData().education;
  }
}