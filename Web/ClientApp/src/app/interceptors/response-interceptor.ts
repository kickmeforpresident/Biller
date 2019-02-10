import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(public router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // Any response
      }
      return event;
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.redirectToLoginPage();
        }
      }
      return event;
      }));

  }

  redirectToLoginPage() {
    this.router.navigate(["/login"]);
  }
}
