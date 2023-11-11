import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-approve-cancel-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatDialogContent, MatButtonModule, MatDialogActions, MatDialogClose],
  templateUrl: './approve-cancel-dialog.component.html',
  styleUrl: './approve-cancel-dialog.component.css'
})
export class ApproveCancelDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  approve() {
    if(this.data.onApprove) this.data.onApprove();
  }
  cancel() {
    if(this.data.onCancel) this.data.onCancel();
  }
}
