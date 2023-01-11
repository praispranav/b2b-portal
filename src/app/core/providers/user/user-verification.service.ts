import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserVerificationService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user-verification`);
  }

  approveRejectUser(status, userId){
    return this.http.post(`${environment.apiUrl}/user-verification/statusUpdate`, { userId, status })
  }
}
