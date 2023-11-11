import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../../_services/auth.service";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "@environments/environment";
import {ErrorService} from "../../_services/error.service";

@Injectable({providedIn: 'root'})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private errorService: ErrorService,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(error => {
      if([401, 403].includes(error.status) && this.authService.getToken()) {
        this.authService.logout();
      }

      this.errorService.handleError(error);
      return throwError(() => error);
    }));
  }

}
