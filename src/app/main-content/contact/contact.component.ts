import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface FormDate{
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactData: FormDate = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log('Form Submitted: ', this.contactData);
    }
    ngForm.resetForm();
  }

}
