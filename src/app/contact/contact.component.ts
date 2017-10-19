// NG2
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
        icon: 'facebook',
        href: 'https://www.facebook.com/drew.dudley.161/',
        class: 'skill-link'
      },
      {
        icon: 'twitter',
        href: 'https://twitter.com/drewdudleyyy/',
        class: 'skill-link'
      },
      {
        icon: 'instagram',
        href: 'https://www.instagram.com/drewdudleyyy/',
        class: 'skill-link'
      },
      {
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/drewdudley/',
        class: 'skill-link'
      },
      {
        icon: 'github',
        href: 'https://github.com/DrewDudley/',
        class: 'skill-link'
      },
      {
        icon: 'envelope-o',
        href: 'mailto:drewdudley93@gmail.com',
        class: 'skill-link'
      },
      {
        icon: 'angle-up',
        href: '#intro',
        class: 'link'
      }
    ];
  }

}
