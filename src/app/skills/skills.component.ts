import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Array<any>;

  constructor() { }

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.skills = [
      {
        name: "HTML",
        description: "Description of HTML experience"
      },
      {
        name: "CSS/SASS",
        description: "Description of CSS experience"
      },
      {
        name: "JaveScript/ TypeScript",
        description: "Description of JS experience"
      },
      {
        name: "Angular2",
        description: "Description of ng2 experience"
      }
    ];
  }
}
