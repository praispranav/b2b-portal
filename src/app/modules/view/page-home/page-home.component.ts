import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

interface ReqQuoFormData {
  productName: string;
  quantity: string;
  unit: string;
}

@Component({
  selector: "app-page-home",
  templateUrl: "./page-home.component.html",
  styleUrls: ["./page-home.component.scss"],
})
export class PageHomeComponent implements OnInit {
  requestForQuotationData: ReqQuoFormData = {
    productName: "",
    quantity: "",
    unit: "",
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  setRequestForQuotation = (formData: ReqQuoFormData) =>{
    console.log(formData);
    (this.requestForQuotationData = formData);
  }

 
}
