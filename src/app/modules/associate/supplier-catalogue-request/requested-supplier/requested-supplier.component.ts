import { Component, OnInit } from "@angular/core";
import { CatelogRequestService } from "app/core/providers/user/catelog-request.service";
import { ProviderUserAuthService } from "app/core/providers/auth/provider-user-auth.service";
import * as CryptoJS from "crypto-js";
import { key, iv } from "../../../../core/constant";
import { Router } from "@angular/router";

@Component({
  selector: "app-requested-supplier",
  templateUrl: "./requested-supplier.component.html",
  styleUrls: ["./requested-supplier.component.scss"],
})
export class RequestedSupplierComponent implements OnInit {
  sellerList: any[] = [];
  private currentUserKey = "currentUserAuth";

  constructor(
    private catelogRequestService: CatelogRequestService,
    private providerUserAuthService: ProviderUserAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getassignAssociate();
  }

  getassignAssociate(): void {
    let payload = {
      page: "1",
      pageSize: "100",
      query: "",
    };
    this.catelogRequestService.getassignAssociate(payload).subscribe(
      (res) => {
        this.sellerList = res.data;
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  sendMail(data): void {
    this.catelogRequestService.sendMail(data).subscribe(
      (res) => {
        console.log("res", res);
        if (res.data) {
          this.getassignAssociate();
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  login(data): void {
    let payload = {
      sellerId: data.sellerId,
    };
    this.catelogRequestService.sellerLogin(payload).subscribe(
      (res) => {
        console.log("res", res);
        if (res.header.status === "success") {
          localStorage.removeItem(this.currentUserKey);
          this.providerUserAuthService.currentUserSubject.next(null);
          localStorage.setItem(this.currentUserKey, JSON.stringify(res));
          this.providerUserAuthService.currentUserSubject.next(res);
          this.providerUserAuthService.navToPortalIfAuthenticated();
          this.router.navigateByUrl("/seller/dashboard");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  // decrypt(password): void {
  //   const cipherParams = CryptoJS.lib.cipherParams.create({
  //     ciphertext: CryptoJS.enc.Base64.parse(password),
  //   });
  //   return CryptoJS.AEs.decrypt(cipherParams, key, {
  //     iv: iv,
  //     padding: CryptoJS.pad.Pkcs7,
  //   });
  // }
}
