import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceItem } from 'src/app/models/invoiceItem';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  public invoiceJustClosed: boolean = false;

  private getLatestURL = environment.apiURL + "/invoice/getlatest";
  private createInvoiceURL = environment.apiURL + "/invoice/create";
  private closeInvoiceURL = environment.apiURL + "/invoice/close";
  private addInvoiceEntryURL = environment.apiURL + "/invoice/addinvoiceentry";
  private headers = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  public getLatestInvoiceWithEntries(): Observable<Invoice> {
    return this.http.get<Invoice>(this.getLatestURL);
  }

  public createInvoice(invoice: Invoice) {
    return this.http.post<Invoice>(this.createInvoiceURL, invoice, this.headers);
  }

  public closeInvoice(id: number) {
    return this.http.patch<Invoice>(this.closeInvoiceURL, { Id: id}, this.headers);
  }

  public addInvoiceEntry(invoiceEntry: InvoiceItem) {
    return this.http.post<InvoiceItem>(this.addInvoiceEntryURL, invoiceEntry, this.headers);
  }
}
