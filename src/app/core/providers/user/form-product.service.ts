import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormProductService {

  constructor(private http: HttpClient) {}
  

  updateProductStatus({_id, status}){
    return this.http.post<any>(`${environment.apiUrl}/product/updateStatus`, { _id, status })
  }

  
  addProductDetails(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/product/add`, params);
  }
  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/product/get/${id}`);
  }

  getProductCounts(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/product/get-counts`);
  }

  getProductBySeller({ page, pageSize }){
    return this.http.get<any>(
      `${environment.apiUrl}/product/get-seller-all`, {params:{ page, pageSize }}
    );
  }

  getAllProduct({ page, pageSize }){
    return this.http.get<any>(
      `${environment.apiUrl}/product/get-all`, {params:{ page, pageSize }}
    );
  }
  
  getProductFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/product/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateProductControl(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/product/update`, params);
  }

  deleteProductById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/product/delete/${id}`);
  }

  searchProduct(params){
    return this.http.post(environment.apiUrl + '/product-search', { }, { params: params })
  }

  searchProductBySeller({ search, page, pageSize, sellerId, categoryId }){
    return this.http.get(environment.apiUrl + '/product/seller', { params: { search, page, pageSize, sellerId, categoryId }})
  }
  
}
