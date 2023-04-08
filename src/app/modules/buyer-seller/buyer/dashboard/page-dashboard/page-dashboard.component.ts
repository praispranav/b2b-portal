import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../../core/providers/user/dashboard.service';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {
  counts: any;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getCounts();
  }

  getCounts(): void {
    this.dashboardService.buyerCount().subscribe(
      (response) => {
        this.counts = response.data;
      },
      (error) => {
        console.log('error', error);
      }
    )
  }
}
