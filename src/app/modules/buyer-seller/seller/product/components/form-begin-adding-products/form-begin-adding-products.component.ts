import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-form-begin-adding-products",
  templateUrl: "./form-begin-adding-products.component.html",
  styleUrls: ["./form-begin-adding-products.component.scss"],
})
export class FormBeginAddingProductsComponent implements OnInit {
  @Output('handleNotOnPortal')
  handleNotOnPortal: EventEmitter<Boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  
  handleEventNotOnPortal(){
    this.handleNotOnPortal.emit(true)
  }
}
