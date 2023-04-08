import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../../../core/providers/user/dashboard.service';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.scss']
})
export class DashboardInfoComponent implements OnInit {
  counts: any;
  sellerId: string;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.sellerId = JSON.parse(localStorage.getItem('currentUserAuth')).data._id;
    if (this.sellerId) {
      this.getCounts();
    }
  }

  getCounts(): void {
    let payload = {
      "sellerId": this.sellerId
    }
    this.dashboardService.sellerCount(payload).subscribe(
      (response) => {
        this.counts = response.data;
      },
      (error) => {
        console.log('error', error);
      }
    )
  }
}
