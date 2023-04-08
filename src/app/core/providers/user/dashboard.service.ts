import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "./../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  adminCount(): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/dashboard/admin-count`
    );
  }

  sellerCount(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/dashboard/seller-count`, payload
    );
  }

  buyerCount(): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/dashboard/buyer-count`
    );
  }
}
