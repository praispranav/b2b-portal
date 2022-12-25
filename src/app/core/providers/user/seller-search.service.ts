import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerSearchService {

  constructor(private http: HttpClient) { }

  sellerSearch(search){
    return this.http.get(environment.apiUrl + '/seller-search', { params: { search }})
  }
}
