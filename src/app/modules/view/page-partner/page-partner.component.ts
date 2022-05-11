import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-partner',
  templateUrl: './page-partner.component.html',
  styleUrls: ['./page-partner.component.scss']
})
export class PagePartnerComponent implements OnInit {

  constructor() { }
  memberData = [
    {
      profile: "assets/img/partner/01.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Ronny Jofra",
      designation: "C.E.O"
    },
    {
      profile: "assets/img/partner/04.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Micheal Carlo",
      designation: "Director"
    },
    {
      profile: "assets/img/partner/02.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Aliana Rosy",
      designation: "Manager"
    },
    {
      profile: "assets/img/partner/03.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Sofia Razaq",
      designation: "Developer"
    },
    {
      profile: "assets/img/partner/04.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Calvin Carlo",
      designation: "C.E.O"
    },
    {
      profile: "assets/img/partner/05.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Juhi Chawla",
      designation: "Director"
    },
    {
      profile: "assets/img/partner/07.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Arlo Walker",
      designation: "Manager"
    },
    {
      profile: "assets/img/partner/08.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Randeep Huda",
      designation: "Developer"
    }
  ];

  ngOnInit() {
  }

}
