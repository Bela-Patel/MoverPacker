import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl: string = window.location.protocol + "//" + window.location.hostname + ":5000/api/bookings";

  constructor(private http: HttpClient) { }

  book(booking: any): Observable<any> {
    return this.http.post(this.apiUrl, booking);
  }
}
