import { Component, OnInit } from "@angular/core";
import { CatelogRequestService } from "app/core/providers/user/catelog-request.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-thankyou-page-confirm-supplier-for-cataloging",
  templateUrl: "./thankyou-page-confirm-supplier-for-cataloging.component.html",
  styleUrls: ["./thankyou-page-confirm-supplier-for-cataloging.component.scss"],
})
export class ThankyouPageConfirmSupplierForCatalogingComponent
  implements OnInit
{
  associateId: string;

  constructor(
    private catelogRequestService: CatelogRequestService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((params) => {
      try {
        this.associateId = params["id"];
        if (this.associateId) {
          let payload = {
            _id: this.associateId,
            isVerified: true,
            status: "Verified",
          };
          this.catelogRequestService.sellerVerify(payload).subscribe(
            (res) => {
              console.log("res", res);
            },
            (err) => {
              console.log("err", err);
            }
          );
        }
      } catch (err) {
        console.log("err..");
      }
    });
  }
}
