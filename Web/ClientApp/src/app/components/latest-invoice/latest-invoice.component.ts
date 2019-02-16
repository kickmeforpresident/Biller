import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceItem } from 'src/app/models/invoiceItem';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormControl } from '@angular/forms';
import { CloseInvoiceDialogComponent } from '../close-invoice-dialog/close-invoice-dialog.component';

@Component({
  selector: 'app-latest-invoice',
  templateUrl: './latest-invoice.component.html',
  styleUrls: ['./latest-invoice.component.css']
})
export class LatestInvoiceComponent implements OnInit {

  dataSource: InvoiceItem[];
  latestInvoice: Invoice;
  invoiceEntries: InvoiceItem[];
  displayedColumns: string[] = ['creationDate', 'amount', 'subject'];
  isLoggedIn: boolean;

  // New entry
  today = new FormControl(new Date());
  amount: number;
  subject: string;

  sumOfInvoiceEntries: number;

  constructor(
    public invoiceService: InvoiceService,
    public authService: AuthService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.invoiceService.getLatestInvoiceWithEntries().subscribe(invoice => {
      if (invoice) {
        this.latestInvoice = invoice;
        this.dataSource = this.latestInvoice.invoiceEntries;

        this.calculateSumOfInvoiceEntries();
      }
    });

    this.authService.getIsLoggedIn().subscribe(value => {
      this.isLoggedIn = value;
    });    
  }

  openCloseDialog(id: number) {
    const dialogRef = this.dialog.open(CloseInvoiceDialogComponent, {
      width: '50rem',
      data: { invoiceId: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.invoiceService.invoiceJustClosed) {
        this.latestInvoice = new Invoice();
        this.invoiceService.invoiceJustClosed = false;
      }
    });
  }

  addInvoiceEntry() {
    console.log(this.today.value)
    let invoiceEntry = new InvoiceItem(this.subject, this.amount, this.today.value, this.latestInvoice.id);

    this.invoiceService.addInvoiceEntry(invoiceEntry).subscribe(response => {
      if (response) {

        // Clear the input fields
        this.amount = null;
        this.today = new FormControl(new Date());
        this.subject = "";

        this.ngOnInit();

      } else {
        console.log("error");
        // TODO: Show error message;
      }
    })
  }

  calculateSumOfInvoiceEntries() {
    let result = 0;

    if (this.latestInvoice.invoiceEntries) {
      this.latestInvoice.invoiceEntries.forEach(i => result += i.amount);

      this.sumOfInvoiceEntries = result;
    }

  }

}
