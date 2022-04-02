import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProviderLocationService } from './../../../../core/providers/provider-location.service';

@Component({
  selector: 'app-page-location-list',
  templateUrl: './page-location-list.component.html',
  styleUrls: ['./page-location-list.component.scss'],
})
export class PageLocationListComponent implements OnInit {
  location: any[] = [];
  assetURL: string;
  constructor(
    private route: Router,
    private providerLocationService: ProviderLocationService
  ) {
    this.assetURL = environment.apiUrl + '/location/';
  }

  ngOnInit(): void {
    this.getLocation();
  }
  navigateToEdit() {
    console.log('hello brother');
    this.route.navigate(['admin/location/edit-location']);
  }
  navigateToAdd() {
    ProviderLocationService.editId = undefined;
    this.route.navigate(['admin/location/add-location']);
  }
  getLocation() {
    this.providerLocationService.getLocationList().subscribe(
      (res: any) => {
        console.log('location res', res);
        this.location = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteLocation(id: string) {
    console.log('Id to Delete', id);
    this.providerLocationService.deleteLocation(id).subscribe((response) => {
      alert('location deleted');
      this.getLocation();
    });
  }

  editLocation(obj: any) {
    ProviderLocationService.editId = obj;
    this.route.navigate(['admin/location/add-location']);
  }
}
