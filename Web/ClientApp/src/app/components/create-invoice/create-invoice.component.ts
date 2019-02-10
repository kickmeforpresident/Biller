import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/models/invoice';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  constructor(public router: Router, public service: InvoiceService) { }

  ngOnInit() {
  }

  createInvoice(form: NgForm) {
    this.service.createInvoice(form.value).subscribe(response => {
      console.log(response);
      if (response) {
        this.redirectAfterSuccessfulCreate();
      } else {
        console.log("error")
        // TODO: Show error message;
      }
    });
  }

  redirectAfterSuccessfulCreate() {
    this.router.navigate(["/"]);
  }

}
