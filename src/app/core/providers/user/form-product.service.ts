import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormProductService {

  public stringSubject = new Subject<any>();
  public productConstant = "productsForPurchase"

  constructor(private http: HttpClient) {}

  storeProductInfo(data) {
    const products = localStorage.getItem(this.productConstant);
    if(products){
      const parsed = JSON.parse(products);
      parsed.push(data);
      localStorage.setItem(this.productConstant, JSON.stringify(parsed))
    } else {
      localStorage.setItem(this.productConstant, JSON.stringify([data]))
    }
    this.stringSubject.next(Math.floor(Math.random() * 1000000));
  }

  changeState(){
    this.stringSubject.next(Math.floor(Math.random() * 1000000));
  }

  removeProduct(productId){
    const products = localStorage.getItem(this.productConstant);
    if(products){
      const parsed = JSON.parse(products);
      const findProductIndex = parsed.findIndex((product)=> product._id === productId)
      parsed.splice(findProductIndex ,1);
      localStorage.setItem(this.productConstant, JSON.stringify(parsed))
    } 

    this.stringSubject.next(true);
  }
  

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
