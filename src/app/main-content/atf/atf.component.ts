import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { TEXTS } from '../../constants/texts';


interface Media{
  name: string;
  img: string;
  url: string;
}
@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {

  texts = TEXTS;
  isMenuOpen = false;
    
    constructor(public languageService: LanguageService) {}
  
    // Updated getter with type safety
    get currentTexts() {
      const lang = this.languageService.getCurrentLanguage() as 'en' | 'de';
      return this.texts[lang];
  }
  // switchLanguage(lang: 'de' | 'en') {
  //   this.languageService.setLanguage(lang); 
  // }
  
  
toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

  medialinks: Media[] = [
    {
      name: 'Email', 
      img: './../../../assets/img/1-hero/email.png',
      url: '#contact'
    },
    {
      name: 'Github', 
      img: './../../../assets/img/1-hero/git.png',
      url: 'https://github.com/mianshargeel'
    },
    {
      name: 'Linked-In', 
      img: './../../../assets/img/1-hero/linkedIn.png',
      url: 'https://www.linkedin.com/in/mukhammad-shardzhil-a2565213a/'
    }
  ]; 

  scrollToDown() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
