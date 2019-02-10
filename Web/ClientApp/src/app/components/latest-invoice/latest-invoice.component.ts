import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceItem } from 'src/app/models/invoiceItem';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-latest-invoice',
  templateUrl: './latest-invoice.component.html',
  styleUrls: ['./latest-invoice.component.css']
})
export class LatestInvoiceComponent implements OnInit {

  dataSource: InvoiceItem[];
  latestInvoice: Invoice;
  invoiceEntries: InvoiceItem[];
  displayedColumns: string[] = ['id', 'creationDate', 'amount', 'subject'];

  constructor(public service: InvoiceService) { }

  ngOnInit() {
    this.service.getLatestInvoiceWithEntries().subscribe(invoice => {
      this.latestInvoice = invoice;
      this.dataSource = this.latestInvoice.invoiceEntries;
    });
  }

}
