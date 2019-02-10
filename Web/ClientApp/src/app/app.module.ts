import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth-guard.service';
import { LatestInvoiceComponent } from './components/latest-invoice/latest-invoice.component';
import { InvoiceHistoryComponent } from './components/invoice-history/invoice-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { ResponseInterceptor } from './interceptors/response-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    LatestInvoiceComponent,
    InvoiceHistoryComponent,
    CreateInvoiceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LatestInvoiceComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'invoice-history', component: InvoiceHistoryComponent, canActivate: [AuthGuard] },
      { path: 'create-invoice', component: CreateInvoiceComponent, canActivate: [AuthGuard] },
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('jwt');
        },
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
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
