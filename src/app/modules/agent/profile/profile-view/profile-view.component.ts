import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AgentService } from "../../../../core/providers/user/agent.service";
import { environment } from "./../../../../../environments/environment";

@Component({
  selector: "app-profile-view",
  templateUrl: "./profile-view.component.html",
  styleUrls: ["./profile-view.component.scss"],
})
export class ProfileViewComponent implements OnInit {
  agentId: string;
  agentDetails: any;
  baseUrl = environment.imageStorage;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private agentService: AgentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.agentId = JSON.parse(
      localStorage.getItem("currentUserAuth")
    ).data.userId;
    if (this.agentId) {
      this.getAgentDetails(this.agentId);
    }
  }

  getAgentDetails(id): void {
    this.agentService.getAgentById(id).subscribe(
      (res) => {
        this.agentDetails = res;
        // this.password = CryptoJS.AES.encrypt(
        //   this.agentDetails.password,
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
      "/agent/profile/add-profile" + "?aid=" + id
    );
  }
}
