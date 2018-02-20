// NG
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
    greeting: any = 'Welcome. Where to cap?';

    constructor() { }

    ngOnInit() {
        this.getTime();
    }

    getTime() {
        const time = new Date().getHours();
        if (time > 23 || time < 3) {
            this.greeting = 'Welcome. Where ya headed so late?';
        } else if (time < 6) {
            this.greeting = 'Sure is awfully early. Where to, cap?';
        } else if (time < 12) {
            this.greeting = 'Good morning. Where to, cap?';
        } else if (time < 17) {
            this.greeting = 'Good afternoon. Where to, cap?';
        } else {
            this.greeting = 'Good evening. Where to, cap?';
        }
    }
}
