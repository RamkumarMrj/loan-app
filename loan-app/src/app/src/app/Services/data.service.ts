import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  initiateApplication(): Observable<any> {
    return this.http.post(`${this.apiUrl}/initiate`, {});
  }

  submitApplication(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, data);
  }

  getBalanceSheet(): Observable<any> {
    return this.http.get(`${this.apiUrl}/balance-sheet`);
  }

  getApplicationResult(): Observable<string> {
    const url = `${this.apiUrl}/application-result`;
    return this.http.get<string>(url);
  }
}