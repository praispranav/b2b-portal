import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderLocationService {
  apiUrl: string = environment.apiUrl
  static editId: any;

  constructor(private http: HttpClient) { }
  addLocation(obj: any) {
    return this.http.post(this.apiUrl + 'location', { ...obj })
  }
  getLocationList() {
    return this.http.get(this.apiUrl + 'location')
  }
  // editLocation(obj:any) {
  //   return this.http.put(this.apiUrl + `location/${id}`, { ...obj })
  // }
  deleteLocation(id: string) {
    return this.http.delete(this.apiUrl + 'location/' + id)
  }
  editLocation(obj: any) {
    return this.http.put(this.apiUrl + 'location/', { ...obj })
  }
}
