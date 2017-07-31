import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  menuItems: Array<any>;
  spaceTheme: boolean = true;

  constructor() { }

  ngOnInit() {
    this.loadMenuItems();
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
}
