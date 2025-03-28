import { Component } from '@angular/core';
import { Project } from '../../interfaces/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  selectedIndex = 0;
  projects: Project[] = [
    {
      title: 'DA Bubble',
      duration: '3 weeks',
      description: 'Slack clone app...',
      about: 'This App is a Slack Clone App...',
      workProcess: 'How I organized work...',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/Screenshot project (2).png',
      github: 'www.github.com',
      live: '#'
    },
    {
      title: 'Sharkie',
      duration: '2 weeks',
      description: 'Web Browser Objectoriented Programming App',
      about: 'This Web Browser Game...',
      workProcess: 'How I organized work...',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/Screenshot project.png',
      github: 'www.github.com',
      live: '#'
    },
    {
      title: 'Join',
      duration: '1 Month',
      description: 'Slack clone app...',
      about: 'This App is a Slack Clone App...',
      workProcess: 'How I organized work...',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/Screenshot project (1).png',
      github: 'www.github.com',
      live: '#'
    },
    {
      title: 'Ongoing Project',
      duration: '1 Month',
      description: 'Slack clone app...',
      about: 'This App is a Slack Clone App...',
      workProcess: 'How I organized work...',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/Screenshot project (1).png',
      github: 'www.github.com',
      live: '#'
    }
  ];
selected: any;

}
