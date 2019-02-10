import { InvoiceItem } from './invoiceItem';

export class Invoice {
  id: number;
  invoiceName: string;
  open: boolean;
  userId: number;
  user: any;
  invoiceEntries: InvoiceItem[];
  
}
