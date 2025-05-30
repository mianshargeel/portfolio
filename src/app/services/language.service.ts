// src/app/services/language.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<'en' | 'de'>('en');
  language$ = this.currentLanguageSubject.asObservable();

  constructor() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang === 'en' || savedLang === 'de') {
      this.currentLanguageSubject.next(savedLang);
    }
  }

  setLanguage(lang: 'en' | 'de') {
    this.currentLanguageSubject.next(lang);
    localStorage.setItem('preferredLanguage', lang);
  }

  getCurrentLanguage(): 'en' | 'de' {
    return this.currentLanguageSubject.value;
  }
}
