import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  url = "https://netflix-houshold.onrender.com/getCodes";

  getData(email: String): Observable<any> {
    let reqobj = {
      email: email
    }
    return this.http.post<any>(this.url, reqobj);
  }

}
