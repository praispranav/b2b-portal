import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProviderMembershipService } from './../../../../core/providers/provider-membership.service';

@Component({
  selector: 'app-page-membership-list',
  templateUrl: './page-membership-list.component.html',
  styleUrls: ['./page-membership-list.component.scss'],
})
export class PageMembershipListComponent implements OnInit {
  membershipList: any[] = [];
  assetURL: string;
  constructor(
    private route: Router,
    private providerMembershipService: ProviderMembershipService
  ) {
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
    this.providerMembershipService.fetchList().subscribe(
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
    this.providerMembershipService
      .deleteMembership(id)
      .subscribe((response) => {
        alert('membership deleted');
        this.fetchList();
      });
  }
  editMembership(obj: any) {
    ProviderMembershipService.editId = obj;
    this.route.navigate(['/admin/membership/manage']);
  }
}
