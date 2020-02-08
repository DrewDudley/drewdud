// NG
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
                name: 'HTML/ HTML5*',
                img: 'assets/img/skills/html5.png',
                prof: 95
            },
            {
                name: 'CSS3/ SASS*',
                img: 'assets/img/skills/sass.png',
                prof: 95
            },
            {
                name: 'JavaScript/ TypeScript*',
                img: 'assets/img/skills/ts.png',
                prof: 80
            },
            {
                name: 'Angular*',
                img: 'assets/img/skills/angular.svg',
                prof: 80
            },
            {
                name: 'Ionic',
                img: 'assets/img/skills/ionic.png',
                prof: 85
            },
            {
                name: 'Bootstrap*',
                img: 'assets/img/skills/bootstrap.png',
                prof: 90
            },
            {
                name: 'WordPress',
                img: 'assets/img/skills/wordpress.png',
                prof: 80
            },
            {
                name: 'Git*',
                img: 'assets/img/skills/git.png',
                prof: 80
            },
            {
                name: 'Adobe Suite',
                img: 'assets/img/skills/ps.svg',
                prof: 80
            },
            {
                name: 'Responsive Design*',
                img: 'assets/img/skills/responsive.png',
                prof: 95
            },
            {
                name: 'User-Experience*',
                img: 'assets/img/skills/eye.png',
                prof: 90
            }
        ];

        this.learningSkills = [
            {
                name: 'Jasmine & Karma*',
                img: 'assets/img/skills/jasmine.svg',
                prof: 70
            },
            {
                name: 'Jest',
                img: 'assets/img/skills/jest.svg',
                prof: 70
            },
            // {
            //     name: 'Java',
            //     img: 'assets/img/skills/java.png',
            //     prof: 50
            // },
            {
                name: 'Node.js',
                img: 'assets/img/skills/nodejs.svg',
                prof: '40'
            },
            {
                name: 'Google Analytics*',
                img: 'assets/img/skills/analytics.png',
                prof: 75
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
                name: 'Vue.js',
                img: 'assets/img/skills/vuejs.png'
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
