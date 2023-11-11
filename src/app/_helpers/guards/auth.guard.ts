import {Injectable} from "@angular/core";
import {ActivatedRoute, CanActivate, Router} from "@angular/router";
import {AuthService} from "../../_services/auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  canActivate() {
    if(this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
