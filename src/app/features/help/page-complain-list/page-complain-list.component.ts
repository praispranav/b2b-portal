import { Component, OnInit, } from '@angular/core';
import { ProviderHelpComplainService } from '../../../core/providers/user/provider-help-complain.service';

@Component({
  selector: 'app-page-complain-list',
  templateUrl: './page-complain-list.component.html',
  styleUrls: ['./page-complain-list.component.scss']
})
export class PageComplainListComponent implements OnInit {
  constructor(private providerHelpComplainService: ProviderHelpComplainService) { }

  ngOnInit() {
  }

}
