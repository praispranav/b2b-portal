import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../../../core/providers/user/agent.service';

@Component({
  selector: 'app-assign-account-list',
  templateUrl: './assign-account-list.component.html',
  styleUrls: ['./assign-account-list.component.scss']
})
export class AssignAccountListComponent implements OnInit {
  sellerList: any[] = [];
  constructor(private agentService: AgentService) {}

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

  sendMail(data): void {
    // this.agentService.sendMail(data).subscribe(
    //   (res) => {
    //     console.log("res", res);
    //     if (res.data) {
    //       this.getAssignAssociate();
    //     }
    //   },
    //   (err) => {
    //     console.log("err", err);
    //   }
    // );
  }
}
