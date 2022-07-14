import { Component, OnInit } from '@angular/core';
import { ProviderHelpSuggestionService } from '../../../core/providers/user/provider-help-suggestion.service';

@Component({
  selector: 'app-page-suggestion-list',
  templateUrl: './page-suggestion-list.component.html',
  styleUrls: ['./page-suggestion-list.component.scss']
})
export class PageSuggestionListComponent implements OnInit {
  helpSuggestionList: any[] = [];

  constructor(
    private providerHelpSuggestionService: ProviderHelpSuggestionService,
  ) { }

  ngOnInit() {
    this.getHelpSuggestionListByFilter(0, 1000, {});
  }

  getHelpSuggestionListByFilter(index: number, length: number, query: any = {}) {
    this.providerHelpSuggestionService
      .getHelpSuggestionListByFilter(index, length, query)
      .subscribe((res) => {
        this.helpSuggestionList = res.data;
      });
  }
}

