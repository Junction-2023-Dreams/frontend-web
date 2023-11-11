import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AuthService} from "@app/_services/auth.service";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";

@Component({
  selector: 'app-nav-doctor',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, RouterLink, MatMenuModule, MatSidenavModule, RouterLinkActive],
  templateUrl: './nav-doctor.component.html',
  styleUrl: './nav-doctor.component.css'
})
export class NavDoctorComponent {

  openNavbar = false;

  constructor(
    public authService: AuthService
  ) {
  }

  logout() {
    this.authService.logout();
  }

  toggleNavbar() {
    this.openNavbar = !this.openNavbar;
  }
}
