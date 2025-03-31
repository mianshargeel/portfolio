// src/app/services/language.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = 'en';

  setLanguage(lang: 'en' | 'de') {
    this.currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  constructor() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang === 'en' || savedLang === 'de') {
      this.currentLanguage = savedLang;
    }
  }
}