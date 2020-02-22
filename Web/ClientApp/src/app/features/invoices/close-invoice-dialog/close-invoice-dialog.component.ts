import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CloseInvoiceDialogData } from 'src/app/models/closeInvoiceDialogData';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';

@Component({
  selector: 'app-close-invoice-dialog',
  templateUrl: './close-invoice-dialog.component.html',
  styleUrls: ['./close-invoice-dialog.component.css']
})
export class CloseInvoiceDialogComponent implements OnInit {

  constructor(
    public invoiceService: InvoiceService,
    public dialogRef: MatDialogRef<CloseInvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CloseInvoiceDialogData
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeInvoice(id: number) {
    this.invoiceService.closeInvoice(id).subscribe(invoice => {
      if (invoice) {
        this.invoiceService.invoiceJustClosed = true;
        this.dialogRef.close();        
      }
    });
  }

}
