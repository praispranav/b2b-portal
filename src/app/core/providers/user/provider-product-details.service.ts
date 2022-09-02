import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProviderProductDetailsService {
    constructor(private http: HttpClient) { }

    addProductDetails(params: any = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/product-detail/add`, params);
    }
}