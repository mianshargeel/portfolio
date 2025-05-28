import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../services/language.service';
import { TEXTS } from '../../constants/texts';
import { RouterLink } from '@angular/router';


interface FormDate{
  name: string;
  email: string;
  message: string;
  isPrivacyChecked: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  texts = TEXTS;
  isFormSubmitted = false;
  mailTest = true;
  showSuccessMessage: boolean = false;
  
  constructor(public languageService: LanguageService, private http: HttpClient) {}

  get currentTexts() {
    const lang = this.languageService.getCurrentLanguage() as 'en' | 'de';
    return this.texts[lang];
  }

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

  // 

  onSubmit(form: NgForm) {
    this.isFormSubmitted = true;
    console.log(this.contactData);
  
    if (form.submitted && form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: () => {
            this.showSuccessMessage = true;
            form.resetForm();                     // Reset  form
            this.resetSuccessMessage();
          },
          error: (error) => {
            console.error(error);
            this.isFormSubmitted = false;
          }
        });
    } else if (form.submitted && form.valid && this.mailTest) {
      form.resetForm();                           // Reset form
      this.showSuccessMessage = true;
      this.resetSuccessMessage();
      this.isFormSubmitted = false;
    }
  }
  

  private resetSuccessMessage() {
    setTimeout(() => {
      this.showSuccessMessage = false;
      this.isFormSubmitted = false;
    }, 9000); // hide after 5s
  }

  scrollToTop() {
    const element = document.getElementById('header');
      if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
