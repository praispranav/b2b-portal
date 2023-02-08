import { Component, OnInit } from "@angular/core";
import { AssociateService } from "./../../../../core/providers/user/associate.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-associate-profile-list",
  templateUrl: "./associate-profile-list.component.html",
  styleUrls: ["./associate-profile-list.component.scss"],
})
export class AssociateProfileListComponent implements OnInit {
  payload = {
    page: "1",
    pageSize: "100",
    query: "",
  };
  associateList: any[] = [];
  constructor(
    private associateService: AssociateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAssociate();
  }

  getAssociate(): void {
    this.associateService.getAssociate(this.payload).subscribe(
      (res) => {
        console.log("res", res);
        this.associateList = res.data;
      },
      (err) => {
        console.log("res", err);
      }
    );
  }

  navigate(id): void {
    this.router.navigateByUrl(
      "/admin/associate-profile/view"+ "?aid=" + id
    );
  }
}
