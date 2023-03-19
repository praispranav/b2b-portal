import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../../../core/providers/user/agent.service';

@Component({
  selector: 'app-requested-seller',
  templateUrl: './requested-seller.component.html',
  styleUrls: ['./requested-seller.component.scss']
})
export class RequestedSellerComponent implements OnInit {

  payload = {
    page: "1",
    pageSize: "100",
    query: "",
  };
  assignData: any;
  sellerData: any;
  agentList: any[] = [];
  sellerList: any[] = [];
  radioCheck: boolean = false;
  constructor(
    private agentService: AgentService,
  ) {}

  ngOnInit() {
    this.getAgentList();
    this.getRequest();
  }

  getRequest(): void {
    let payload = {
      page: "1",
      pageSize: "100",
      query: "",
    };
    this.agentService.getRequest(payload).subscribe(
      (res) => {
        this.sellerList = res.data;
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  getAgentList(): void {
    this.agentService.getAgent(this.payload).subscribe(
      (res) => {
        this.agentList = res.data;
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  onRadioClick(data): void {
    this.agentList.forEach((element) => {
      if (element._id === data._id) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    });

    this.assignData = {
      nameAgent: data.companyName,
      agentId: data._id,
    };
  }

  onAssign(seller, type): void {
    console.log("seller", seller);

    if (type === "all") {
      this.agentList.forEach((element) => {
        this.sellerData = element;
      });
    } else {
      this.sellerData = seller;
    }
  }

  onSubmit(): void {
    let payload: any;
    payload = {
      sellerId: this.sellerData.sellerId,
      sellerName: this.sellerData.sellerName,
      company: this.sellerData.company,
      email: this.sellerData.email,
      phone: this.sellerData.phone,
      city: this.sellerData.city,
      country: this.sellerData.country,
      password: this.sellerData.password,
      role: this.sellerData.role,
      isVerified: this.sellerData.isVerified,
      isApprovedByAdmin: this.sellerData.isApprovedByAdmin,
      status: "Done",
      assignAgent: "Yes",
      assignToAgent: true,
      nameAgent: this.assignData.nameAgent,
      agentId: this.assignData.agentId,
      _id: this.sellerData._id,
    };
    console.log("payload", payload);
    this.agentService.requestUpdate(payload).subscribe(
      (res) => {
        if (res.header.status === "success") {
          this.agentService.assignAgent(payload).subscribe(
            (res) => {
              this.getRequest();
              this.getAgentList();
            },
            (err) => {
              console.log("err", err);
            }
          );
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
}
