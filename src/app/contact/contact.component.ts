// NG
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    contactLinks: Array<any>;

    constructor() { }

    ngOnInit() {
        this.loadLinks();
    }

    loadLinks() {
        this.contactLinks = [
            {
                icon: 'fab fa-facebook-f',
                href: 'https://www.facebook.com/drew.dudley.161/',
                class: 'skill-link'
            },
            {
                icon: 'fab fa-twitter',
                href: 'https://twitter.com/drewdudleyyy/',
                class: 'skill-link'
            },
            {
                icon: 'fab fa-instagram',
                href: 'https://www.instagram.com/drewdudleyyy/',
                class: 'skill-link'
            },
            {
                icon: 'fab fa-linkedin-in',
                href: 'https://www.linkedin.com/in/drewdudley/',
                class: 'skill-link'
            },
            {
                icon: 'fab fa-github',
                href: 'https://github.com/DrewDudley/',
                class: 'skill-link'
            },
            {
                icon: 'far fa-envelope',
                href: 'mailto:drewdudley93@gmail.com',
                class: 'skill-link'
            },
            {
                icon: 'fas fa-chevron-up',
                href: '#intro',
                class: 'link'
            }
        ];
    }
}
