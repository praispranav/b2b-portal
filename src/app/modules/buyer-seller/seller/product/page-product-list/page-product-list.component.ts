import { Component, OnInit, ViewChild } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ModalDirective } from "ngx-bootstrap";
import { FormProductService } from "../../../../../core/providers/user/form-product.service";
import * as moment from "moment";
import { environment } from "../../../../../../environments/environment";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page-product-list",
  templateUrl: "./page-product-list.component.html",
  styleUrls: ["./page-product-list.component.scss"],
})
export class PageProductListComponent implements OnInit {
  brandApprovalList: any[] = [];

  @ViewChild("addNewAppModal", { static: true }) addNewAppModal: ModalDirective;

  appName = null;
  appDescription = null;
  appPrice = null;
  appNotes = null;

  imageBaseUrl: string = environment.imageStorage;

  basicRows = [];
  basicSort = [];
  sellerId: string;
  page: number = 1;
  pageSize: number = 10;
  selectedProduct: any = null;
  updateStatus: string = "";

  productCounts: any = {};

  advanceColumns = [
    { name: "Product Name" },
    { name: "Category" },
    { name: "Brand" },
    { name: "Posted By" },
    { name: "Date Time" },
    { name: "MOQ" },
    { name: "Status" },
  ];
  // getBrandApprovalListByFilter(index: number, length: number, query: any = {}) {
  //   this.providerBrandApprovalService
  //     .getBrandApprovalListByFilter(index, length, query)
  //     .subscribe((res) => {
  //       this.brandApprovalList = res.data;
  //     });
  // }

  advanceRows = [];
  @ViewChild(DatatableComponent, { static: true })
  tableAdvance: DatatableComponent;

  //No Option YET
  //https://github.com/swimlane/ngx-datatable/issues/423
  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? "standard" : "force";

  constructor(private productService: FormProductService,
    private _activated: ActivatedRoute,
  ) {
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? "standard" : "force";
    };
  }

  getProducts() {
    let payload = {
      userId: this.sellerId,
      page: this.page,
      pageSize: this.pageSize,
      searchText: "",
    }
    this.productService
      .getProductBySeller(payload)
      .subscribe((res) => {
        if (res.data) {
          this.advanceRows = res.data.map((i) => ({
            ...i,
            brand: i.productBrand.join(","),
            dateTime: moment(new Date(i.timestamp)).format("YYYY-MM-DD"),
            image: i.productImage[0] ? this.imageBaseUrl + i.productImage[0] : ''
          }));
        }
      });

    this.getProductCounts();
  }

  fetchSampleAdvance(cb) {
    const req = new XMLHttpRequest();
    req.open("GET", `assets/data/table_browser-five.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  ngOnInit() {
    this.sellerId = JSON.parse(localStorage.getItem('currentUserAuth')).data._id;
    this.getProducts();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.basicSort.filter(function (d) {
      // Change the column name here
      // example d.places
      return d.title.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.basicRows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  showModal() {
    this.addNewAppModal.show();
  }
  addRow() {
    let temp = {
      appName: this.appName,
      description: this.appDescription,
      notes: this.appPrice,
      price: this.appNotes,
    };
    //https://github.com/swimlane/ngx-datatable/issues/701
    // this.dynamicRows = [...this.dynamicRows, temp];
    this.addNewAppModal.hide();
  }
  select(event) {
    console.log(event);
  }

  onPage(event) {
    console.log(event);
  }

  getProductCounts() {
    this.productService.getProductCounts().subscribe((res) => {
      let total = 0;
      let activeListing = 0;
      let inActiveListing = 0;
      let rejectedProduct = 0;
      if (Array.isArray(res.data)) {
        res.data.forEach((i) => {
          total += i.count;

          if (i._id.status == "Pending") {
            inActiveListing = i.count;
          }

          if (i._id.status == "Approved") {
            activeListing = i.count;
          }

          if (i._id.status == "Rejected") {
            rejectedProduct = i.count;
          }
        });

        this.productCounts = {
          total,
          inActiveListing,
          activeListing,
          rejectedProduct,
        };
      }
      console.log("Product Status Counts", res);
    });
  }

}
