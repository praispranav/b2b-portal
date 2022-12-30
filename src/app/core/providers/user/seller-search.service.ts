import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerSearchService {

  constructor(private http: HttpClient) { }

  sellerSearch(params){
    return this.http.get(environment.apiUrl + '/seller-search', { params: { ...params } })
  }

  sellerSearchById(sellerId){
    return this.http.get(environment.apiUrl + '/seller-search/id', { params: { sellerId }})
  }

  sellerDetailsCompanyProfileBusinessType(sellerId){
    return this.http.get(environment.apiUrl + '/seller-search/company-profile-business-type', { params: { sellerId }})
  }

  sellerSingleAllDetails(sellerId){
    return this.http.get(environment.apiUrl + '/seller-search/all-details', { params: { sellerId }})
  }
}
