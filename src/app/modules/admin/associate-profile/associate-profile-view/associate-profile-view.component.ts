import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AssociateService } from "./../../../../core/providers/user/associate.service";
import { environment } from "./../../../../../environments/environment";

@Component({
  selector: "app-associate-profile-view",
  templateUrl: "./associate-profile-view.component.html",
  styleUrls: ["./associate-profile-view.component.scss"],
})
export class AssociateProfileViewComponent implements OnInit {
  associateId: string;
  associateDetails: any;
  baseUrl = environment.imageStorage;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private associateService: AssociateService,
    private router: Router
  ) {}

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((params) => {
      try {
        this.associateId = params["aid"];
        console.log("associateId", this.associateId);
        this.getAssociateDetails(this.associateId);
      } catch (err) {
        console.log("err..");
      }
    });
  }

  getAssociateDetails(id): void {
    this.associateService.getAssociateById(id).subscribe(
      (res) => {
        this.associateDetails = res;
        console.log("associateDetails", this.associateDetails);
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
}
