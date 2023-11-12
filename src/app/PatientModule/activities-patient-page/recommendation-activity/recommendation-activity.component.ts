import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-recommendation-activity',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './recommendation-activity.component.html',
  styleUrl: './recommendation-activity.component.css'
})
export class RecommendationActivityComponent {
  @Input() activity: any = {};

  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelRegistrationEvent: EventEmitter<any> = new EventEmitter<any>();
  signupClick() {
    console.log("Signup", this.activity)
    this.buttonClick.emit(this.activity);
  }

  cancelRegistration() {
    this.cancelRegistrationEvent.emit(this.activity);
  }
}
