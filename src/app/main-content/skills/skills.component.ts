import { Component } from '@angular/core';

interface Skills {
  name: string;
  img: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: Skills[] = [
    {
    name: 'Angular',
    img: './../../../assets/img/3-skils/angular.png'
    },
    {
    name: 'Typescript',
      img: './../../../assets/img/3-skils/typescript.png'
    },
    {
    name: 'Javascript',
    img: './../../../assets/img/3-skils/js.png'
    }
    ,
    {
    name: 'HTML',
    img: './../../../assets/img/3-skils/html.png'
    }
    ,
    {
    name: 'CSS',
    img: './../../../assets/img/3-skils/css.png'
    }
    ,
    {
    name: 'Rest API',
    img: './../../../assets/img/3-skils/rest-api.png'
    }
    ,
    {
    name: 'Firebase',
    img: './../../../assets/img/3-skils/fire-base.png'
    },
    {
    name: 'GIT',
    img: './../../../assets/img/3-skils/git.png'
    },
    {
    name: 'Angular Material',
    img: './../../../assets/img/3-skils/angular-material.png'
    },
    {
    name: 'Scrum',
    img: './../../../assets/img/3-skils/scrum.png'
    }
  ];

}
