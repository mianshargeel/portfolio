import { Component } from '@angular/core';
// import { Project } from '../../interfaces/project';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TEXTS, TranslationKeys  } from '../../constants/texts';

interface Project {
  title: string;
  key: keyof TranslationKeys['projectsContent']; // Ensures only valid project keys
  duration: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  texts = TEXTS;
  selectedIndex = 0;
  
  constructor(public languageService: LanguageService) {}

  get currentTexts(): TranslationKeys {
    const lang = this.languageService.getCurrentLanguage() as 'en' | 'de';
    return this.texts[lang];
  }

  get currentProjectContent() {
    return this.currentTexts.projectsContent[this.projects[this.selectedIndex].key];
  }

  projects: Project[] = [
    {
      title: 'DA Bubble',
      key: 'daBubble',
      duration: '3 weeks',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/Screenshot project (2).png',
      github: 'https://github.com/mianshargeel',
      live: '#'
    },
    {
      title: 'Pokedex',
      key: 'pokedex',
      duration: '2 weeks',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/poke.jpeg',
      github: 'https://github.com/mianshargeel/PokemonApp.git',
      live: '#'
    },
    {
      title: 'Join',
      key: 'join',
      duration: '1 Month',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/Screenshot project (1).png',
      github: 'https://github.com/mianshargeel/Join-Project.git',
      live: 'https://shardzhil.com/join/'
    },
    {
      title: 'El Polo Loco',
      key: 'elPoloLoco',
      duration: '3 weeks',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/Screenshot project (1).png',
      github: 'https://github.com/mianshargeel/El-pollo-loco-Junus.git',
      live: '#'
    }
  ];
// selected: any;

}
