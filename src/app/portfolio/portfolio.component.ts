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
        link: "http://drewdud.com/targal/"
      },
      {
        title: "NightLight Branson",
        img: "../assets/img/portfolio/office.jpg",
        link: "http://drewdud.com/nl/"
      },
      {
        title: "Bolivar Chamber of Commerce",
        img: "../assets/img/portfolio/bcoc.png",
        link: "http://bolivarchamber.com"
      },
      {
        title: "Shuffle Ninja",
        img: "../assets/img/portfolio/ninja.png",
        link: "http://drewdud.com/game/"
      }
    ]
  }

}
