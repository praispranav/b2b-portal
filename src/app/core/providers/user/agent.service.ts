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


  requestSend(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/seller-admin-agent/request-send`,
      payload
    );
  }

  getRequest(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/seller-admin-agent/get-request`,
      payload
    );
  }

  requestUpdate(payload): Observable<any> {
    return this.http.put<any>(
      `${environment.apiUrl}/seller-admin-agent/request/update`,
      payload
    );
  }

  assignAgent(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/admin-agent/assign-agent`,
      payload
    );
  }

  getAssignAgent(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/admin-agent/get-assign-agent`,
      payload
    );
  }

  agentVerify(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/admin-agent/verify`, payload
    )
  }

  getSellerTypeDetail(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/seller-type/get-detail`, payload
    )
  }

  getCompanyProfile(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/company-profile/get-detail`, payload
    )
  }

  getCompanyDetail(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/company-detail/get-detail`, payload
    )
  }

  getExportCapibilityDetail(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/export-capability/get-detail`, payload
    )
  }

  getCertificateDetail(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/certificate-center/get-detail`, payload
    )
  }

  getQualityControlDetail(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/quality-control/get-detail`, payload
    )
  }

  getResearchDevelopmentDetail(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/research-and-development/get-detail`, payload
    )
  }

  sellerTypeVerify(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/seller-type/verify`, payload
    )
  }

  companyProfileVerify(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/company-profile/verify`, payload
    )
  }

  CompanyDetailVerify(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/company-detail/verify`, payload
    )
  }

  ExportCapibilityVerify(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/export-capability/verify`, payload
    )
  }

  CertificateVerify(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/certificate-center/verify`, payload
    )
  }

  QualityControlVerify(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/quality-control/verify`, payload
    )
  }

  ResearchDevelopmentVerify(payload): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/research-and-development/verify`, payload
    )
  }

}
