import { Routes } from '@angular/router';
import { LatestInvoiceComponent } from './latest-invoice/latest-invoice.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { AuthGuard } from 'src/app/guards/auth-guard.service';

export const ROUTES: Routes = [
    { path: 'latest', component: LatestInvoiceComponent, pathMatch: 'full' },
    { path: 'create', component: CreateInvoiceComponent, canActivate: [AuthGuard] },
  ];
