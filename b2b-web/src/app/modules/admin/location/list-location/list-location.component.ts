import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocationService } from 'src/app/provider/location.service';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.scss']
})
export class ListLocationComponent implements OnInit {
  location: any[] = [];
  assetURL:string;
  constructor(private route:Router,private locationService: LocationService) {
    this.assetURL = environment.apiUrl +  '/location/';
   }

  ngOnInit(): void {
    this.getLocation()
  }
  navigateToEdit()
  {  console.log("hello brother");
    this.route.navigate(['/admin/location/edit'])
  }
  navigateToAdd()  {
    this.route.navigate(['admin/location/manage']);
  }
  getLocation() {
    this.locationService.getLocationList().subscribe(
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
    this.locationService.deleteLocation(id).subscribe((response) => {
      alert('location deleted');
       this.getLocation();
    });
  }
}
