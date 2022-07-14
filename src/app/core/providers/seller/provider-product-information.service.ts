import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProviderProductInformationService {
    constructor(private http: HttpClient) { }

    addProductInformation(params: any = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/product-information/add`, params);
    }
}