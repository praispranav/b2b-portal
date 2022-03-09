import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-membership',
  templateUrl: './list-membership.component.html',
  styleUrls: ['./list-membership.component.scss']
})
export class ListMembershipComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  navigateToEdit()
  {  console.log("hello brother");
    this.route.navigate(['/admin/membership/edit'])
  }
  navigateToAdd()  {
    this.route.navigate(['admin/membership/manage']);
  }

}
