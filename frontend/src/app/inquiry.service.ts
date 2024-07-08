import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Inquiry {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  details: string;
  quotation: number;
}

@Injectable({
  providedIn: 'root',
})
export class InquiryService {
  private apiUrl = 'http://localhost:5000/api/inquiries';

  constructor(private http: HttpClient) {}

  submitInquiry(inquiry: any): Observable<any> {
    return this.http.post(this.apiUrl, inquiry);
  }

  getQuotation(inquiry: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/quotation`, inquiry);
  }
}
