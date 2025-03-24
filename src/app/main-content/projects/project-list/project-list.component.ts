import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../../interfaces/project';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  // projects: Project[] = {
    
  //     id: 1,
  //     title: "DA Bubble",
  //     duration: "3 weeks",
  //     description: "Slack clone with real-time messaging...",
  //     technologies: ["Angular", "Firebase"],
  //     links: { github: "#", live: "#" }
  //   }
}

