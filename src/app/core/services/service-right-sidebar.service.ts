import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ServiceRightSidebarService {
  private statusService = new BehaviorSubject<boolean>(false);
  currentStatus = this.statusService.asObservable();
  constructor() {}
  changeMsg(msg: boolean) {
    this.statusService.next(msg);
  }
}