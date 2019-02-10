import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createInvoice(form: NgForm) {
    //let credentials = JSON.stringify(form.value);

    //this.service.login(credentials).subscribe(response => {
    //  let token = (<any>response).token;
    //  this.setJWTInLocalStorage(token);
    //  this.switchInvalidLogin()
    //  this.service.setIsLoggedIn();
    //  this.redirectAfterSuccessfulLogin();
    //}, err => {
    //  this.switchInvalidLogin()
    //});
  }

}
