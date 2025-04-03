import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { TEXTS } from '../../constants/texts';
import { NavbarComponent } from '../navbar/navbar.component';


interface Media{
  name: string;
  img: string;
  url: string;
}
@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {

  texts = TEXTS;
  isMenuOpen = false;
  isMobileView = false;

    ngOnInit() {
    this.checkScreenSize();
  }
  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 830; // Your breakpoint
    if (!this.isMobileView) {
      this.isMenuOpen = false; // Close menu if resizing to desktop
    }
  }
    constructor(public languageService: LanguageService) {}
  
    get currentTexts() {
      const lang = this.languageService.getCurrentLanguage() as 'en' | 'de';
      return this.texts[lang];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 830 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
   
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
