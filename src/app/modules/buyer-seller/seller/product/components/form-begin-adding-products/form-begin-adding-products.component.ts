import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-begin-adding-products",
  templateUrl: "./form-begin-adding-products.component.html",
  styleUrls: ["./form-begin-adding-products.component.scss"],
})
export class FormBeginAddingProductsComponent implements OnInit {
  @Output('handleNotOnPortal')
  handleNotOnPortal: EventEmitter<Boolean> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}
  
  handleEventNotOnPortal(){
    this.handleNotOnPortal.emit(true)
    this.router.navigateByUrl('/seller/product/product-map');
  }
}
