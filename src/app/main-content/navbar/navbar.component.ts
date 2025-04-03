import { Component,Input,Output, EventEmitter } from '@angular/core';
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
  @Input() isMobileView: boolean = false;
   @Output() menuClosed = new EventEmitter<void>(); // Add this line

  constructor(public languageService: LanguageService) { } 
  
  handleNavClick(event: Event) {
    if (this.isMobileView) {  // Now matches the @Input name
      event.preventDefault();
      this.menuClosed.emit();
    }
  }
  closeMenu() {
  if (this.isMobileView) {
    // Emit event to header to close menu
    this.menuClosed.emit();
    }
  }

  get currentTexts() {
    return this.texts[this.languageService.getCurrentLanguage() as 'en' | 'de'];
  }

  switchLanguage(lang: 'en' | 'de') {
    this.languageService.setLanguage(lang);
  }

}
