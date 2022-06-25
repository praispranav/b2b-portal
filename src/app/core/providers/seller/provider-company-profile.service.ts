import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProviderCompanyProfileService {
    constructor(private http: HttpClient) { }

    addCompanyProfile(params: any = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/company-detail/add`, params);
    }
}