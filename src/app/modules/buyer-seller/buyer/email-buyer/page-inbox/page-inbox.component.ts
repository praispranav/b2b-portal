import { Component, OnInit } from "@angular/core";
import { EmailServiceLight } from "../email.service";
import { List } from "../list";
//Switch core layout here
import { QuillEditorComponent } from "ngx-quill/src/quill-editor.component";
import { pagesToggleService } from "../../../../../@pages/services/toggler.service";
import { BuyerMailService } from "../../../../../core/providers/user/buyer-mail.service";
import { environment } from "../../../../../../environments/environment";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-page-inbox",
  templateUrl: "./page-inbox.component.html",
  styleUrls: ["./page-inbox.component.scss"],
})
export class PageInboxComponent implements OnInit {
  mailsWithDates: any[] = [];
  imageBaseUrl: string = environment.imageStorage;
  queryParams: any = {
    sellerId: "",
    requestId: "",
    supplierId: "",
  };
  messages: any[] = [];
  images: any[] = [];
  replyMessage: string = "";

  emailList = [];
  selectedEmail: any;
  editingMode = false;
  loggedInUser:any;
  editorModules = {
    // https://github.com/KillerCodeMonkey/ngx-quill
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline"],
      ["link", "image"],
    ],
  };
  isEmailSelected = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _service: EmailServiceLight,
    private toggler: pagesToggleService,
    private buyerMailService: BuyerMailService
  ) {}
  ngOnInit() {
    this.loggedInUser= JSON.parse(localStorage.getItem('currentUserAuth')).data;
    console.log('loggedInUser',this.loggedInUser);
    this._service.getEmails().subscribe((list) => {
      this.emailList = list.emails;
    });
    this.toggler.toggleFooter(false);
    this.toggler.setHeaderClass("light");
    this.toggler.setPageContainer("full-height");
    this.toggler.setContent("full-height");

    this.getPurchaseRequests();
    this.route.queryParams.subscribe((params) => {
      this.queryParams = params;
      if (params.requestId && params.requestId.length) {
        this.getMessages();
      }
    });
  }

  findRequest(requestId) {
    let selectedMail;
    this.mailsWithDates.forEach((data) => {
      data.data.forEach((mail) => {
        if (mail._id === requestId)
          if (requestId === mail._id) {
            selectedMail = mail;
          }
      });
    });

    this.selectedEmail = selectedMail;
    console.log("SelectedMail", this.selectedEmail);
  }

  onSelect(item: any): void {
    this.selectedEmail = item;
    this.isEmailSelected = true;

    this.router.navigate([], {
      queryParams: { supplierId: item.receiverId, requestId: item._id },
    });
  }
  onBack() {
    this.isEmailSelected = false;
  }

  getPurchaseRequests() {
    let paging='all';
    this.buyerMailService.getBuyerMessages(paging).subscribe((res) => {
      console.log(res);
      this.mailsWithDates = res.data;
    });
  }

  getMessages() {
    // if(this.queryParams.requestId.length == 0) return;
    this.buyerMailService
      .readMessages(this.queryParams.requestId)
      .subscribe((res) => {});
    this.buyerMailService
      .getAllMessages(this.queryParams.requestId)
      .subscribe((res) => {
        this.findRequest(this.queryParams.requestId);

        this.messages = res.data.messages;
        this.images = res.data.images;
        console.log("Messages", this.messages);
      });
  }

  sendReply() {
    this.buyerMailService
      .sendMessage({
        requestId: this.queryParams.requestId,
        message: this.replyMessage,
        attachments: [],
      })
      .subscribe((res) => {
        this.getMessages();
        this.replyMessage = "";
      });
  }
}
