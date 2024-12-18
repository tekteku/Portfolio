import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule, NgFor],
  schemas: [NO_ERRORS_SCHEMA],
  animations: [
    trigger('honeycombAnimation', [
      transition(':enter', [
        animate('1s', keyframes([
          style({ transform: 'scale(0.3) rotate(45deg)', opacity: 0, offset: 0 }),
          style({ transform: 'scale(1.2) rotate(-10deg)', opacity: 0.5, offset: 0.5 }),
          style({ transform: 'scale(1) rotate(0deg)', opacity: 1, offset: 1 })
        ]))
      ])
    ]),
    trigger('beeFlying', [
      transition('* => *', [
        animate('3s ease-in-out', keyframes([
          style({ transform: 'translateX(0) translateY(0)', offset: 0 }),
          style({ transform: 'translateX(20px) translateY(-10px)', offset: 0.2 }),
          style({ transform: 'translateX(40px) translateY(0)', offset: 0.4 }),
          style({ transform: 'translateX(20px) translateY(10px)', offset: 0.6 }),
          style({ transform: 'translateX(0) translateY(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Project One',
      description: 'Developed an innovative solution utilizing cutting-edge technologies',
      link: '#',
      technologies: ['Angular', 'TypeScript', 'Node.js'],
      color: '#FFB627'
    },
    {
      name: 'Project Two',
      description: 'Created a scalable and efficient system architecture',
      link: '#',
      technologies: ['React', 'MongoDB', 'Express'],
      color: '#FFA000'
    },
    {
      name: 'Project Three',
      description: 'Implemented robust security features and optimizations',
      link: '#',
      technologies: ['Vue.js', 'Python', 'AWS'],
      color: '#FF8F00'
    }
  ];
}
