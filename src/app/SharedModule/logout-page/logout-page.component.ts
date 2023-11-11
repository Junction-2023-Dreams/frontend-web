import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "@app/_services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout-page.component.html',
  styleUrl: './logout-page.component.css'
})
export class LogoutPageComponent {

  constructor(
    private authService: AuthService,
  ) {
    this.authService.logout();

  }

}
