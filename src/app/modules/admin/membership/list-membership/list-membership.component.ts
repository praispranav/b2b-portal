import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { MembershipService } from 'src/app/provider/membership.service';

@Component({
  selector: 'app-list-membership',
  templateUrl: './list-membership.component.html',
  styleUrls: ['./list-membership.component.scss']
})
export class ListMembershipComponent implements OnInit {
  membershipList: any[] = [];
  assetURL: string;
  constructor(private route: Router, private membershipService: MembershipService) {
    this.assetURL = environment.apiUrl + '/membership/';
  }

  ngOnInit(): void {
    this.fetchList();

  }
  navigateToAdd() {
    this.route.navigate(['admin/membership/manage']);
  }
  navigateToEdit() {
    this.route.navigate(['admin/membership/edit']);
  }
  fetchList(): void {
    this.membershipService.fetchList().subscribe(
      (response: any) => {
        this.membershipList = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteMembership(id: string) {
    console.log('Id to Delete', id);
    this.membershipService.deleteMembership(id).subscribe((response) => {
      alert('membership deleted');
      this.fetchList();
    });
  }
  editMembership(obj: any) {
    MembershipService.editId = obj;
    this.route.navigate(['/admin/membership/manage']);
  }



}
