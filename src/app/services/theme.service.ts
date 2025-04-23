import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  
  constructor() {
    // Check if user has a preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.darkMode.next(savedTheme === 'dark');
    } else {
      // Check if user prefers dark mode at OS level
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.darkMode.next(prefersDark);
    }
  }

  toggleTheme() {
    const newValue = !this.darkMode.value;
    this.darkMode.next(newValue);
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
  }

  isDarkMode() {
    return this.darkMode.value;
  }
}