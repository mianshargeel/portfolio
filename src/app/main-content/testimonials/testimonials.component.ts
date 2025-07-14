import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TEXTS } from '../../constants/texts';

type TestimonialKey = 'james' | 'sahre' | 'taher';
interface Teamplayer {
  name: string;
  bgImg: string;
  project: string;
  testimonialKey: TestimonialKey;
  link: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  texts = TEXTS;
  
  constructor(public languageService: LanguageService) {}

  get currentTexts() {
    const lang = this.languageService.getCurrentLanguage() as 'en' | 'de';
    return this.texts[lang];
  }

  teamPlayers: Teamplayer[] = [
    {
    name: 'Patrick Frey',
    bgImg: './../../../assets/img/5-refferences/bg-img.png',
    project: 'Kochwelt',
    testimonialKey: 'james',
    link: 'https://www.linkedin.com/in/patrick-frey-690000164/'
    },
    {
    name: 'Muzammal Anwar',
    bgImg: './../../../assets/img/5-refferences/bg-img.png',
    project: 'DABubble',
    testimonialKey: 'sahre',
    link: 'https://www.linkedin.com/in/muzammal-anwar-06968b2ab/'
    },
    {
    name: 'Taher Mehany',
    bgImg: './../../../assets/img/5-refferences/bg-img.png',
    project: 'Join',
    testimonialKey: 'taher',
    link: 'https://www.linkedin.com/in/taher-abdel-megid-44974836a/'
    }
  ];
}
