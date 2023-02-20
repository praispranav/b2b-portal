import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "./../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CatelogRequestService {
  constructor(private http: HttpClient) {}

  requestSend(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/seller-admin/request-send`,
      payload
    );
  }

  getRequest(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/seller-admin/get-request`,
      payload
    );
  }

  requestUpdate(payload): Observable<any> {
    return this.http.put<any>(
      `${environment.apiUrl}/seller-admin/request/update`,
      payload
    );
  }

  assignAssociate(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/admin-associate/assign-associate`,
      payload
    );
  }

  getassignAssociate(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/admin-associate/get-assign-associate`,
      payload
    );
  }

  sendMail(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/admin-associate/send-mail`,
      payload
    );
  }

  sellerVerify(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/admin-associate/verify`,
      payload
    );
  }
}
