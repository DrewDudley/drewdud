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
        description: "A front-end dev that doesn't know HTML is like a nurse that doesn't know how to take a pulse; ridiculous and dangerous.",
        img: "http://drewdud.com/assets/img/skills/html5.png"
      },
      {
        name: "CSS/ SASS",
        description: "While I do enjoy working with the headache that is CSS, the SASS pre-processor makes things a million times easier.",
        img: "http://drewdud.com/assets/img/skills/sass.png"
      },
      {
        name: "JavaScript/ TypeScript",
        description: "I've worked quite a bit with JavaScript, and started learning all about TypeScript at my first development gig out of college. This site uses TS.",
        img: "http://drewdud.com/assets/img/skills/js.png"
      },
      {
        name: "Angular2",
        description: "I learned Angular2 from some pretty talented developers at my first job, and I've been in love ever since. This site is even built with ng2!",
        img: "http://drewdud.com/assets/img/skills/angular.svg"
      },
      {
        name: "Bootstrap",
        description: "I have experience making websites responive and mobile-friendly, but why bother when the team over at Bootstrap has already done all of the heavy lifting? I used the grid-system for this site.",
        img: "http://drewdud.com/assets/img/skills/bootstrap.png"
      },
      {
        name: "Git",
        description: "Any developer knows how big of a pain git can be, but I've finally gotten a good grasp on it. Check out my repo for this site here.",
        img: "http://drewdud.com/assets/img/skills/git.png"
      },
      {
        name: "PhotoShop/ Illustrator/ InDesign",
        description: "I know my way around PhotoShop, Illustrator, and InDesign pretty well.",
        img: "http://drewdud.com/assets/img/skills/adobe.png"
      }
    ];

    this.sortaSkills = [
      {
        name: "Java",
        description: "Java was actually the first programming language I ever learned, but being a primarily front-end dev, I haven't really used it since college.",
        img: "http://drewdud.com/assets/img/skills/java2.png"
      },
      {
        name: "Spanish",
        description: "One of my favorite things to do is learn about other cultures and languages. I've studied Spanish for a few years now and I'm near fluent.",
        img: "http://drewdud.com/assets/img/skills/mexico.png"
      },
      {
        name: "Tennis",
        description: "Gotta relax somehow",
        img: "http://drewdud.com/assets/img/skills/tennis.png"
      }
    ];

    this.futureSkills = [
      {
        name: "Reactjs",
        description: "At the moment, Angular2 is the only MVC I know. While I really enjoy working with it, I've heard good things from some peers about the world of React.",
        img: "http://drewdud.com/assets/img/skills/react.png"
      },
      {
        name: "German",
        description: "Like I said earlier, I am very passionate about learning other cultures and languages. Now that I'm putting the finishing touches on mi Español, German seems like a fun challenge.",
        img: "http://drewdud.com/assets/img/skills/german.png"
      },
      {
        name: "Backend",
        description: "I definitely prefer front-end development to backend, but I would love to become a full-stack dev.",
        img: "http://drewdud.com/assets/img/skills/db.png"
      }
      // {
      //   name: "Snorkeling",
      //   description: "Why not have a little fun in life, huh?",
      //   img: "http://drewdud.com/ng/assets/img/skills/snorkeling.jpg"
      // }
    ];
  }
}
