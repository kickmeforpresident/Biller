import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginURL = environment.apiURL + "/auth/login";
  private headers = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  public login(credentials: string): Observable<any> {

    return this.http.post(this.loginURL, credentials, this.headers)

  }
}
