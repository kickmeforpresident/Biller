import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  constructor(public service: InvoiceService) { }

  ngOnInit() {
  }

  createInvoice(form: NgForm) {
    console.log(form.value)

    this.service.createInvoice(form.value).subscribe(response => {
      console.log(response);
      // Redirect if success, show error message if failed
    });
  }

}
