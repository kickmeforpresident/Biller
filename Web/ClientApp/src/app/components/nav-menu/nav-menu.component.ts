import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(public router: Router) {

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  handleLogOut() {
    this.removeJWTFromLocalStorage();
    this.redirectToHome();
  }

  redirectToHome() {
    this.router.navigate(["/"]);
  }

  removeJWTFromLocalStorage() {
    localStorage.removeItem("jwt");
  }
}
