import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceItem } from 'src/app/models/invoiceItem';
import { MatTableDataSource } from '@angular/material';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormControl } from '@angular/forms';

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
  isLoggedIn: boolean;

  // New entry
  today = new FormControl(new Date());
  amount: number;
  subject: string;

  constructor(public invoiceService: InvoiceService, public authService: AuthService) { }

  ngOnInit() {
    this.invoiceService.getLatestInvoiceWithEntries().subscribe(invoice => {
      if (invoice) {
        this.latestInvoice = invoice;
        this.dataSource = this.latestInvoice.invoiceEntries;
      }
    });

    this.authService.getIsLoggedIn().subscribe(value => {
      this.isLoggedIn = value;
    });
  }

  closeInvoice(id: number) {
    this.invoiceService.closeInvoice(id).subscribe(invoice => {
      if (invoice) {
        this.latestInvoice = new Invoice();
      }
    });
  }

  addInvoiceEntry() {
    let invoiceEntry = {
      Amount: this.amount,
      CreationDate: this.today,
      InvoiceId: this.latestInvoice.id,
      Subject: this.subject
    }

    this.invoiceService.addInvoiceEntry(invoiceEntry).subscribe(response => {
      if (response) {
        console.log(response);
      } else {
        console.log("error");
        // TODO: Show error message;
      }
    })
  }

}
