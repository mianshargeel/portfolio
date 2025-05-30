import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TEXTS } from '../../constants/texts';
import { Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


interface TranslationKeys {
  iAmLocated: string;
  iAmOpenToRemote: string;
  iAmOpenToRelocate: string;
}

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  texts = TEXTS;
  typedText: string = '';
  translatedTextKeys: (keyof TranslationKeys)[] = [
    'iAmLocated',
    'iAmOpenToRemote',
    'iAmOpenToRelocate'
  ];
  textValues: string[] = [];
  currentLang: 'en' | 'de' = 'en';
  currentIndex = 0;
  charIndex = 0;
  isDeleting = false;

  imageSources: string[] = [
    './../../../assets/img/whyme/icon.png',
    './../../../assets/img/whyme/remote.png',
    './../../../assets/img/whyme/relocate.png'
  ];
  private currentLanguage = new BehaviorSubject<'en' | 'de'>('en');
  language$ = this.currentLanguage.asObservable();//is an Observable → components can subscribe.
  langSubscription!: Subscription;

  constructor(public languageService: LanguageService) { }
  
  ngOnInit() {
    this.updateTextValues();
    this.typeLoop();
  
    // Subscribe to language change if LanguageService provides observable
    this.langSubscription = this.languageService.language$.subscribe((lang: 'en' | 'de') => {
      this.updateTextValues();
      this.restartTyping();
    });
  }
  

  get currentImage(): string {
    return this.imageSources[this.currentIndex];
  }

  updateTextValues() {
    const lang = this.languageService.getCurrentLanguage() as 'en' | 'de';
  
    this.textValues = this.translatedTextKeys.map(
      key => this.texts[lang][key as keyof TranslationKeys]
    );
  }
  
  typeLoop() {
    const currentFullText = this.textValues[this.currentIndex];
  
    if (this.isDeleting) {
      this.typedText = currentFullText.substring(0, this.charIndex--);
    } else {
      this.typedText = currentFullText.substring(0, this.charIndex++);
    }
  
    let speed = this.isDeleting ? 40 : 80;
  
    if (!this.isDeleting && this.charIndex === currentFullText.length) {
      speed = 1500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.textValues.length;
      speed = 500;
    }
  
    setTimeout(() => this.typeLoop(), speed);
  }

  get currentTexts() {
    const lang = this.languageService.getCurrentLanguage() as 'en' | 'de';
    return this.texts[lang];
  }
  restartTyping() {
    this.currentIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.typedText = '';
    // typeLoop will continue, it will now use updated textValues
  }
  ngOnDestroy() {
    this.langSubscription?.unsubscribe(); //will clean the subscription when the component is destroyed.
  }
}
