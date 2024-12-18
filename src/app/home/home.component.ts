import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

interface NatureSection {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  currentSection: string = 'home';
  isMenuOpen: boolean = false;
  welcomeMessage: string = 'Welcome to My Portfolio';
  introduction: string = 'I am a final year software engineering student passionate about technology and innovation. Explore my portfolio to learn more about my projects, skills, and experiences.';
  particles: Array<{x: number, y: number}> = [];
  tiltX = 0;
  tiltY = 0;
  natureSections: NatureSection[] = [
    {
      title: 'About Me',
      description: 'A passionate software engineer with focus on web technologies.'
    },
    {
      title: 'My Projects',
      description: 'Explore my portfolio of innovative projects and solutions.'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createParticles();
    }
  }

  createParticles() {
    if (isPlatformBrowser(this.platformId)) {
      for(let i = 0; i < 50; i++) {
        this.particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight
        });
      }
    }
  }

  onMouseMove(event: MouseEvent) {
    if (isPlatformBrowser(this.platformId)) {
      const x = event.clientX;
      const y = event.clientY;
      
      this.tiltX = (x - window.innerWidth/2) * 0.01;
      this.tiltY = (y - window.innerHeight/2) * 0.01;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
