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
  key = key;
  iv = iv;

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
    // const password1 = JSON.stringify(data.password);
    const cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(data.password),
      
    });
    console.log('cipherParams',cipherParams);
    let password = CryptoJS.AES.decrypt(cipherParams, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).ciphertext.toString(CryptoJS.enc.Utf8);
    console.log("password", password);
    return;
    this.providerUserAuthService.userSignOutNoApiCall(false);
    this.router.navigateByUrl(
      "/user-auth/sign-in" + "?email=" + data.email + "&psd=" + password
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
