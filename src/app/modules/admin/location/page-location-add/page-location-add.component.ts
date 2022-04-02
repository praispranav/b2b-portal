import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProviderLocationService } from './../../../../core/providers/provider-location.service';

interface Location {
  name: string;
  currency: string;
  cost: string;
  code: string;
  _id?: string;
}

@Component({
  selector: 'app-page-location-add',
  templateUrl: './page-location-add.component.html',
  styleUrls: ['./page-location-add.component.scss'],
})
export class PageLocationAddComponent implements OnInit {
  location: Location = {
    name: '',
    currency: '',
    code: '',
    cost: '',
  };
  isEditMode: boolean = false;
  constructor(
    private providerLocationService: ProviderLocationService,
    private route: Router
  ) {}

  ngOnInit(): void {
    const values = ProviderLocationService.editId;
    if (values) {
      this.isEditMode = true;
      this.location = { ...values };
    }
  }

  add() {
    this.providerLocationService.addLocation(this.location).subscribe(
      (res) => {
        alert('location added');
        this.route.navigate(['admin/location/location-list']);
      },
      (error) => alert('Location Not Added.')
    );
  }

  editLocation() {
    this.providerLocationService
      .editLocation(this.location)
      .subscribe((res) => {
        alert('Location Edited :' + this.location.name);
        this.route.navigate(['admin/location/location-list']);
      });
  }

  submit() {
    if (this.isEditMode) this.editLocation();
    else this.add();
  }
}
