import { Component,Input,Output, EventEmitter, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TEXTS } from '../../constants/texts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  texts = TEXTS;
  @Input() isMobileView: boolean = false;
  @Output() menuClosed = new EventEmitter<void>(); 
  isAtTop: boolean = false;
  
  constructor(public languageService: LanguageService) { } 

@HostListener('window:scroll', [])
onWindowScroll() {
    this.isAtTop = window.scrollY > 10;
  }

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
