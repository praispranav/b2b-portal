import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderLocationService } from './../../../../core/providers/provider-location.service';

interface Location {
  name: string;
  currency: string;
  code: string;
  cost: string;
}
@Component({
  selector: 'app-page-location-edit',
  templateUrl: './page-location-edit.component.html',
  styleUrls: ['./page-location-edit.component.scss'],
})
export class PageLocationEditComponent implements OnInit {
  location: Location = {
    name: '',
    currency: '',
    code: '',
    cost: '',
  };
  isEditMode: boolean = false;
  id: string | null;
  constructor(
    private providerLocationService: ProviderLocationService,
    private route: Router
  ) {
    this.id = '';
  }

  ngOnInit(): void {
    this.isEditMode = false;
  }
  submit() {
    console.log(this.location);
    if (this.isEditMode) {
      console.log('Id', this.id);
      console.log('Location On Submit', this.location);
      this.providerLocationService
        .editLocation({ _id: this.id, ...this.location })
        .subscribe(
          (response: any) => {
            alert(response.message || 'location Saved');
            this.route.navigate(['admin/location/location-list']);
          },
          (error) => alert('location Not Saved')
        );
    } else {
      let requestPayload = this.location;

      this.providerLocationService.addLocation(requestPayload).subscribe(
        (res) => {
          alert('Location Saved');
          this.route.navigate(['admin/location/location-list']);
        },
        (err: any) => {
          alert('Error' + err.response.data.message);
        }
      );
    }
  }
}
