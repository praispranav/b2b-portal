import { Component, OnInit } from "@angular/core";
import { AssociateService } from "app/core/providers/user/associate.service";
import { CatelogRequestService } from "app/core/providers/user/catelog-request.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-requested-cateloging",
  templateUrl: "./requested-cateloging.component.html",
  styleUrls: ["./requested-cateloging.component.scss"],
})
export class RequestedCatelogingComponent implements OnInit {
  payload = {
    page: "1",
    pageSize: "100",
    query: "",
  };
  assignData: any;
  sellerData: any;
  associateList: any[] = [];
  sellerList: any[] = [];
  constructor(
    private associateService: AssociateService,
    private catelogRequestService: CatelogRequestService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAssociateList();
    this.getRequest();
  }

  getRequest(): void {
    let payload = {
      page: "1",
      pageSize: "100",
      query: "",
    };
    this.catelogRequestService.getRequest(payload).subscribe(
      (res) => {
        this.sellerList = res.data;
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  getAssociateList(): void {
    this.associateService.getAssociate(this.payload).subscribe(
      (res) => {
        this.associateList = res.data;
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  onRadioClick(data): void {
    this.assignData = {
      nameAssociate: data.companyName,
      associateId: data._id,
    };
  }

  onAssign(seller, type): void {
    console.log("seller", seller);

    if (type === "all") {
      this.associateList.forEach((element) => {
        this.sellerData = element;
      });
    } else {
      this.sellerData = seller;
    }
  }

  onSubmit(): void {
    let payload: any;
    payload = {
      sellerId: this.sellerData.sellerId,
      sellerName: this.sellerData.sellerName,
      company: this.sellerData.company,
      email: this.sellerData.email,
      phone: this.sellerData.phone,
      city: this.sellerData.city,
      country: this.sellerData.country,
      password: this.sellerData.password,
      role: this.sellerData.role,
      isVerified: this.sellerData.isVerified,
      isApprovedByAdmin: this.sellerData.isApprovedByAdmin,
      status: "Done",
      assignAssociate: "Yes",
      assignToAssociate: true,
      nameAssociate: this.assignData.nameAssociate,
      associateId: this.assignData.associateId,
      _id: this.sellerData._id,
    };
    console.log("payload", payload);
    this.catelogRequestService.requestUpdate(payload).subscribe(
      (res) => {
        if (res.header.status === "success") {
          this.catelogRequestService.assignAssociate(payload).subscribe(
            (res) => {
              this.router.navigateByUrl(
                "/admin/cataloging/requested-cateloging"
              );
            },
            (err) => {
              console.log("err", err);
            }
          );
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
}
