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

  // isEditMode: boolean = false;
  // id: string | null;
  constructor(private membershipService: MembershipService, private router: Router) {
    // this.id = '';
  }


  ngOnInit(): void {


  }
  save() {
    this.membershipService.addMembership(this.membership).subscribe((res) => {
      alert("Membership Saved Id:" + res)
    }, (error) => alert('Membership Not Added.'))
  }
  submit() {
    let requestPayload = this.membership;
    console.log('requestPayload', requestPayload);
    console.log('this.membership', this.membership);
    this.membershipService.addMembership(requestPayload).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['admin/membership/list'])
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // submit() {
  //   console.log(this.membership);
  //   if (this.isEditMode) {
  //     console.log("Id", this.id)
  //     console.log("Membership On Submit", this.membership)
  //     this.membershipService.updateMembership({ _id: this.id, ...this.membership }).subscribe((response: any) => {
  //       alert(response.message || "Membership Saved")
  //       this.router.navigate(['/membership'])
  //     }, (error) => alert("Exposition Not Saved"))
  //   } else {
  //     let requestPayload = this.membership;

  //     this.membershipService.addMembership(requestPayload).subscribe(
  //       (res) => {
  //         alert("Membership Saved");
  //         this.router.navigate(['/membership'])
  //       },
  //       (err: any) => {
  //         alert("Error" + err.response.data.message);
  //       }
  //     );
  //     // this.expositionService
  //     //   .addExposition(this.exposition)
  //     //   .subscribe(() => alert('schedule has been saved'));
  //   }
  // }


}
