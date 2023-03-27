import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../../../../core/providers/user/agent.service';

@Component({
  selector: 'app-assign-account-list',
  templateUrl: './assign-account-list.component.html',
  styleUrls: ['./assign-account-list.component.scss']
})
export class AssignAccountListComponent implements OnInit {
  sellerList: any[] = [];
  constructor(
    private agentService: AgentService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAssignAssociate();
  }

  getAssignAssociate(): void {
    let payload = {
      page: "1",
      pageSize: "100",
      query: "",
    };
    this.agentService.getAssignAgent(payload).subscribe(
      (res) => {
        this.sellerList = res.data;
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  viewDetail(data): void {
    this.router.navigateByUrl("/agent/assign-account/assign-account-details" + "?sId=" + data.sellerId + "&aId=" + data.agentId)
  }
}
