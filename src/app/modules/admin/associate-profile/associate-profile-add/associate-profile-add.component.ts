import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ProviderMaterCountryService } from '../../../../core/providers/master/provider-mater-country.service';
// import { ProviderMaterCountryService } from "/../../../../../core/providers/master/provider-mater-country.service";
@Component({
  selector: 'app-associate-profile-add',
  templateUrl: './associate-profile-add.component.html',
  styleUrls: ['./associate-profile-add.component.scss']
})
export class AssociateProfileAddComponent implements OnInit {
 
  countries:any=[];
  formGroup: any;
  formBuilder: any;
  constructor(private providerMaterCountryService:ProviderMaterCountryService ) { }

  ngOnInit() {
    this.getCountryList();
  }
  getCountryList() {
    this.providerMaterCountryService.getMaterCountryList().subscribe(
      (res: any) => {
        this.countries = res.data;
        console.log("country", this.countries);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
}
