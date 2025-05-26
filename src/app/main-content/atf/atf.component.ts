import { Component, HostListener, OnInit, ChangeDetectorRef  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { TEXTS } from '../../constants/texts';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuService } from '../../services/menu.service';
import { Observable, Subscription  } from 'rxjs';
import { AsyncPipe } from '@angular/common';


interface Media{
  name: string;
  img: string;
  url: string;
}
@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [RouterModule, NavbarComponent, AsyncPipe],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent  implements OnInit {

  texts = TEXTS;
  // isMenuOpen = false;
  isMobileView = false;
  menuOpen$!: Observable<boolean>;
  private menuSubscription?: Subscription; // For cleanup

  constructor(public languageService: LanguageService,  public menuService: MenuService, private cd: ChangeDetectorRef ) {}

  ngOnInit() {
    // console.log('[ATF] Component INITIALIZED!');
      this.checkScreenSize();
    this.menuOpen$ = this.menuService.menuOpen$;
  }
  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 830;
    if (!this.isMobileView && this.menuService.isOpen()) {
      // console.log('[checkScreenSize] Closing menu because screen is now desktop');
      this.menuService.close();
    }
  }
  
   
    get currentTexts() {
      const lang = this.languageService.getCurrentLanguage() as 'en' | 'de';
      return this.texts[lang];
  }
 
  @HostListener('window:resize')
  onResize() {
    this.isMobileView = window.innerWidth <= 830;
    // Remove this auto-close unless absolutely necessary:
    // if (!this.isMobileView && this.menuService.isOpen()) {
    //   this.menuService.close();
    // }
  }
  
  toggleMenu() {
    this.menuService.toggle();
    this.cd.detectChanges();
  }

  medialinks: Media[] = [
    {
      name: 'Email', 
      img: './../../../assets/img/1-hero/email.png',
      url: '/contact'
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
  ngOnDestroy() {
    // console.log('[ATF] Component DESTROYED!');
    this.menuSubscription?.unsubscribe();
  }
  handleOverlayClick(event: MouseEvent) {
    console.log('Clicked at:', event.target);
    if (event.target === event.currentTarget) {
      this.menuService.close();
    }
  }
}
