import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-catalogue-menubar",
  templateUrl: "./catalogue-menubar.component.html",
  styleUrls: ["./catalogue-menubar.component.scss"],
})
export class CatalogueMenubarComponent implements OnInit {
  searchParams: any = {};
  productSearchText: string = "Some Test";

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.searchParams = params;
      this.productSearchText = params["searchProduct"];
    });
  }

  ngOnInit() {}

  searchProduct() {
    this.router.navigate([], {
      queryParams: {
        ...this.searchParams,
        searchProduct: this.productSearchText,
        page: 1,
        pageSize: 10
      },
    });
  }
}
