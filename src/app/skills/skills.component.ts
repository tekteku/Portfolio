import { Component, OnInit, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [CommonModule],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ]),
    trigger('staggerList', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  skillCategories = [
    {
      name: 'Frontend',
      color: '#FF6B6B',
      gradient: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
      skills: ['Angular', 'React', 'Vue.js', 'TypeScript', 'SASS/SCSS']
    },
    {
      name: 'Backend',
      color: '#4ECDC4',
      gradient: 'linear-gradient(135deg, #4ECDC4, #45B7AF)',
      skills: ['Node.js', 'Python', 'Java', 'SQL', 'MongoDB']
    },
    {
      name: 'Tools & DevOps',
      color: '#FFD93D',
      gradient: 'linear-gradient(135deg, #FFD93D, #FFE566)',
      skills: ['Git', 'Docker', 'AWS', 'Jenkins', 'Kubernetes']
    },
    {
      name: 'Design',
      color: '#95D1CC',
      gradient: 'linear-gradient(135deg, #95D1CC, #7FB5B5)',
      skills: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design']
    }
  ];

  delays: { [key: string]: string } = {};
  randomDelays: { [key: string]: number } = {};

  constructor(private appRef: ApplicationRef) {
    // Calculate fixed delays based on position
    this.skillCategories.forEach((category, i) => {
      category.skills.forEach((_, j) => {
        const key = `${i}-${j}`;
        // Fixed delay calculation: (row * 0.1 + column * 0.05) seconds
        this.delays[key] = `${(i * 0.1 + j * 0.05).toFixed(2)}s`;
      });
    });
    // Force a tick to resolve change detection
    this.appRef.tick();

    // Pre-calculate random delays
    this.skillCategories.forEach((category, i) => {
      category.skills.forEach((_, j) => {
        const key = `${i}-${j}`;
        this.randomDelays[key] = Math.random() * 2;
      });
    });
  }

  ngOnInit(): void {
    // Empty since we moved initialization to constructor
  }

  getDelay(categoryIndex: number, skillIndex: number): string {
    return this.delays[`${categoryIndex}-${skillIndex}`];
  }

  getRandomDelay(categoryIndex: number, skillIndex: number): number {
    return this.randomDelays[`${categoryIndex}-${skillIndex}`];
  }
}

