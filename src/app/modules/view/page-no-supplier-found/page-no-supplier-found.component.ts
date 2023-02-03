import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-page-no-supplier-found",
  templateUrl: "./page-no-supplier-found.component.html",
  styleUrls: ["./page-no-supplier-found.component.scss"],
})
export class PageNoSupplierFoundComponent implements OnInit {
  queryData: any;
  constructor(private _activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this._activeRoute.queryParams.subscribe((res) => {
      this.queryData = res;
    });
  }
}
