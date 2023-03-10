import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class BuyerMailService {
  constructor(private http: HttpClient) {}

  createNewRequest(payload) {
    return this.http.post<any>(
      `${environment.apiUrl}/buyer-mails/create-new-purchase-request`,
      payload
    );
  }

  sendMessage(payload) {
    return this.http.post<any>(
      `${environment.apiUrl}/buyer-mails/send-message-for-requestid`,
      payload
    );
  }

  getBuyerMessages(paging) {
    return this.http.get<any>(
      `${environment.apiUrl}/buyer-mails/get-requestid-messages-buyer`,{params:{paging}}
    );
  }

  getSellerMessage(paging) {
    return this.http.get<any>(
      `${environment.apiUrl}/buyer-mails/get-requestid-messages-seller`,{params:{paging}}
    );
  }

  readMessages(requestId){
    return this.http.get<any>(
      `${environment.apiUrl}/buyer-mails/read-message`, { params: { requestId } }
    );
  }

  getAllMessages(requestId){
    return this.http.get<any>(
      `${environment.apiUrl}/buyer-mails/get-requestid-messages`, { params: { requestId } }
    );
  }

  getSentMessages(requestId){
    return this.http.get<any>(
      `${environment.apiUrl}/buyer-mails/get-sent-messages`, { params: { requestId } }
    );
  }
}
