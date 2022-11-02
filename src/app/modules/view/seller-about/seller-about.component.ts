import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-about',
  templateUrl: './seller-about.component.html',
  styleUrls: ['./seller-about.component.scss']
})
export class SellerAboutComponent implements OnInit {

  constructor() { }
  categoriesList: any[] = [
    { name: "Quality Control" },
    { name: "Export Capability" },
    { name: "Company Introduction" },
    { name: "Manufacturing Capacity" },
    { name: "Certificate Center" },
    { name: "R & D" },
  ];

  ngOnInit() {
  }

}
