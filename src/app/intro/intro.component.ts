import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  menuItems: Array<any>;
  spaceTheme: boolean = true;
  timeOfDay: any = 'afternoon';

  constructor() { }

  ngOnInit() {
    this.loadMenuItems();
    this.getTimeOfDay();
  }

  loadMenuItems() {
    this.menuItems = [
      {
        label: "About Me",
        icon: "user-o",
        href: "#about"
      },
      {
        label: "My Skills",
        icon: "code",
        href: "#skills"
      },
      {
        label: "My Projects",
        icon: "desktop",
        href: "#portfolio"
      },
      {
        label: "Contact Me",
        icon: "envelope-open-o",
        href: "#contact"
      }
    ]
  }

  getTimeOfDay() {
    let time = new Date().getHours();
    if (time < 12) {
      this.timeOfDay = 'Good morning';
    } else if (time < 17) {
      this.timeOfDay = 'Good afternoon';
    } else {
      this.timeOfDay = 'Good evening';
    }
  }
}
