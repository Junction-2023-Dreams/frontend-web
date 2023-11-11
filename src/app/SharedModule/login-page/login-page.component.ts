import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {AuthService} from "../../_services/auth.service";
import {first} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  showRoleSelection: boolean = true;
  role: string = "Patient";
  showLogin: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  toggleLogin() {
    this.showRoleSelection = !this.showRoleSelection;
    this.showLogin = !this.showLogin;
  }

  selectPatient() {
    this.role = "Patient";
    this.toggleLogin();
  }
  selectDoctor() {
    this.role = "Doctor";
    this.toggleLogin();
  }

  login() {
    this.authService.login("test", "test", this.role.toLowerCase()).pipe(first()).subscribe(
      data => {
        console.log(this.role.toLowerCase())
        this.router.navigateByUrl(this.role.toLowerCase())
      });
  }

  back() {
    this.role = "Patient";
    this.toggleLogin();
  }
}
