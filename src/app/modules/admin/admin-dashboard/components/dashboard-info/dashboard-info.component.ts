import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../../core/providers/user/dashboard.service';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.scss']
})
export class DashboardInfoComponent implements OnInit {
  counts: any;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getCounts();
  }

  getCounts(): void {
    this.dashboardService.adminCount().subscribe(
      (response) => {
        this.counts = response.data;
      },
      (error) => {
        console.log('error', error);
      }
    )
  }

}
