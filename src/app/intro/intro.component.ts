import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  menuItems: Array<any>;
  greeting: any = 'Welcome';

  constructor() { }

  ngOnInit() {
    this.getTime();
  }

  getTime() {
    let time = new Date().getHours();
    if (time >= 23 || time <= 2) {
      this.greeting = 'Sure is getting awfully late. Where ya headed?';
    } else if (time < 6) {
      this.greeting = 'You sure are up awfully early. Where to, cap?';
    } else if (time < 12) {
      this.greeting = 'Good morning. Where to, cap?';
    } else if (time < 17) {
      this.greeting = 'Good afternoon. Where to, cap?';
    } else {
      this.greeting = 'Good evening. Where to, cap?';
    }
  }
}
