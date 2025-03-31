import { Component } from '@angular/core';
import { Project } from '../../interfaces/project';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TEXTS } from '../../constants/texts';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  texts = TEXTS;
  
  constructor(public languageService: LanguageService) {}

  // Updated getter with type safety
  get currentTexts() {
    const lang = this.languageService.getCurrentLanguage() as 'en' | 'de';
    return this.texts[lang];
  }

  selectedIndex = 0;
  projects: Project[] = [
    {
      title: 'DA Bubble',
      duration: '3 weeks',
      team: 'Collaborated closely with a cross-functional team using Git and Agile methods, contributing to UI development, code reviews, and feature planning to ensure a smooth and efficient workflow.',
      description: 'Slack clone app...',
      about: 'This is Slack clone App. It is revolutionizes team communication and collaboration with its intuitive interface, real-time messaging and robust channel organization.',
      workProcess: 'I organized my work process using Trello for task management, broke the project into weekly milestones, and followed Agile principles to ensure steady progress and flexibility.',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/Screenshot project (2).png',
      github: 'https://github.com/mianshargeel',
      live: '#'
    },
    {
      title: 'Sharkie',
      duration: '2 weeks',
      team: 'Collaborated closely with a cross-functional team using Git and Agile methods, contributing to UI development, code reviews, and feature planning to ensure a smooth and efficient workflow.',
      description: 'Web Browser Objectoriented Programming App',
      about: 'This is Slack clone App. It is revolutionizes team communication and collaboration with its intuitive interface, real-time messaging and robust channel organization.',
      workProcess: 'I organized my work process using Trello for task management, broke the project into weekly milestones, and followed Agile principles to ensure steady progress and flexibility.',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/Screenshot project.png',
      github: 'https://github.com/mianshargeel',
      live: '#'
    },
    {
      title: 'Join',
      duration: '1 Month',
      team: 'Collaborated closely with a cross-functional team using Git and Agile methods, contributing to UI development, code reviews, and feature planning to ensure a smooth and efficient workflow.',
      description: 'Slack clone app...',
      about: 'This is Slack clone App. It is revolutionizes team communication and collaboration with its intuitive interface, real-time messaging and robust channel organization.',
      workProcess: 'I organized my work process using Trello for task management, broke the project into weekly milestones, and followed Agile principles to ensure steady progress and flexibility.',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/Screenshot project (1).png',
      github: 'whttps://github.com/mianshargeel',
      live: '#'
    },
    {
      title: 'Ongoing Project',
      duration: '3 weeks',
      team: 'Collaborated closely with a cross-functional team using Git and Agile methods, contributing to UI development, code reviews, and feature planning to ensure a smooth and efficient workflow.',
      description: 'Slack clone app...',
      about: 'This is Slack clone App. It is revolutionizes team communication and collaboration with its intuitive interface, real-time messaging and robust channel organization.',
      workProcess: 'I organized my work process using Trello for task management, broke the project into weekly milestones, and followed Agile principles to ensure steady progress and flexibility.',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/Screenshot project (1).png',
      github: 'https://github.com/mianshargeel',
      live: '#'
    }
  ];
selected: any;

}
