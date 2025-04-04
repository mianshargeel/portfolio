// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AtfComponent } from '../../main-content/atf/atf.component';
import { NavbarComponent } from '../../main-content/navbar/navbar.component';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
