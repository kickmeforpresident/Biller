import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'invoices/latest', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
    { path: 'invoices', loadChildren: () => import('./features/invoices/invoices.module').then(m => m.InvoicesModule) },
    { path: 'contractor', loadChildren: () => import('./features/contractor/contractor.module').then(m => m.ContractorModule) },
  ];
