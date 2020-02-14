import { Routes } from '@angular/router';
import { LatestInvoiceComponent } from './components/latest-invoice/latest-invoice.component';
import { LoginComponent } from './components/login/login.component';
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';
import { AuthGuard } from './guards/auth-guard.service';
import { SalaryCalculatorComponent } from './components/salary-calculator/salary-calculator.component';

export const ROUTES: Routes = [
    { path: '', component: LatestInvoiceComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'salary-calculator', component: SalaryCalculatorComponent },
    { path: 'create-invoice', component: CreateInvoiceComponent, canActivate: [AuthGuard] },
  ];
