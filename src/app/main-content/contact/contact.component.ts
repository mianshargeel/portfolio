import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


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

  constructor(private http: HttpClient) {} // <-- Correct injection

  contactData: FormDate = {
    name: '',
    email: '',
    message: '',
    isPrivacyChecked: false
  };

  // isPrivacyChecked = false;
  mailTest = true;

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
    console.log(this.contactData);
    
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({ next: (response) => { ngForm.resetForm() },
          error: (error) => { console.error(error) },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  scrollToTop() {
    const element = document.getElementById('header');
      if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
