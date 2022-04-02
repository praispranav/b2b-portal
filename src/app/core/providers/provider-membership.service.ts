import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderMembershipService {

  constructor() { }

  apiUrl: string = environment.apiUrl;

  static editId: any;
  constructor(private http: HttpClient) { }
  fetchList() {
    return this.http.get(this.apiUrl + 'membership')
  }
  addMembership(obj: any) {
    return this.http.post(this.apiUrl + 'membership', { ...obj })
  }
  getMembershipList() {
    return this.http.get(this.apiUrl + 'membership')
  }
  deleteMembership(id: string) {
    return this.http.delete(this.apiUrl + 'membership/' + id)
  }

  editMembership(obj: any) {
    return this.http.put(this.apiUrl + 'membership/', { ...obj })
  }
}
