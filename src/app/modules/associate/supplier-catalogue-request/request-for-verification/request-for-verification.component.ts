import { Component, OnInit } from "@angular/core";
import { CatelogRequestService } from "app/core/providers/user/catelog-request.service";

@Component({
  selector: "app-request-for-verification",
  templateUrl: "./request-for-verification.component.html",
  styleUrls: ["./request-for-verification.component.scss"],
})
export class RequestForVerificationComponent implements OnInit {
  sellerList: any[] = [];
  constructor(private catelogRequestService: CatelogRequestService) {}

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
    let payload = {};
    this.catelogRequestService.sendMail(payload).subscribe(
      (res) => {
        console.log("res", res);
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
}
