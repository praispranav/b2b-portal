import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/provider/location.service';
import { FormsModule } from '@angular/forms';
interface Location{
  name:string;
  currency:string;
  code:string;

}

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

location:Location={
  name: '',
  currency: '',
  code: ''
}
  constructor( private locationService:LocationService) { }

  ngOnInit(): void {
  }
  
add(){
  this.locationService.addLocation(this.location).subscribe((res)=>{
    alert("location added")
  },(error) => alert('Customer Not Added.'))
  
}
}
