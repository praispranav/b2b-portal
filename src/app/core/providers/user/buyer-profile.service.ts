import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuyerProfileService {
  constructor(private http: HttpClient) { }

   addProfile(params: any = {}): Observable<any> {
    return   this.http.post<any>(`${environment.apiUrl}/buyer-profile/add`, params);
  }
  getBlog(): Observable<any> {
    
    return this.http.get<any>(`${environment.apiUrl}/buyer-profile/getAll`);
  }
 
  getBlogById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/buyer-profile/${id}`);
  }

  

  updateBlog(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/buyer-profile/update`, params);
  }

  deleteBlogById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/buyer-profile/delete/${id}`);
  }
}