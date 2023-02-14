import { Component, OnInit } from "@angular/core";
import { AssociateService } from "../../../core/providers/user/associate.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-verify-associate",
  templateUrl: "./verify-associate.component.html",
  styleUrls: ["./verify-associate.component.scss"],
})
export class VerifyAssociateComponent implements OnInit {
  payload: any;
  associateId: string;
  constructor(
    private associateService: AssociateService,
    private _activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((params) => {
      try {
        this.associateId = params["id"];
      } catch (err) {
        console.log("err..");
      }
    });
  }

  verifyAssociate() {
    this.payload = {
      _id: this.associateId,
      isVerified: true,
    };
    this.associateService.associateApproved(this.payload).subscribe(
      (res) => {
        console.log("res", res);
        if (res.header.status === "success" && res.data) {
          this.router.navigateByUrl("/user-auth/sign-in");
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
}
