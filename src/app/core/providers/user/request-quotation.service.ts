import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RequestQuotationService {
    constructor(private http: HttpClient) { }

    addRequestForQuotation(params: any = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/request-quotation/add`, params);
    }

    getRequestForQuotationById(id: string): Observable<any> {
        return this.http.get<any>(`${environment.apiUrl}/request-quotation/get/${id}`);
    }



    updateRequestForQuotation(params: any = {}): Observable<any> {
        return this.http.put<any>(`${environment.apiUrl}/request-quotation/update`, params);
    }

    deleteRequestForQuotation(id: string): Observable<any> {
        return this.http.delete<any>(`${environment.apiUrl}/request-quotation/delete/${id}`);
    }
}