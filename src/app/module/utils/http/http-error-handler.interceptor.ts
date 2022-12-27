import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services';

const API_URL = 'http://localhost:8080/api/';

@Injectable({ providedIn: 'root' })
export class HttpErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.authenticationService.getToken();
    const requestUrl: string[] = request.url.split('/');
    const apiURL: string[] = API_URL.split('/');
    
    if (token && requestUrl[2] === apiURL[2]) {
      const newRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(newRequest);
    }

    if (requestUrl[1] === apiURL[3]) {
      const newRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(newRequest);
    }

    return next.handle(request);
  }
}
