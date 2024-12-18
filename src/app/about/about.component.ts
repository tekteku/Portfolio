import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent {
  public name = 'Taher Chabaane';
  public title = 'Software Engineering Student';
  public description = 'I am a final year software engineering student seeking a graduation internship. I have a strong foundation in software development and am passionate about learning new technologies and solving complex problems.';
  public skills = ['Angular', 'TypeScript', 'Node.js', 'Python', 'SQL'];
  public interests = ['Web Development', 'Cloud Computing', 'AI/ML', 'Open Source'];

  public socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/Taher Chabaane' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/TaherChabaane' },
    { icon: 'fas fa-envelope', url: 'taherch2025@gmail.com' }
  ];
  
  public experiences = [
    { year: '2023', title: 'Software Engineering Intern', company: 'Company Name' },
    { year: '2022', title: 'Web Developer', company: 'Company Name' }
  ];

  public education = {
    degree: 'Bachelor in Software Engineering',
    university: 'Your University',
    year: '2020-2024'
  };

  public isScrolled = false;
  public isMenuOpen = false;
  public activeSection = '#about';
  public menuItems = [
    { href: '#about', label: 'About', icon: 'fas fa-user' },
    { href: '#experience', label: 'Experience', icon: 'fas fa-briefcase' },
    { href: '#education', label: 'Education', icon: 'fas fa-graduation-cap' },
    { href: '#contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  scrollTo(sectionId: string) {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isMenuOpen = false;
      document.body.style.overflow = 'auto';
    }
  }

  private updateActiveSection() {
    this.menuItems.forEach(item => {
      const element = document.querySelector(item.href);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          this.activeSection = item.href;
        }
      }
    });
  }
}
