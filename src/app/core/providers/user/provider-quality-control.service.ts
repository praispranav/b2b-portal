import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class QualityControlService {
    constructor(private http: HttpClient) { }

    addQualityControl(params: any = {}): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/quality-control/add`, params);
    }
}
