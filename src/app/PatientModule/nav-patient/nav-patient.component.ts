import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AuthService} from "@app/_services/auth.service";
import {MatSidenavModule} from "@angular/material/sidenav";

@Component({
  selector: 'app-nav-patient',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, RouterLink, MatSidenavModule, RouterLinkActive],
  templateUrl: './nav-patient.component.html',
  styleUrl: './nav-patient.component.css'
})
export class NavPatientComponent {

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

  openSettings() {

  }
}
