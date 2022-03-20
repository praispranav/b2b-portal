import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/provider/location.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface Location {
  name: string;
  currency: string;
  cost: string;
  code: string;
  _id?: string;
}

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  location: Location = {
    name: '',
    currency: '',
    code: '',
    cost: ''
  }
  isEditMode: boolean = false;
  constructor(private locationService: LocationService, private route: Router) { }

  ngOnInit(): void {
    const values = LocationService.editId
    if (values) {
      this.isEditMode = true;
      this.location = { ...values }
    }
  }

  add() {
    this.locationService.addLocation(this.location).subscribe((res) => {
      alert("location added")
      this.route.navigate(['admin/location/location-list'])
    }, (error) => alert('Location Not Added.'))
  }

  editLocation() {
    this.locationService.editLocation(this.location).subscribe((res) => {
      alert("Location Edited :" + this.location.name)
      this.route.navigate(['admin/location/location-list'])

    })
  }

  submit() {
    if (this.isEditMode) this.editLocation();
    else this.add();
  }
}
