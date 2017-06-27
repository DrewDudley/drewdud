import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Array<any>;

  constructor() { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projects = [
      {
        title: "Lighthouse Investments",
        img: "../assets/img/portfolio/lhInvestments.png",
        link: "#about"
      },
      {
        title: "NightLight Branson",
        img: "../assets/img/portfolio/office.jpg",
        link: ""
      },
      {
        title: "Bolivar Chamber of Commerce",
        img: "../assets/img/portfolio/bcoc.png",
        link: "#intro"
      },
      {
        title: "Shuffle Ninja",
        img: "../assets/img/portfolio/ninja.png",
        link: ""
      }
    ]
  }

}
