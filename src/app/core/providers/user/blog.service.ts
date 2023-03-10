import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }

  addBlog(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/blog/add`, params);
  }
  getBlog(): Observable<any> {
    
    return this.http.get<any>(`${environment.apiUrl}/blog/getAll`);
  }
 
  getBlogById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/blog/${id}`);
  }

  

  updateBlog(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/blog/update`, params);
  }

  deleteBlogById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/blog/delete/${id}`);
  }
}