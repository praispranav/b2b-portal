import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.scss']
})
export class ListLocationComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  navigateToEdit()
  {  console.log("hello brother");
    this.route.navigate(['/admin/location/edit'])
  }
  navigateToAdd()  {
    this.route.navigate(['admin/location/manage']);
  }

}
