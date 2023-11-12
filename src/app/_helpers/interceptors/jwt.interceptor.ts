import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../../_services/auth.service";
import {Observable} from "rxjs";
import {environment} from "@environments/environment";

@Injectable({providedIn: 'root'})
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = this.authService.getToken();
    const isApiUrl = req.url.startsWith(environment.apiUrl);
    console.log(req.url)
    if (userToken && isApiUrl) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${userToken}`
        }
      });
    }

    return next.handle(req);
  }


}

