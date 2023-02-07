import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiUrl: any = "http://localhost/buku-tamu/index.php/api/";
  status() {
    return this.http.get(this.apiUrl + "status");
  }
}
