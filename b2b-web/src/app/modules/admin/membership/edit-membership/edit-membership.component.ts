import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembershipService } from 'src/app/provider/membership.service';
interface Membership {
  location: string;
  cost: string;
}
@Component({
  selector: 'app-edit-membership',
  templateUrl: './edit-membership.component.html',
  styleUrls: ['./edit-membership.component.scss']
})
export class EditMembershipComponent implements OnInit {
  membership: Membership = {
    location: '',
    cost: ''
  };
  isEditMode: boolean = false;
  id: string | null;
  constructor(private membershipService: MembershipService, private router: Router) {
    this.id = '';

  }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.membership);
    if (this.isEditMode) {
      console.log("Id", this.id)
      console.log("Membership On Submit", this.membership)
      this.membershipService.updateMembership({ _id: this.id, ...this.membership }).subscribe((response: any) => {
        alert(response.message || "Membership Saved")
        this.router.navigate(['/membership'])
      }, (error) => alert("Exposition Not Saved"))
    } else {
      let requestPayload = this.membership;

      this.membershipService.addMembership(requestPayload).subscribe(
        (res) => {
          alert("Membership Saved");
          this.router.navigate(['/membership'])
        },
        (err: any) => {
          alert("Error" + err.response.data.message);
        }
      );
      // this.expositionService
      //   .addExposition(this.exposition)
      //   .subscribe(() => alert('schedule has been saved'));
    }
  }
  getMembershipById() {
    const selectedExposition = MembershipService.editId;
    if (selectedExposition) {
      this.membership = selectedExposition
      this.id = selectedExposition._id;
      this.isEditMode = true
    }
  }
}
