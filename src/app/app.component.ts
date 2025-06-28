import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hero></app-hero>
    

  <div class="dark-section">
    <app-about></app-about>
    <app-services></app-services>
    <app-projects></app-projects>
  </div>
    <app-contact></app-contact>

  `,
  styleUrls: ['./app.scss'],
  standalone: false
})
export class AppComponent {}
