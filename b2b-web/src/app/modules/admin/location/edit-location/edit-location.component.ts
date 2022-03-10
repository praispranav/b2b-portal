import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/provider/location.service';
import { Router } from '@angular/router';
interface Location{
  name:string;
  currency:string;
  code:string;

}
@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.scss']
})
export class EditLocationComponent implements OnInit {
  location:Location={
    name: '',
    currency: '',
    code: ''
  }
  isEditMode: boolean = false;
  id: string | null;
  constructor(private locationService:LocationService,private route:Router) {
    this.id = '';
   }

  ngOnInit(): void {
    this.isEditMode  = false
  }
  submit() {
    console.log(this.location);
    if(this.isEditMode){
      console.log("Id", this.id)
      console.log("Location On Submit", this.location)
      this.locationService.editLocation({ _id: this.id,...this.location}).subscribe((response:any)=>{
        alert(response.message|| "location Saved")
        this.route.navigate(['admin/location/list'])
      }, (error)=> alert("location Not Saved"))
    } else {
      let requestPayload = this.location;
      
      this.locationService.addLocation(requestPayload).subscribe(
        (res) => {
          alert("Location Saved");
          this.route.navigate(['admin/location/list'])
      },
      (err:any) => {
        alert("Error" + err.response.data.message);
      }
    );
    }}}
