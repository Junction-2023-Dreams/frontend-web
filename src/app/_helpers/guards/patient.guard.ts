import {Injectable} from "@angular/core";
import {ActivatedRoute, CanActivate, Router} from "@angular/router";
import {AuthService} from "../../_services/auth.service";
import {noop} from "rxjs";

@Injectable({providedIn: 'root'})
export class PatientGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate() {
    this.authService.hasRole("patient") ? noop() : this.router.navigate(['/doctor']);
    return this.authService.hasRole("patient");
  }
}
