import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuyerMailService {

  constructor(private http: HttpClient) { }

  createNewRequest(payload){
    return this.http.post<any>(`${environment.apiUrl}/buyer-mails/create-new-purchase-request`, payload)
  }

  sendMessage(payload){
    return this.http.post<any>(`${environment.apiUrl}/buyer-mails/send-message-for-requestid`, payload)
  }

  getBuyerMessages(){
    
  }

  getSellerMessage(){

  }
}
