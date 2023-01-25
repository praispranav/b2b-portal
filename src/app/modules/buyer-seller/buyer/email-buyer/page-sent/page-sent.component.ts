import { Component, OnInit } from '@angular/core';
import { EmailServiceLight } from '../email.service';
import { List } from '../list';
//Switch core layout here
import { pagesToggleService } from '../../../../../@pages/services/toggler.service';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import { BuyerMailService } from '../../../../../core/providers/user/buyer-mail.service';
import { environment } from '../../../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-sent',
  templateUrl: './page-sent.component.html',
  styleUrls: ['./page-sent.component.scss']
})
export class PageSentComponent implements OnInit {
  mailsWithDates: any[] = [];
  imageBaseUrl: string = environment.imageStorage;
  queryParams: any = {
    sellerId: "",
    requestId:"",
    supplierId: ""
  }
  messages: any [ ] = []
  images: any[] = [];
  replyMessage: string = ''

  emailList = [];
  selectedEmail: any;
  editingMode = false;
  editorModules = {
    // https://github.com/KillerCodeMonkey/ngx-quill
    toolbar: [[{ header: [1, 2, 3, 4, false] }], ['bold', 'italic', 'underline'], ['link', 'image']]
  };
  isEmailSelected = false;

  constructor(private router: Router,private route: ActivatedRoute, private _service: EmailServiceLight, private toggler: pagesToggleService, private buyerMailService: BuyerMailService) {}
  ngOnInit() {
    this._service.getEmails().subscribe(list => {
      this.emailList = list.emails;
    });
    this.toggler.toggleFooter(false);
    this.toggler.setHeaderClass('light');
    this.toggler.setPageContainer('full-height');
    this.toggler.setContent('full-height');

    this.getPurchaseRequests();
    this.route.queryParams.subscribe((params)=>{
      this.queryParams = params;
      this.getMessages();
    })
  }

  findRequest(requestId){
    let selectedMail;
    this.mailsWithDates.forEach((data)=>{
      data.data.forEach((mail)=>{
        if(mail._id === requestId)
        if( requestId === mail._id ){
          selectedMail = mail
        }
      })
    })

    this.selectedEmail = selectedMail;
    console.log("SelectedMail", this.selectedEmail)
  }

  onSelect(item: any): void {
    this.selectedEmail = item;
    this.isEmailSelected = true;

    this.router.navigate([], { queryParams: { supplierId: item.receiverId, requestId: item._id }})
  }
  onBack() {
    this.isEmailSelected = false;
  }

  getPurchaseRequests(){
    this.buyerMailService.getBuyerMessages().subscribe((res)=>{
      console.log(res);
      this.mailsWithDates = res.data;
    })
  }

  getMessages(){
    // if(this.queryParams.requestId.length == 0) return;
    this.buyerMailService.readMessages(this.queryParams.requestId).subscribe((res)=>{})
    this.buyerMailService.getSentMessages(this.queryParams.requestId).subscribe((res)=>{
     
      this.findRequest(this.queryParams.requestId)

      this.messages = res.data.messages;
      this.images = res.data.images
      console.log("Messages", this.messages);
    })
  }

  sendReply(){
    
    this.buyerMailService.sendMessage({ requestId: this.queryParams.requestId, message: this.replyMessage,  "attachments":[] }).subscribe((res)=>{
     
     this.getMessages();
     this.replyMessage = ''
    })
  }
}

