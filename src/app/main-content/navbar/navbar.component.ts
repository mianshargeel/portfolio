import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TEXTS } from '../../constants/texts';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  texts = TEXTS;

  constructor(public languageService: LanguageService) {} 

  get currentTexts() {
    return this.texts[this.languageService.getCurrentLanguage() as 'en' | 'de'];
  }

  switchLanguage(lang: 'en' | 'de') {
    this.languageService.setLanguage(lang);
  }
  // switchLanguage(lang: 'en' | 'de') {
  //   this.languageService.setLanguage(lang);
  //   window.location.reload(); // Forces all components to refresh
  // }

}
