import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ResumeService } from '../../services/resume.service';
import { ResumeData } from '../../models/resume.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faArrowUp = faArrowUp;
  
  resumeData: ResumeData;
  currentYear: number = new Date().getFullYear();
  
  constructor(private resumeService: ResumeService) {
    this.resumeData = this.resumeService.getResumeData();
  }
  
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}