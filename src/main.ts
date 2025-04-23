import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(App, {
  providers: [
    provideRouter([])
  ]
});