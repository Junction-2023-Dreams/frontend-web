import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {
  MedicationsItemComponent
} from "@app/PatientModule/medications-patient-page/medications-item/medications-item.component";
import {MatCardModule} from "@angular/material/card";
import {MatDialog} from "@angular/material/dialog";
import {ApproveCancelDialogComponent} from "@app/_components/approve-cancel-dialog/approve-cancel-dialog.component";

@Component({
  selector: 'app-selectable-medication-item',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MedicationsItemComponent, MatCardModule],
  templateUrl: './selectable-medication-item.component.html',
  styleUrl: './selectable-medication-item.component.css'
})
export class SelectableMedicationItemComponent {
  @Input() medication: any;


}
