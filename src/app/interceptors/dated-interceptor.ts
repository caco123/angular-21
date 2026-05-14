import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { EnvironmentProviders, Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class DatedInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {
      'user-name': 'Juan',
      'user-role': 'admin',
      'user-email': 'dummy@email.com',
      'user-phone': '123456789',
      'user-address': '123 Main St',
      'user-city': 'New York',
      'user-state': 'NY',
      'user-zip': '12345',
      'user-country': 'USA'
    };
    const datedReq = req.clone({ setHeaders: headers });
    return next.handle(datedReq);
  }
}

export const datedInterceptorProviders: Array<Provider | EnvironmentProviders> = [
  provideHttpClient(withInterceptorsFromDi()),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: DatedInterceptor,
    multi: true
  }
];