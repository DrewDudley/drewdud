// NG2
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Array<any>;
  learningSkills: Array<any>;
  todoSkills: Array<any>;

  constructor() { }

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.skills = [
      {
        name: 'HTML/ HTML5',
        img: 'assets/img/skills/html5.png',
        prof: 95
      },
      {
        name: 'CSS & SASS',
        img: 'assets/img/skills/sass.png',
        prof: 95
      },
      {
        name: 'JavaScript & TypeScript',
        img: 'assets/img/skills/ts.png',
        prof: 75
      },
      {
        name: 'Angular 2+',
        img: 'assets/img/skills/angular.svg',
        prof: 70
      },
      {
        name: 'Bootstrap',
        img: 'assets/img/skills/bootstrap.png',
        prof: 90
      },
      {
        name: 'WordPress',
        img: 'assets/img/skills/wordpress.png',
        prof: 75
      },
      {
        name: 'Git',
        img: 'assets/img/skills/git.png',
        prof: 75
      },
      {
        name: 'Adobe Suite',
        img: 'assets/img/skills/ps.svg',
        prof: 70
      },
      {
        name: 'Responsive Design',
        img: 'assets/img/skills/responsive.png',
        prof: 95
      },
      {
        name: 'User-Experience',
        img: 'assets/img/skills/eye.png',
        prof: 90
      }
    ];

    this.learningSkills = [
      {
        name: 'Ionic',
        img: 'assets/img/skills/ionic.png',
        prof: 60
      },
      {
        name: 'Jasmine & Karma',
        img: 'assets/img/skills/jasmine.svg',
        prof: 60
      },
      {
        name: 'Jest',
        img: 'assets/img/skills/jest.svg',
        prof: 60
      },
      {
        name: 'Java',
        img: 'assets/img/skills/java.png',
        prof: 50
      },
      {
        name: 'Google Analytics',
        img: 'assets/img/skills/analytics.png',
        prof: 55
      },
      {
        name: 'Spanish',
        img: 'assets/img/skills/mexico.png',
        prof: 75
      },
    ];

    this.todoSkills = [
      {
        name: 'React',
        img: 'assets/img/skills/react.png'
      },
      {
        name: 'SQL',
        img: 'assets/img/skills/db.png'
      },
      {
        name: 'SEO',
        img: 'assets/img/skills/google.png'
      },
      {
        name: 'German',
        img: 'assets/img/skills/german.png'
      },
    ];
  }
}
