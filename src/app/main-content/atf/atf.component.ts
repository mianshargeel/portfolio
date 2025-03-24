import { Component } from '@angular/core';
interface Media{
  name: string;
  img: string;
  url: string;
}
@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {
  medialinks: Media[] = [
    {
      name: 'Email', 
      img: './../../../assets/img/1-hero/email.png',
      url: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'
    },
    {
      name: 'Github', 
      img: './../../../assets/img/1-hero/git.png',
      url: 'https://github.com/mianshargeel'
    },
    {
      name: 'Linked-In', 
      img: './../../../assets/img/1-hero/linkedIn.png',
      url: 'https://www.linkedin.com/in/mukhammad-shardzhil-a2565213a/'
    }
  ];
}
