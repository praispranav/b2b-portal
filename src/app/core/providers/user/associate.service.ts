import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {
  constructor(private http: HttpClient) { }

  addAssociate(payload): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/associate-profile/add`, payload);
  }

  getAssociate(payload): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/associate-profile/get`,payload);
  }
 
  getAssociateById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/associate-profile/${id}`);
  }

  updateAssociate(payload): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/associate-profile/update`, payload);
  }

  deleteAssociate(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/associate-profile/delete/${id}`);
  }
}