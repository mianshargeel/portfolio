import { Component } from '@angular/core';
// import { Project } from '../../interfaces/project';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TEXTS, TranslationKeys  } from '../../constants/texts';

interface Project {
  title: string;
  key: keyof TranslationKeys['projectsContent']; 
  durationKey: keyof TranslationKeys['durations'];
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
      title: 'Join',
      key: 'join',
      durationKey: 'join',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/join.jpeg',
      github: 'https://github.com/mianshargeel/Join-Project.git',
      live: 'https://join.shardzhil.com/'
    },
   
    {
      title: 'Pokedex',
      key: 'pokedex',
      durationKey: 'pokedex',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/poke.jpeg',
      github: 'https://github.com/mianshargeel/PokemonApp.git',
      live: 'https://pokedex.shardzhil.com/'
    },
  
    {
      title: 'El Pollo Loco',
      key: 'elPoloLoco',
      durationKey: 'elPoloLoco',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/polo-loco.jpeg',
      github: 'https://github.com/mianshargeel/El-pollo-loco-Junus.git',
      live: 'https://elpolloloco.shardzhil.com/'
    },
    {
      title: 'DA Bubble',
      key: 'daBubble',
      durationKey: 'daBubble',
      technologies: ['./../../../assets/img/4-projects/Angular.png',
        './../../../assets/img/4-projects/Frame 499.png',
        './../../../assets/img/4-projects/Frame 500.png'],
      image: './../../../assets/img/4-projects/Screenshot project (2).png',
      github: 'https://github.com/D-Aldin/DABubble',
      live: '#'
    },
  ];
// selected: any;

}
