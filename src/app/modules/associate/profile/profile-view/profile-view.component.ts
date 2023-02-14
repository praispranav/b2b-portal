import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AssociateService } from '../../../../core/providers/user/associate.service';
import { environment } from "./../../../../../environments/environment";

@Component({
  selector: "app-profile-view",
  templateUrl: "./profile-view.component.html",
  styleUrls: ["./profile-view.component.scss"],
})
export class ProfileViewComponent implements OnInit {
  associateId: string;
  associateDetails: any;
  baseUrl = environment.imageStorage;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private associateService: AssociateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.associateId = JSON.parse(
      localStorage.getItem("currentUserAuth")
    ).data.userId;
    if (this.associateId) {
      this.getAssociateDetails(this.associateId);
    }
  }

  getAssociateDetails(id): void {
    this.associateService.getAssociateById(id).subscribe(
      (res) => {
        this.associateDetails = res;
        // this.password = CryptoJS.AES.encrypt(
        //   this.associateDetails.password,
        //   key,
        //   {
        //     iv: iv,
        //     mode: CryptoJS.mode.CBC,
        //     padding: CryptoJS.pad.Pkcs7,
        //   }
        // ).ciphertext.toString(CryptoJS.enc.Base64);
        // console.log("password", this.password);
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  onEdit(id): void {
    this.router.navigateByUrl(
      "/associate/profile/add-profile" + "?aid=" + id
    );
  }
}
