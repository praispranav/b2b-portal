import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QualityControlService {
  constructor(private http: HttpClient) { }

  addQualityControl(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/quality-control/add`, params);
  }
}
