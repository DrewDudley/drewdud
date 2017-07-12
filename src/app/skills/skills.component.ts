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
        img: "http://drewdud.com/assets/img/skills/html5.png"
      },
      {
        name: "CSS/ SASS",
        img: "http://drewdud.com/assets/img/skills/sass.png"
      },
      {
        name: "JavaScript/ TypeScript",
        img: "http://drewdud.com/assets/img/skills/js.png"
      },
      {
        name: "Angular2",
        img: "http://drewdud.com/assets/img/skills/angular.svg"
      },
      {
        name: "Bootstrap",
        img: "http://drewdud.com/assets/img/skills/bootstrap.png"
      },
      {
        name: "Git",
        img: "http://drewdud.com/assets/img/skills/git.png"
      },
      {
        name: "PhotoShop/ Illustrator/ InDesign",
        img: "http://drewdud.com/assets/img/skills/adobe.png"
      },
      {
        name: "How to Be Human",
        img: "http://drewdud.com/assets/img/skills/robot.png"
      }
    ];

    this.sortaSkills = [
      {
        name: "Java",
        img: "http://drewdud.com/assets/img/skills/java2.png"
      },
      {
        name: "Spanish",
        img: "http://drewdud.com/assets/img/skills/mexico.png"
      },
      {
        name: "Tennis",
        img: "http://drewdud.com/assets/img/skills/tennis.png"
      }
    ];

    this.futureSkills = [
      {
        name: "Reactjs",
        img: "http://drewdud.com/assets/img/skills/react.png"
      },
      {
        name: "German",
        img: "http://drewdud.com/assets/img/skills/german.png"
      },
      {
        name: "Backend",
        img: "http://drewdud.com/assets/img/skills/db.png"
      }
    ];
  }
}
