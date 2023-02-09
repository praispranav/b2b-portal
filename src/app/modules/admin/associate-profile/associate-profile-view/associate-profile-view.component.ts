import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AssociateService } from "./../../../../core/providers/user/associate.service";
import { environment } from "./../../../../../environments/environment";
import * as CryptoJS from "crypto-js";
import { key, iv } from "./../../../../core/constant";

@Component({
  selector: "app-associate-profile-view",
  templateUrl: "./associate-profile-view.component.html",
  styleUrls: ["./associate-profile-view.component.scss"],
})
export class AssociateProfileViewComponent implements OnInit {
  associateId: string;
  associateDetails: any;
  baseUrl = environment.imageStorage;
  key = key;
  iv = iv;
  password: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private associateService: AssociateService,
    private router: Router
  ) {}

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((params) => {
      try {
        this.associateId = params["aid"];
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
        this.password = CryptoJS.AES.encrypt(
          this.associateDetails.password,
          key,
          {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
          }
        ).ciphertext.toString(CryptoJS.enc.Base64);
        console.log("password", this.password);
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  onEdit(id): void {
    this.router.navigateByUrl(
      "/admin/associate-profile/add-profile" + "?aid=" + id
    );
  }
}
