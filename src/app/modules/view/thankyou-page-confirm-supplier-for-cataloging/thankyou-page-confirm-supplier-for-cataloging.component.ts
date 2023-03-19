import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CatelogRequestService } from "../../../core/providers/user/catelog-request.service";

@Component({
  selector: "app-thankyou-page-confirm-supplier-for-cataloging",
  templateUrl: "./thankyou-page-confirm-supplier-for-cataloging.component.html",
  styleUrls: ["./thankyou-page-confirm-supplier-for-cataloging.component.scss"],
})
export class ThankyouPageConfirmSupplierForCatalogingComponent
  implements OnInit {
  associateId: string;
  sellerId: string;

  constructor(
    private catelogRequestService: CatelogRequestService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((params) => {
      try {
        this.associateId = params["id"];
        this.sellerId = params["sellerId"];
        console.log('sellerId', this.sellerId);
        return;
        if (this.associateId) {
          let payload = {
            _id: this.associateId,
            isVerified: true,
            status: "Verified",
            sellerId: this.sellerId
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
