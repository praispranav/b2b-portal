import { Component, OnInit, ViewChild } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import * as moment from "moment";
import { ModalDirective } from "ngx-bootstrap";
import { environment } from "../../../../../environments/environment";
import { MessageService } from "../../../../@pages/components/message/message.service";
import { RequestQuotationService } from "../../../../core/providers/user/request-quotation.service";
@Component({
  selector: "app-page-admin-mqr",
  templateUrl: "./page-admin-mqr.component.html",
  styleUrls: ["./page-admin-mqr.component.scss"],
})
export class PageAdminMqrComponent implements OnInit {
  @ViewChild("addNewAppModal", { static: true }) addNewAppModal: ModalDirective;

  appName = null;
  appDescription = null;
  appPrice = null;
  appNotes = null;

  selectedCategory: string = "All";
  selectedStatus: string = "All";
  selectedDate: string = "All"
  categoryList: any[] = [];
  filters: any = {
    category: "",
    status: "",
    date: "",
  }

  page: number = 1;
  pageSize: number = 100000;

  basicRows = [];
  basicSort = [];

  advanceColumns = [
    { name: "Product Name" },
    { name: "Category" },
    { name: "Posted By" },
    { name: "Date Time" },
    { name: "MOQ" },
    { name: "Price $" },
    { name: "Status" },
  ];

  selectedRfq: any = null;
  selectedStatusType: string = "";

  updateStatus: string = "";

  checkedRfq: any = {};
  imageStorage: string = environment.imageStorage;

  advanceRows = [];
  @ViewChild(DatatableComponent, { static: true })
  tableAdvance: DatatableComponent;

  //No Option YET
  //https://github.com/swimlane/ngx-datatable/issues/423
  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? "standard" : "force";

  constructor(
    private requestForQuotationService: RequestQuotationService,
    private messageService: MessageService
  ) {
    console.log(this.columnModeSetting);
    this.fetch((data) => {
      // cache our list
      this.basicSort = [...data];

      // push our inital complete list
      this.basicRows = data;
    });

    // this.fetchSampleDynamic(data => {
    //   // push our inital complete list
    //   this.dynamicRows = data;
    // });

    // this.fetchSampleAdvance(data => {
    //   // push our inital complete list
    //   this.advanceRows = data;
    // });

    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? "standard" : "force";
    };
  }
  // onSelect({ selected }) {
  //   this.selected.splice(0, this.selected.length);
  //   this.selected.push(...selected);
  // }

  onActivate(event) { }
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
    req.open("GET", `assets/data/table_browser-three.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  ngOnInit() {
    this.getAllRequestForQuotationList();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.basicSort.filter(function (d) {
      return d.title.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.basicRows = temp;
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

  dateList: any[] = [];
  getAllRequestForQuotationList() {
    this.requestForQuotationService
      .getAllRequestForQuotation({
        page: this.page,
        pageSize: this.pageSize,
        status: this.selectedStatus,
        category: this.selectedCategory,
        date: this.selectedDate
      })
      .subscribe((res) => {
        if (Array.isArray(res.data)) {
          const categoryIds: any = {};
          this.advanceRows = res.data.map((i) => {
            categoryIds[i.category] = i.categoryName;
            return {
              ...i,
              category: i.categoryName,
              dateTime: moment(i.timestamp).format("YYYY-MM-DD"),
              moq: i.quantity,
              price: i.budget,
            };
          });
          console.log(this.advanceRows);
          this.categoryList = Object.entries(categoryIds).map((i) => ({
            label: i[1],
            value: i[0],
          }));

          const dates: any = {};
          this.advanceRows.forEach((i) => dates[i.dateTime] = true);
          console.log(dates);
          this.dateList = Object.keys(dates);
          console.log("CategoryList", this.categoryList);
        }
      });
  }

  handleStatusChange(event) {
    this.getAllRequestForQuotationList();
  }

  handleCategoryChange() {
    this.getAllRequestForQuotationList();
  }

  delete(row) {
    this.selectedRfq = row;
    console.log(row);
    this.updateStatus = row.status;
  }

  confirm() {
    console.log(this.selectedRfq);
    this.requestForQuotationService
      .updateStatus({
        status: this.updateStatus,
        _id: this.selectedRfq._id,
      })
      .subscribe((res) => {
        this.getAllRequestForQuotationList();

        if (res.header.code) {
          this.messageService.success("Mqr status updated.");
        } else {
          this.messageService.error("Mqr status not updated.");
        }
        console.log("Response", res);
      });
  }

  handleChangeCheckboxes(event, row) {
    this.checkedRfq[row._id] = event.target.checked;
  }

  bulkConfirm() {
    const status = this.selectedStatusType;
    console.log(this.selectedRfq);

    Object.entries(this.checkedRfq).forEach((i) => {
      if (i[1]) {
        this.requestForQuotationService
          .updateStatus({
            status: status,
            _id: i[0],
          })
          .subscribe((res) => {
            this.getAllRequestForQuotationList();

            if (res.header.code) {
              this.messageService.success("Mqr status updated.");
            } else {
              this.messageService.error("Mqr status not updated.");
            }
            console.log("Response", res);
          });
      }
    });
  }

  applyFilter() {
    this.categoryList=[];
    this.dateList=[];
    this.requestForQuotationService
      .getAllRequestForQuotation({
        page: this.page,
        pageSize: this.pageSize,
        status: this.selectedStatus,
        category: this.selectedCategory,
        date: this.selectedDate
      })
      .subscribe((res) => {
        if (Array.isArray(res.data)) {
          const categoryIds: any = {};
          this.advanceRows = res.data.map((i) => {
            categoryIds[i.category] = i.categoryName;
            return {
              ...i,
              category: i.categoryName,
              dateTime: moment(i.timestamp).format("YYYY-MM-DD"),
              moq: i.quantity,
              price: i.budget,
            };
          });
        }
      })
  }
  resetFilter(): void {
    this.requestForQuotationService
    .getAllRequestForQuotation({
      page: this.page,
      pageSize: this.pageSize,
      status: '',
      category: '',
      date: ''
    })
    .subscribe((res) => {
      if (Array.isArray(res.data)) {
        const categoryIds: any = {};
        this.advanceRows = res.data.map((i) => {
          categoryIds[i.category] = i.categoryName;
          return {
            ...i,
            category: i.categoryName,
            dateTime: moment(i.timestamp).format("YYYY-MM-DD"),
            moq: i.quantity,
            price: i.budget,
          };
        });
      }
    })
  }
}
