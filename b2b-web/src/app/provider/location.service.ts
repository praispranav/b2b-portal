import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient) { }
  addLocation(obj: any) {
    return this.http.post(this.apiUrl + 'location', { ...obj })
  }
  getLocationList() {
    return this.http.get(this.apiUrl + 'location')
  }
  editLocation(id: string, obj: any) {
    return this.http.put(this.apiUrl + `location/${id}`, { ...obj })
  }
  deleteLocation(id:string){
    return this.http.delete(this.apiUrl + 'location/' + id)
  }
}
