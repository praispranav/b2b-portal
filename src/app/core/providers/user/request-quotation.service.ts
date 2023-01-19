import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

export interface ReqQuoFormData {
  productName: string;
  quantity: string;
  unit: string;
}

@Injectable({
  providedIn: "root",
})
export class RequestQuotationService {
  static reqForQuotationData: ReqQuoFormData = {
    productName: "",
    quantity: "",
    unit: "",
  };

  constants: any = {
    reqForQuotation: "reqForQuotation",
  };

  constructor(private http: HttpClient) {}

  addRequestForQuotation(params: any = {}): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/request-quotation/add`,
      params
    );
  }

  updateStatus(params: any = {}): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/request-quotation/updateStatus`,
      params
    );
  }

  updateBulkStatus(params: any = {}): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/request-quotation/updateStatus/all`,
      params
    );
  }

  getRequestForQuotationById(id: string): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/request-quotation/get/${id}`
    );
  }

  getAllRequestForQuotation({page, pageSize, status, category}): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/request-quotation`, { params: { page, pageSize, status, category }}
    );
  }

  getRequestForQuotationByUser(): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/request-quotation/get/user`
    );
  }

  getRequestForQuotationAll(index: number, length:number, query:any={}): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/request-quotation//get-list/${index}/${length}/${query}`
    );
  }
  
  updateRequestForQuotation(params: any = {}): Observable<any> {
    return this.http.put<any>(
      `${environment.apiUrl}/request-quotation/update`,
      params
    );
  }

  deleteRequestForQuotation(id: string): Observable<any> {
    return this.http.delete<any>(
      `${environment.apiUrl}/request-quotation/delete/${id}`
    );
  }

  setRequestForQuotationLocal(data: ReqQuoFormData) {
    localStorage.setItem(this.constants.reqForQuotation, JSON.stringify(data));
  }

  getRequestForQuotationLocal() {
    const result = localStorage.getItem(this.constants.reqForQuotation);
    if (result) return JSON.parse(result);
    return { productName: "", quantity: "", unit: "" };
  }
}
