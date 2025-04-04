import { Component,Input,Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
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
export class NavbarComponent implements AfterViewInit{
  texts = TEXTS;
  @Input() isMobileView: boolean = false;
  @Output() menuClosed = new EventEmitter<void>(); 
  isSticky: boolean = false;
  @ViewChild('navbar', { static: false }) navbarElement!: ElementRef;
  
  constructor(public languageService: LanguageService) { } 

ngAfterViewInit() {
  window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    const heroBottom = heroSection?.getBoundingClientRect().bottom || 0;

    // ✅ If hero section is still visible, unstick navbar
    if (heroBottom > 0) {
      this.isSticky = false;
    } else {
      this.isSticky = true;
    }
  });
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
