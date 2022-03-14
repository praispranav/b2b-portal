import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient) { }

  getCategoryList() {
    return this.http.get(this.apiUrl + 'category')
  }

  addCategory(obj: any) {
    return this.http.post(this.apiUrl + 'category', { ...obj })
  }

  editCategory(id: string, obj: any) {
    return this.http.put(this.apiUrl + `category/${id}`, { ...obj })
  }
}
