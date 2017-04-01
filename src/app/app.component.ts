import {Component, OnInit} from '@angular/core';
import {ParseJsonCvService} from './services/parse-json-cv.service'
import {Skill} from "./components/skills/skill";
import {Project} from "./components/projects/project";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Kévin Boussard';
  skills: Skill[];
  projects: Project[];

  constructor(private parseJsonCvService: ParseJsonCvService){ }

  ngOnInit(): void {

    this.parseJsonCvService.extractFromJson('skills')
      .then(data => this.skills = data);

    this.parseJsonCvService.extractFromJson('projects')
      .then(data => this.projects = data);

  }

}
