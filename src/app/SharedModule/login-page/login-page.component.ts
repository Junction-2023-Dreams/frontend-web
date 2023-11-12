import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {AuthService} from "../../_services/auth.service";
import {catchError, first} from "rxjs";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule, MatCardModule, FormsModule, MatProgressBarModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  showRoleSelection: boolean = true;
  role: string = "Patient";
  showLogin: boolean = false;
  emailValue: string = "";
  passwordValue: string = "";
  loading: boolean = false;

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
    this.loading = true;
    this.authService.login(this.emailValue, this.passwordValue, this.role.toLowerCase()).pipe(first()).subscribe(
      data => {
        this.loading = false;
      },
      error => {
        this.loading = false;
      });
  }

  back() {
    this.role = "Patient";
    this.toggleLogin();
  }
}
