import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProviderShippingDetailsService {
    constructor(private http: HttpClient) { }

    addShippingDetails(params: any = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/shipping-detail/add`, params);
    }
}
