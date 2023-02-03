import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ModalDirective } from "ngx-bootstrap";
import { UserVerificationService } from "../../../../core/providers/user/user-verification.service";
import * as moment from "moment";
import { environment } from "../../../../../environments/environment";

@Component({
  selector: "app-user-verification-list",
  templateUrl: "./user-verification-list.component.html",
  styleUrls: ["./user-verification-list.component.scss"],
})
export class UserVerificationListComponent implements OnInit {
  @ViewChild("addNewAppModal", { static: true }) addNewAppModal: ModalDirective;

  imageUrl: string = environment.imageStorage;
  appName = null;
  appDescription = null;
  appPrice = null;
  appNotes = null;

  queryParams: any = {};
  filters: any = {
    country: "",
    state: "",
    city: "",
    status: "",
  };
  total: number = 0
  basicRows = [];
  basicSort = [];

  advanceColumns = [
    { name: "Supplier/Buyer Name", prop: "name" },
    { name: "Company Name", prop: "company" },
    { name: "Type", prop: "role" },
    { name: "Country", prop: "country" },
    { name: "City", prop: "city" },
    { name: "Listing Date", prop: "timestamp" },
    { name: "Status", prop: "status" },
  ];

  advanceRows = [];
  @ViewChild(DatatableComponent, { static: true })
  tableAdvance: DatatableComponent;

  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? "standard" : "force";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userVerificationService: UserVerificationService
  ) {
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? "standard" : "force";
    };

    if (
      this.queryParams.page &&
      this.queryParams.page.length != 0 &&
      this.queryParams.pageSize &&
      this.queryParams.pageSize.length != 0
    ) {
    } else {
      this.router.navigate([], {
        queryParams: { ...this.queryParams, page: 1, pageSize: 10000 },
      });
    }

    // if () {
    // } else {
    //   this.router.navigate([], { queryParams: { ...this.queryParams, } });
    // }

    this.route.queryParams.subscribe((params) => {
      this.queryParams = params;

      if (
        this.queryParams.pageSize &&
        this.queryParams.pageSize.length != 0 &&
        this.queryParams.page &&
        this.queryParams.page.length != 0
      ) {
        this.getUsers({
          page: params.page,
          pageSize: params.pageSize,
          status: params.status,
          city: params.city,
          country: params.country,
          state: params.state,
        });
      }
    });
  }

  ngOnInit() {
    // this.fetchSampleAdvance()
  }

  countriesList: any[] = [];
  statesList: any = [];
  cityList: any[] = [];
  statusList: any[] = [];

  getUsers({ pageSize, page, status, city, country, state }) {
    status = status || ""
    city = city || ""
    country = country || ""
    state = state || ''
    this.userVerificationService
      .getUsers({ page, pageSize, status, city, country, state })
      .subscribe((res) => {
        console.log("res", res);
        if (res.header.code === 200) {
          this.advanceRows = res.data.users.map((i) => {
            return {
              ...i,
              status: i.isApprovedByAdmin,
              timestamp: moment(new Date(i.timestamp)).format("YYYY-DD-MM"),
            };
          });

          this.countriesList = res.data.country;
          this.statesList = res.data.state;
          this.cityList = res.data.city;
          this.statusList = res.data.status;
          this.total = Number(res.data.total);
        }
      });
  }

  onActivate(event) {
    console.log("onActivate", event)
  }

  activateFilter(event, key) {
    console.log(key)
    this.router.navigate([], {
      queryParams: { ...this.queryParams, [key]: event.target.value },
    });
  }

  async view(id, role) {
    if (role == "buyer") {
      this.router.navigate(["/admin/user-list/buyer-view"], {
        queryParams: { id: id, type: "buyer" },
      });
    } else {
      this.router.navigate(["/admin/user-list/user-view"], {
        queryParams: { id: id, type: "seller" },
      });
    }
  }
  onPage(event) {
    // this.router.navigate([],  { queryParams: {...this.queryParams, page: Number(event.offset )+ 1}})
  }

  onReset(): void {
    this.router.navigate([], { queryParams: { 'page': this.queryParams.page, 'pageSize': this.queryParams.pageSize } });
    this.cityList = [];
    this.countriesList = [];
    this.statesList = [];
    this.statusList = [];
  }
}
