import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router} from '@angular/router';


interface Media{
  name: string;
  img: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
  constructor(private router: Router) {}

testNavigation() {
  this.router.navigate(['/privacy-policy']);
  
}

  medialinks: Media[] = [
    {
      name: 'Email', 
      img: './../../../assets/img/footer/email.png',
      url: 'contact'
    },
    {
      name: 'Github', 
      img: './../../../assets/img/footer/git.png',
      url: 'https://github.com/mianshargeel'
    },
    {
      name: 'Linked-In', 
      img: './../../../assets/img/footer/linkedIn.png',
      url: 'https://www.linkedin.com/in/mukhammad-shardzhil-a2565213a/'
    }
  ];

}
