import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-list-item-activity',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule],
  templateUrl: './list-item-activity.component.html',
  styleUrl: './list-item-activity.component.css'
})
export class ListItemActivityComponent {
  @Input() activity: any = {};
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  signupClick() {
    console.log("Signup", this.activity)
    this.buttonClick.emit(this.activity);
  }
}
