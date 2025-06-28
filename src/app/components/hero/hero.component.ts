import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent {
  scrollToAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToServices() {
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  }
}
