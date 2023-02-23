import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "./../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AgentService {
  constructor(private http: HttpClient) { }

  addAgent(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/agent-profile/add`,
      payload
    );
  }

  getAgent(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/agent-profile/get`,
      payload
    );
  }

  getAgentById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/agent-profile/${id}`);
  }

  updateAgent(payload): Observable<any> {
    return this.http.put<any>(
      `${environment.apiUrl}/agent-profile/update`,
      payload
    );
  }

  deleteAgent(id: string): Observable<any> {
    return this.http.delete<any>(
      `${environment.apiUrl}/agent-profile/delete/${id}`
    );
  }

  agentApproved(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/agent-profile/approved`,
      payload
    );
  }
}
