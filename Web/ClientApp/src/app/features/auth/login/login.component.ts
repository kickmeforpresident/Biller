import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  
  constructor(public router: Router, public service: AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    let credentials = JSON.stringify(form.value);

    this.service.login(credentials).subscribe(response => {
      let token = (<any>response).token;
      this.setJWTInLocalStorage(token);
      this.switchInvalidLogin()
      this.service.setIsLoggedIn();
      this.redirectAfterSuccessfulLogin();
    }, err => {
      this.switchInvalidLogin()
    });
  }

  setJWTInLocalStorage(token) {
    localStorage.setItem("jwt", token);
  }

  redirectAfterSuccessfulLogin() {
    this.router.navigate(["/"]);
  }

  switchInvalidLogin() {
    this.invalidLogin = this.invalidLogin === true ?  false : true;
  }

}
