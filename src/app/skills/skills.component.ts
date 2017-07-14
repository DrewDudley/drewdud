import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Array<any>;
  sortaSkills: Array<any>;
  futureSkills: Array<any>;

  constructor() { }

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.skills = [
      {
        name: "HTML/ HTML5",
        img: "assets/img/skills/html5.png"
      },
      {
        name: "CSS/ SASS",
        img: "assets/img/skills/sass.png"
      },
      {
        name: "JavaScript/ TypeScript",
        img: "assets/img/skills/js.png"
      },
      {
        name: "Angular2",
        img: "assets/img/skills/angular.svg"
      },
      {
        name: "Bootstrap",
        img: "assets/img/skills/bootstrap.png"
      },
      {
        name: "Git",
        img: "assets/img/skills/git.png"
      },
      {
        name: "PhotoShop/ Illustrator/ InDesign",
        img: "assets/img/skills/adobe.png"
      },
      {
        name: "Design & Usability",
        img: "assets/img/skills/eye.png"
      },
      {
        name: "Being Human",
        img: "assets/img/skills/human.png"
      }
    ];

    this.sortaSkills = [
      {
        name: "Java",
        img: "assets/img/skills/java.png"
      },
      {
        name: "Spanish",
        img: "assets/img/skills/mexico.png"
      },
      {
        name: "Tennis",
        img: "assets/img/skills/tennis.png"
      }
    ];

    this.futureSkills = [
      {
        name: "Reactjs",
        img: "assets/img/skills/react.png"
      },
      {
        name: "German",
        img: "assets/img/skills/german.png"
      },
      {
        name: "Backend",
        img: "assets/img/skills/db.png"
      }
    ];
  }
}
