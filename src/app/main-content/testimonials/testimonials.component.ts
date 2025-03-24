import { Component } from '@angular/core';

interface Teamplayer{
  name: string;
  bgImg: string;
  project: string;
  views: string;
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
  teamPlayers: Teamplayer[] = [
    {
    name: 'James Rugman',
    bgImg: './../../../assets/img/5-refferences/bg-img.png',
    project: 'Pokedex',
    views: 'Shardzhil had to develop, format and liver content in collaboration with the team members. He is a reliable and friendly person.',
    link: ''
    },
    {
    name: 'Sahre Mullar',
    bgImg: './../../../assets/img/5-refferences/bg-img.png',
    project: 'El Pollo Loco',
    views: 'Shardzhil had to develop, format and liver content in collaboration with the team members. He is a reliable and friendly person.',
    link: ''
    },
    {
    name: 'Adeel Khan',
    bgImg: './../../../assets/img/5-refferences/bg-img.png',
    project: 'Join',
    views: 'Shardzhil had to develop, format and liver content in collaboration with the team members. He is a reliable and friendly person.',
    link: ''
    }
  ];
}
