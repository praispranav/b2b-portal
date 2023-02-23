import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AgentService } from "../../../../core/providers/user/agent.service";

@Component({
  selector: "app-agent-profile-list",
  templateUrl: "./agent-profile-list.component.html",
  styleUrls: ["./agent-profile-list.component.scss"],
})
export class AgentProfileListComponent implements OnInit {
  payload = {
    page: "1",
    pageSize: "100",
    query: "",
  };
  agentList: any[] = [];
  constructor(
    private agentService: AgentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAgent();
  }

  getAgent(): void {
    this.agentService.getAgent(this.payload).subscribe(
      (res) => {
        console.log("res", res);
        this.agentList = res.data;
      },
      (err) => {
        console.log("res", err);
      }
    );
  }

  navigate(id): void {
    this.router.navigateByUrl(
      "/admin/associate-profile/view"+ "?aid=" + id
    );
  }
}
