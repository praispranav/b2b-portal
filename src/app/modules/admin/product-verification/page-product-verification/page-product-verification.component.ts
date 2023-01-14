import { Component, OnInit, ViewChild } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ModalDirective } from "ngx-bootstrap";
import { environment } from "../../../../../environments/environment";
import { FormProductService } from "../../../../core/providers/user/form-product.service";
import * as moment from "moment";

@Component({
  selector: "app-page-product-verification",
  templateUrl: "./page-product-verification.component.html",
  styleUrls: ["./page-product-verification.component.scss"],
})
export class PageProductVerificationComponent implements OnInit {
  @ViewChild("addNewAppModal", { static: true }) addNewAppModal: ModalDirective;

  appName = null;
  appDescription = null;
  appPrice = null;
  appNotes = null;

  basicRows = [];
  basicSort = [];

  advanceColumns = [
    { name: "Product Name" },
    { name: "Category" },
    { name: "Brand" },
    { name: "Posted By" },
    { name: "Date Time" },
    { name: "MOQ" },
    { name: "Price $" },
    { name: "Status" },
  ];

  advanceRows = [];
  imageBaseUrl: string = environment.imageStorage;
  pageSize: number = 10;
  page: number = 1;
  selectedProduct: any = null;
  updateStatus: string = "";
  @ViewChild(DatatableComponent, { static: true })
  tableAdvance: DatatableComponent;

  //No Option YET
  //https://github.com/swimlane/ngx-datatable/issues/423
  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? "standard" : "force";

  constructor(private productService: FormProductService) {
    console.log(this.columnModeSetting);
    this.fetch((data) => {
      // cache our list
      this.basicSort = [...data];

      // push our inital complete list
      this.basicRows = data;
    });
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? "standard" : "force";
    };
  }

  onActivate(event) {}
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open("GET", `assets/data/table.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  fetchSampleDynamic(cb) {
    const req = new XMLHttpRequest();
    req.open("GET", `assets/data/table_sample.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  fetchSampleAdvance(cb) {
    const req = new XMLHttpRequest();
    req.open("GET", `assets/data/table_browser-two.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService
      .getAllProduct({ page: this.page, pageSize: this.pageSize })
      .subscribe((res) => {
        if (res.data) {
          this.advanceRows = res.data.map((i) => ({
            ...i,
            brand: i.productBrand.join(","),
            dateTime: moment(new Date(i.timestamp)).format("YYYY-MM-DD"),
            image: i.productImage[0]
              ? this.imageBaseUrl + i.productImage[0]
              : "",
          }));
        }
      });
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
    // console.log(event);
  }

  onPage(event) {
    // console.log(event);
  }

  selectProduct(product) {
    console.log("Product", product);
    this.selectedProduct = product;
    this.updateStatus = product.status;
  }

  updateProductStatus() {
    this.productService
      .updateProductStatus({
        _id: this.selectedProduct._id,
        status: this.updateStatus,
      })
      .subscribe(() => {
        this.getProducts();
      });
  }
}
