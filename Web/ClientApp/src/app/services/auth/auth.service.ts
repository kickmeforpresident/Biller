import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, observable, of, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: BehaviorSubject<boolean>;
  private helper = new JwtHelperService();
  private loginURL = environment.apiURL + "/auth/login";
  private headers = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) {
    this.isLoggedIn = new BehaviorSubject<boolean>(false);
  }

  public setIsLoggedIn() {
    var token = localStorage.getItem("jwt");

    if (token && !this.helper.isTokenExpired(token)) {
      this.isLoggedIn.next(true);
    } else {
      this.isLoggedIn.next(false);
    }

  }

  public getIsLoggedIn() {
    return this.isLoggedIn.asObservable();
  }

  public login(credentials: string): Observable<any> {
    return this.http.post(this.loginURL, credentials, this.headers)
  }

  public getToken() {
    return localStorage.getItem("jwt");
  }

}
