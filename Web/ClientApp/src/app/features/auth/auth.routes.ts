import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/features/auth/login/login.component';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
  ];
