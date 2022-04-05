import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderMembershipService } from './../../../../core/providers/provider-membership.service';

interface Membership {
  location: string;
  cost: string;
}
@Component({
  selector: 'app-page-membership-edit',
  templateUrl: './page-membership-edit.component.html',
  styleUrls: ['./page-membership-edit.component.scss'],
})
export class PageMembershipEditComponent implements OnInit {
  membership: Membership = {
    location: '',
    cost: '',
  };
  isEditMode: boolean = false;
  id: string | null;
  constructor(
    private providerMembershipService: ProviderMembershipService,
    private router: Router
  ) {
    this.id = '';
  }

  ngOnInit(): void {}
  submit() {
    console.log(this.membership);
    if (this.isEditMode) {
      console.log('Id', this.id);
      console.log('Membership On Submit', this.membership);
      this.providerMembershipService
        .editMembership({ _id: this.id, ...this.membership })
        .subscribe(
          (response: any) => {
            alert(response.message || 'Membership Saved');
            this.router.navigate(['/membership']);
          },
          (error) => alert('Exposition Not Saved')
        );
    } else {
      let requestPayload = this.membership;

      this.providerMembershipService.addMembership(requestPayload).subscribe(
        (res) => {
          alert('Membership Saved');
          this.router.navigate(['/admin/membership/list']);
        },
        (err: any) => {
          alert('Error' + err.response.data.message);
        }
      );
    }
  }
}
