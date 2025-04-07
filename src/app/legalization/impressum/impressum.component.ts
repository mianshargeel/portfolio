import { Component } from '@angular/core';
import { NavbarComponent } from '../../main-content/navbar/navbar.component';
import { TEXTS } from '../../constants/texts';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
   texts = TEXTS;
      
      constructor(public languageService: LanguageService) {}
    
      get currentTexts() {
        const lang = this.languageService.getCurrentLanguage() as 'en' | 'de';
        return this.texts[lang];
      }
}
