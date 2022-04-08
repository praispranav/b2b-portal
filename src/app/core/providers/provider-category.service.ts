import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderCategoryService {
  static selectedCategoryObj: any;
  static editId: any;

  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getCategoryList() {
    return this.http.get(this.apiUrl + 'category');
  }

  addCategory(obj: any) {
    return this.http.post(this.apiUrl + 'category', { ...obj });
  }

  editCategory(id: string, obj: any) {
    return this.http.put(this.apiUrl + `category/${id}`, { ...obj });
  }

  deleteCategory(id: string) {
    return this.http.delete(this.apiUrl + `category/${id}`);
  }
}
