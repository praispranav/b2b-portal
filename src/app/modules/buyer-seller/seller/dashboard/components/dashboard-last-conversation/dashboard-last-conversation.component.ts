import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../../environments/environment';
import { BuyerMailService } from '../../../../../../core/providers/user/buyer-mail.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-last-conversation',
  templateUrl: './dashboard-last-conversation.component.html',
  styleUrls: ['./dashboard-last-conversation.component.scss']
})
export class DashboardLastConversationComponent implements OnInit {
  inboxList: any[] = [];
  baseUrl: string = environment.imageStorage;
  constructor(
    private buyerMailService: BuyerMailService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPurchaseRequests();
  }

  getPurchaseRequests(): void {
    let paging='3';
    this.buyerMailService.getSellerMessage(paging).subscribe((res) => {
      res.data.forEach((element) => {
        this.inboxList = element;
      });
      console.log("inboxList", this.inboxList);
    });
  }

  navigate(id): void {
    this.router.navigateByUrl("/seller/email/inbox"+ '?rid=' + id);
  }
}