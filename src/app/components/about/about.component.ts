import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';
import { ResumeData } from '../../models/resume.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  resumeData: ResumeData;
  
  constructor(private resumeService: ResumeService) {
    this.resumeData = this.resumeService.getResumeData();
  }
}