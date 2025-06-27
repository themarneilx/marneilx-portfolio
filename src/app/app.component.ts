import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-projects></app-projects>
    <app-contact></app-contact>
  `,
  styleUrls: ['./app.scss'],
  standalone: false
})
export class AppComponent {}
