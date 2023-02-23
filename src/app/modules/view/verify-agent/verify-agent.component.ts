import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AgentService } from "../../../core/providers/user/agent.service";

@Component({
  selector: "app-verify-agent",
  templateUrl: "./verify-agent.component.html",
  styleUrls: ["./verify-agent.component.scss"],
})
export class VerifyAgentComponent implements OnInit {
  payload: any;
  agentId: string;
  constructor(
    private agentService: AgentService,
    private _activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((params) => {
      try {
        this.agentId = params["id"];
      } catch (err) {
        console.log("err..");
      }
    });
  }

  verifyAgent() {
    this.payload = {
      _id: this.agentId,
      isVerified: true,
    };
    this.agentService.agentApproved(this.payload).subscribe(
      (res) => {
        console.log("res", res);
        if (res.header.status === "success" && res.data) {
          this.router.navigateByUrl("/user-auth/sign-in");
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
}
