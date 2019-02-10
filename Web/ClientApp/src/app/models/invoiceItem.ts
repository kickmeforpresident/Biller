export class InvoiceItem {
  id: number;
  subject: string;
  amount: number;
  creationDate: Date;
  invoiceId: number;

  constructor(subject: string, amount: number, creationDate: Date, invoiceId: number) {
    this.subject = subject;
    this.amount = amount;
    this.creationDate = creationDate;
    this.invoiceId = invoiceId;
  }
}
