import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth-guard.service';
import { LatestInvoiceComponent } from './components/latest-invoice/latest-invoice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { ResponseInterceptor } from './interceptors/response-interceptor';
import { CloseInvoiceDialogComponent } from './components/close-invoice-dialog/close-invoice-dialog.component';
import { LoadingInterceptor } from './interceptors/LoadingInterceptor';
import { ROUTES } from './app.routes';
import { SalaryCalculatorComponent } from './components/salary-calculator/salary-calculator.component';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    LatestInvoiceComponent,
    CreateInvoiceComponent,
    CloseInvoiceDialogComponent,
    SalaryCalculatorComponent
  ],
  entryComponents: [CloseInvoiceDialogComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, {
      // useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // TODO: Refactor this
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    }),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ResponseInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true,
  },
    AuthGuard,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
