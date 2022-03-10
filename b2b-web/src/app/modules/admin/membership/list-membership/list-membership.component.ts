import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MembershipService } from 'src/app/provider/membership.service';

@Component({
  selector: 'app-list-membership',
  templateUrl: './list-membership.component.html',
  styleUrls: ['./list-membership.component.scss']
})
export class ListMembershipComponent implements OnInit {
  membershipList: any[]
  constructor(private route: Router, private membershipService: MembershipService) {
    this.membershipList = []
  }

  ngOnInit(): void {
    // this.fetchList();

    this.getList();
  }
  navigateToAdd() {
    this.route.navigate(['admin/membership/manage']);
  }
  navigateToEdit() {
    this.route.navigate(['admin/membership/edit']);
  }
  // fetchList(): void {
  //   this.membershipService.fetchList().subscribe(
  //     (response: any) => {
  //       this.membershipList = response;
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }
  getList() {
    this.membershipService.getMembershipList().subscribe((res: any) => {
      if (Array.isArray(res)) {
        this.membershipList = res;
        console.log(this.membershipList)
      }
    })
  }
  deleteMembership(id: string) {
    console.log('Id to Delete', id);
    this.membershipService.deleteMembership(id).subscribe((response) => {
      alert('membership deleted');
      // this.fetchList();
    });
  }

  editMembership(obj: any) {
    MembershipService.editId = obj;
    this.route.navigate(['/membership/edit']);
  }

}
