import { Component, OnInit } from '@angular/core';
import { MembershipService } from 'src/app/provider/membership.service';
import { Route, Router } from '@angular/router';

interface Membership {
  location: string;
  cost: string;
}
@Component({
  selector: 'app-add-membership',
  templateUrl: './add-membership.component.html',
  styleUrls: ['./add-membership.component.scss']
})
export class AddMembershipComponent implements OnInit {

  membership: Membership = {
    location: '',
    cost: ''
  };

  isEditMode: boolean = false;

  constructor(private membershipService: MembershipService, private router: Router) {

  }


  ngOnInit(): void {
    const values = MembershipService.editId
    if (values) {
      this.isEditMode = true;
      this.membership = { ...values }
    }

  }
  add() {
    this.membershipService.addMembership(this.membership).subscribe((res) => {
      alert("membership added")
    }, (error) => alert('Membership Not Added.'))
  }
  save() {
    this.membershipService.addMembership(this.membership).subscribe((res) => {
      alert("Membership Saved Id:" + res)
    }, (error) => alert('Membership Not Added.'))
  }

  editMembership() {
    this.membershipService.editMembership(this.membership).subscribe((res) => {
      alert("Membership Edited :" + this.membership.location)
    })
  }

  submit() {
    if (this.isEditMode) this.editMembership();
    else this.add();
  }



}
