import { Injectable } from '@angular/core';
declare let req:any;
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';

@Injectable()
export class CustominterceptorInterceptor implements HttpInterceptor {
  req:any;
  constructor(private service:ServicesService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.headers.has('Content-Type')) {
    const req = request.clone({ headers: request.headers.set('Content-Type', 'multipart/form-data')});
    return next.handle(req);
  }
  if (!request.headers.has('Accept')) {
    const req = request.clone({ headers: request.headers.set('Accept', 'application/json')});
    return next.handle(req);
  }
  if (!request.headers.has('charset')) {
    const req = request.clone({ headers: request.headers.set('charset', 'utf-8')});
    return next.handle(req);
  }
  
return next.handle(request);
}
}
