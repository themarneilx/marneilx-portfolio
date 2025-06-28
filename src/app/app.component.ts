import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hero></app-hero>
    <app-about></app-about>

  <div class="dark-section">
    <app-services></app-services>
    <app-projects></app-projects>
  </div>

  <div class="contact-section">
    <app-contact></app-contact>
  </div>
  `,
  styleUrls: ['./app.scss'],
  standalone: false
})
export class AppComponent {}
