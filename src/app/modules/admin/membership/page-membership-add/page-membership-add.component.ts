import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProviderMembershipService } from './../../../../core/providers/provider-membership.service';

interface Membership {
  location: string;
  cost: string;
}
@Component({
  selector: 'app-page-membership-add',
  templateUrl: './page-membership-add.component.html',
  styleUrls: ['./page-membership-add.component.scss'],
})
export class PageMembershipAddComponent implements OnInit {
  membership: Membership = {
    location: '',
    cost: '',
  };

  isEditMode: boolean = false;

  constructor(
    private providerMembershipService: ProviderMembershipService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const values = ProviderMembershipService.editId;
    if (values) {
      this.isEditMode = true;
      this.membership = { ...values };
    }
  }
  add() {
    this.providerMembershipService.addMembership(this.membership).subscribe(
      (res) => {
        alert('membership added');
      },
      (error) => alert('Membership Not Added.')
    );
  }
  save() {
    this.providerMembershipService.addMembership(this.membership).subscribe(
      (res) => {
        alert('Membership Saved Id:' + res);
      },
      (error) => alert('Membership Not Added.')
    );
  }

  editMembership() {
    this.providerMembershipService
      .editMembership(this.membership)
      .subscribe((res) => {
        alert('Membership Edited :' + this.membership.location);
      });
  }

  submit() {
    if (this.isEditMode) this.editMembership();
    else this.add();
  }
}
