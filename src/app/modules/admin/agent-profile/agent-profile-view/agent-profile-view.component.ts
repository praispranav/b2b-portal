import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as CryptoJS from "crypto-js";
import { AgentService } from "../../../../core/providers/user/agent.service";
import { environment } from "./../../../../../environments/environment";
import { iv, key } from "./../../../../core/constant";

@Component({
  selector: "app-agent-profile-view",
  templateUrl: "./agent-profile-view.component.html",
  styleUrls: ["./agent-profile-view.component.scss"],
})
export class AgentProfileViewComponent implements OnInit {
  agentId: string;
  agentDetails: any;
  baseUrl = environment.imageStorage;
  key = key;
  iv = iv;
  password: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private agentService: AgentService,
    private router: Router
  ) {}

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((params) => {
      try {
        this.agentId = params["aid"];
        this.getAgentDetails(this.agentId);
      } catch (err) {
        console.log("err..");
      }
    });
  }

  getAgentDetails(id): void {
    this.agentService.getAgentById(id).subscribe(
      (res) => {
        this.agentDetails = res;
        this.password = CryptoJS.AES.encrypt(
          this.agentDetails.password,
          key,
          {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
          }
        ).ciphertext.toString(CryptoJS.enc.Base64);
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  onEdit(id): void {
    this.router.navigateByUrl(
      "/admin/agent-profile/add-profile" + "?aid=" + id
    );
  }
}
