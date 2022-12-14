import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.scss']
})
export class Footer2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  // terms-and-condition
  navigateToTerms() {
    const url= this.router.serializeUrl(
      this.router.createUrlTree(['/b2b/terms-of-use'])
    )
    window.open(url,"_blank");
  }
  
  navigateToPrivacyPolicy() {
    const url= this.router.serializeUrl(
      this.router.createUrlTree(['/b2b/policies-n-rules'])
    )
    window.open(url,"_blank");
  }

}
