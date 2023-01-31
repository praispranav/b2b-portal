import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { FormProductService } from "../../../../core/providers/user/form-product.service";
@Component({
  selector: "app-button-three-widget",
  templateUrl: "./button-three-widget.component.html",
  styleUrls: ["./button-three-widget.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonThreeWidgetComponent implements OnInit {
  productList:any;
  baseUrl: string;
  constructor(private _formProductService: FormProductService) {}

  ngOnInit() {
    this.baseUrl = environment.imageStorage;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._formProductService.productSubject.subscribe((res) => {
        console.log("res", res);
        this.productList=res;
      });
    }, 2000);
  }

}
