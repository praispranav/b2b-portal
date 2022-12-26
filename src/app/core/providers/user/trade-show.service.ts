 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TradeShowService {
  constructor(private http: HttpClient) { }

  addTradeShow(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/tradeShow/add`, params);
  }

 
  getBlogById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/tradeShow/get/${id}`);
  }



  updateBlog(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/tradeShow/update`, params);
  }

  deleteBlogById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/tradeShow/delete/${id}`);
  }
}