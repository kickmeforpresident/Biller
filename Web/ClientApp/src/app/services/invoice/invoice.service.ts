import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice } from 'src/app/models/invoice';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private getLatestURL = environment.apiURL + "/invoice/getlatest";

  constructor(private http: HttpClient) { }

  public getLatestInvoiceWithEntries(): Observable<Invoice> {

    return this.http.get<Invoice>(this.getLatestURL);

  }
}
