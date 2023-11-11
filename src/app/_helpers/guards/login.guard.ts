import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../../_services/auth.service";

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate() {
    if(!this.authService.isLoggedIn()) return true;

    if(this.authService.hasRole("doctor")) {
      this.router.navigate(['/doctor']);
    }
    if(this.authService.hasRole("patient")) {
      this.router.navigate(['/patient']);
    }
    return false;
  }
}
