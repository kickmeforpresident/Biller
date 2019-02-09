import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';

@Component({
  selector: 'app-latest-invoice',
  templateUrl: './latest-invoice.component.html',
  styleUrls: ['./latest-invoice.component.css']
})
export class LatestInvoiceComponent implements OnInit {

  latestInvoice: any;

  constructor(public service: InvoiceService) { }

  ngOnInit() {
    this.service.getLatestInvoiceWithEntries().subscribe(invoice => this.latestInvoice = invoice);
  }

}
