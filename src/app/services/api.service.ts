import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'YOUR_API_URL';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.apiUrl);
  }

  postData(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, data, { headers: headers });
  }
}
