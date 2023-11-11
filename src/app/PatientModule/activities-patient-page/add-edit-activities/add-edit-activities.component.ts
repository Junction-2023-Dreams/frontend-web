import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";

@Component({
  selector: 'app-add-edit-activities',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatDialogClose],
  templateUrl: './add-edit-activities.component.html',
  styleUrl: './add-edit-activities.component.css'
})
export class AddEditActivitiesComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  cancel() {

  }

  save() {

  }
}
