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
        img: "http://drewdud.com/assets/img/portfolio/lhInvestments.png",
        link: "http://targetallocation.com"
      },
      {
        title: "NightLight Branson",
        img: "http://drewdud.com/assets/img/portfolio/office.jpg",
        link: "http://drewdud.com/nl/"
      },
      {
        title: "Bolivar Chamber of Commerce",
        img: "http://drewdud.com/assets/img/portfolio/bcoc.png",
        link: "http://bolivarchamber.com"
      },
      {
        title: "Shuffle Ninja",
        img: "http://drewdud.com/assets/img/portfolio/ninja.png",
        link: "http://drewdud.com/game/"
      }
    ]
  }
}
