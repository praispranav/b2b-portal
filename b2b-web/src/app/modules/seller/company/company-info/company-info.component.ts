import { Component, OnInit,ViewChild } from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  disableSwitching: boolean;
  @ViewChild('tabset') tabset: TabsetComponent;
  @ViewChild('first') first: TabDirective;
  @ViewChild('second') second: TabDirective;

  
  constructor() { }

  ngOnInit(): void {
  }
  confirmTabSwitch($event) {
    if (this.disableSwitching) {
      const confirm = window.confirm('Discard changes and switch tab?');
      if (confirm) {
        this.disableSwitching = false;
        this.second.active = true;
      }
    }
  }
}
