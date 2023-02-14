import { Component, OnInit } from "@angular/core";
import { CatelogRequestService } from "app/core/providers/user/catelog-request.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact-for-catalogue",
  templateUrl: "./contact-for-catalogue.component.html",
  styleUrls: ["./contact-for-catalogue.component.scss"],
})
export class ContactForCatalogueComponent implements OnInit {
  userDetails: any;
  sellerId: string;
  constructor(
    private catelogRequestService: CatelogRequestService,
    private router: Router
    ) {}

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem("currentUserAuth")).data;
  }

  request(): void {
    let payload;
    if (this.userDetails.role === "seller") {
      payload = {
        sellerId: this.userDetails._id,
        sellerName: this.userDetails.fName + " " + this.userDetails.lName,
        company: this.userDetails.company,
        email: this.userDetails.email,
        phone: this.userDetails.phone,
        city: this.userDetails.city,
        country: this.userDetails.country,
        password: this.userDetails.password,
        role: this.userDetails.role,
        isVerified: this.userDetails.isVerified,
        isApprovedByAdmin: this.userDetails.isApprovedByAdmin,
        catelogReuest: "Admin",
        status: "Pending",
        assignAssociate: "No",
        assignToAssociate: false,
        nameAssociate: "",
        associateId: "",
      };
    }
    console.log("payload", payload);
    this.catelogRequestService.requestSend(payload).subscribe(
      (res) => {
        console.log("res", res);
        this.router.navigateByUrl('/seller/dashboard');
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
}
