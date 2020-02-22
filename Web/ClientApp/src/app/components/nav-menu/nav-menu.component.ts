import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(public router: Router, public service: AuthService) {
  }

  ngOnInit(): void {
    this.service.getIsLoggedIn().subscribe(value => {
      this.isLoggedIn = value;
    });
  }

  handleLogOut() {
    this.removeJWTFromLocalStorage();
    this.service.setIsLoggedIn();
    this.redirectToHome();
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }

  removeJWTFromLocalStorage() {
    localStorage.removeItem('jwt');
  }

}
