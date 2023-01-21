import { Component, OnInit } from '@angular/core';
import { EmailServiceLight } from '../email.service';
import { List } from '../list';
import { pagesToggleService } from '../../../../../@pages/services/toggler.service';

@Component({
  selector: 'app-page-spam',
  templateUrl: './page-spam.component.html',
  styleUrls: ['./page-spam.component.scss']
})
export class PageSpamComponent implements OnInit {
  emailList = [];
  selectedEmail: List;
  editingMode = false;
  editorModules = {
    // https://github.com/KillerCodeMonkey/ngx-quill
    toolbar: [[{ header: [1, 2, 3, 4, false] }], ['bold', 'italic', 'underline'], ['link', 'image']]
  };
  isEmailSelected = false;
  constructor(private _service: EmailServiceLight, private toggler: pagesToggleService) {}
  ngOnInit() {
    this._service.getEmails().subscribe(list => {
      this.emailList = list.emails;
    });
    this.toggler.toggleFooter(false);
    this.toggler.setHeaderClass('light');
    this.toggler.setPageContainer('full-height');
    this.toggler.setContent('full-height');
  }
  onSelect(item: List): void {
    this.selectedEmail = item;
    this.isEmailSelected = true;
  }
  onBack() {
    this.isEmailSelected = false;
  }
}

