import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { ROUTES } from './invoices.routes';
import { RouterModule } from '@angular/router';
import { LatestInvoiceComponent } from './latest-invoice/latest-invoice.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { CloseInvoiceDialogComponent } from './close-invoice-dialog/close-invoice-dialog.component';

@NgModule({
  declarations: [
    LatestInvoiceComponent,
    CreateInvoiceComponent,
    CloseInvoiceDialogComponent
  ],
  entryComponents: [CloseInvoiceDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    MaterialModule
  ]
})
export class InvoicesModule { }
