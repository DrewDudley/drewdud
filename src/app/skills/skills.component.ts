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
        name: "CSS & SASS",
        img: "assets/img/skills/sass.png"
      },
      {
        name: "JavaScript & TypeScript",
        img: "assets/img/skills/ts.png"
      },
      {
        name: "Angular",
        img: "assets/img/skills/angular.svg"
      },
      {
        name: "Bootstrap",
        img: "assets/img/skills/bootstrap.png"
      },
      {
        name: "WordPress",
        img: "assets/img/skills/wordpress.png"
      },
      {
        name: "Git",
        img: "assets/img/skills/git.png"
      },
      {
        name: "PhotoShop, Illustrator, & InDesign",
        img: "assets/img/skills/ps.svg"
      },
      {
        name: "Responsive Design",
        img: "assets/img/skills/responsive.png"
      },
      {
        name: "User-Experience",
        img: "assets/img/skills/eye.png"
      }
    ];

    this.sortaSkills = [
      {
        name: "Jasmine & Karma",
        img: "assets/img/skills/jasmine.svg"
      },
      {
        name: "Java",
        img: "assets/img/skills/java.png"
      },
      {
        name: "Spanish",
        img: "assets/img/skills/mexico.png"
      }
      // {
      //   name: "Tennis",
      //   img: "assets/img/skills/tennis.png"
      // }
    ];

    this.futureSkills = [
      {
        name: "React",
        img: "assets/img/skills/react.png"
      },
      {
        name: "Ionic",
        img: "assets/img/skills/ionic.png"
      },
      {
        name: "SEO",
        img: "assets/img/skills/google.png"
      },
      {
        name: "German",
        img: "assets/img/skills/german.png"
      },
      {
        name: "Backend",
        img: "assets/img/skills/db.png"
      },
    ];
  }
}
