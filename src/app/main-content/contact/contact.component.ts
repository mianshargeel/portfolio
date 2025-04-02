import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../services/language.service';
import { TEXTS } from '../../constants/texts';


interface FormDate{
  name: string;
  email: string;
  message: string;
  isPrivacyChecked: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  texts = TEXTS;
  isFormSubmitted = false;
  mailTest = true;
  
  constructor(public languageService: LanguageService, private http: HttpClient) {}

  // Updated getter with type safety
  get currentTexts() {
    const lang = this.languageService.getCurrentLanguage() as 'en' | 'de';
    return this.texts[lang];
  }

  // constructor(private http: HttpClient) {} // <-- Correct injection

  contactData: FormDate = {
    name: '',
    email: '',
    message: '',
    isPrivacyChecked: false
  };
  

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.isFormSubmitted = true;
    console.log(this.contactData);
    
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({ next: (response) => { ngForm.resetForm() },
          error: (error) => {
            console.error(error);
            this.isFormSubmitted = false; // Reset flag on error
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
      this.isFormSubmitted = false; // Reset flag on success
    }
  }

  scrollToTop() {
    const element = document.getElementById('header');
      if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
