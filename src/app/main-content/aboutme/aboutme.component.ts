import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TEXTS } from '../../constants/texts';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  texts = TEXTS;
  
  constructor(public languageService: LanguageService) {}

  get currentTexts() {
    const lang = this.languageService.getCurrentLanguage() as 'en' | 'de';
    return this.texts[lang];
  }
}
