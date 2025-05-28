// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AtfComponent } from '../../main-content/atf/atf.component';
import { NavbarComponent } from '../../main-content/navbar/navbar.component';
import { LanguageService } from '../../services/language.service';
import { TEXTS } from '../../constants/texts';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  texts = TEXTS;
    
    constructor(public languageService: LanguageService) {}
  
    get currentTexts() {
      const lang = this.languageService.getCurrentLanguage() as 'en' | 'de';
      return this.texts[lang];
    }
}
