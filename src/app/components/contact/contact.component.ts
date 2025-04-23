import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ResumeService } from '../../services/resume.service';
import { ResumeData } from '../../models/resume.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  faPaperPlane = faPaperPlane;
  
  resumeData: ResumeData;
  contactForm: FormGroup;
  submitted = false;
  submitSuccess = false;
  
  constructor(
    private resumeService: ResumeService,
    private fb: FormBuilder
  ) {
    this.resumeData = this.resumeService.getResumeData();
    
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      // In a real application, you would send this to a backend service
      console.log('Form submitted:', this.contactForm.value);
      this.submitSuccess = true;
      
      // Reset the form
      setTimeout(() => {
        this.contactForm.reset();
        this.submitted = false;
        
        // Reset success message after a delay
        setTimeout(() => {
          this.submitSuccess = false;
        }, 3000);
      }, 100);
    }
  }
  
  get formControls() {
    return this.contactForm.controls;
  }
}