import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-reset-password',
  templateUrl: './page-reset-password.component.html',
  styleUrls: ['./page-reset-password.component.scss']
})
export class PageResetPasswordComponent implements OnInit {
  txtfname;
  txtlname;
  txtusername;
  txtpassword;
  txtemail;
  
  constructor() { }

  ngOnInit() {
  }

}
