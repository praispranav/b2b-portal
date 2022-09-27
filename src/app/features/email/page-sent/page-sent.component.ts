import { Component, OnInit } from '@angular/core';
import { pagesToggleService } from '../../../@pages/services/toggler.service';
import { EmailServiceLight } from '../email.service';
import { List } from '../list';
//Switch core layout here
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

@Component({
  selector: 'app-page-sent',
  templateUrl: './page-sent.component.html',
  styleUrls: ['./page-sent.component.scss']
})
export class PageSentComponent implements OnInit {
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

