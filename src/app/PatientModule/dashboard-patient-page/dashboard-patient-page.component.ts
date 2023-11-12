import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MedicationsItemComponent
} from "@app/PatientModule/medications-patient-page/medications-item/medications-item.component";
import {
  SelectableMedicationItemComponent
} from "@app/PatientModule/dashboard-patient-page/selectable-medication-item/selectable-medication-item.component";
import {MatCardModule} from "@angular/material/card";
import {ApproveCancelDialogComponent} from "@app/_components/approve-cancel-dialog/approve-cancel-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "@app/_services/auth.service";
import {ChartPatientPageComponent} from "@app/PatientModule/chart-patient-page/chart-patient-page.component";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-dashboard-patient-page',
  standalone: true,
  imports: [CommonModule, MedicationsItemComponent, SelectableMedicationItemComponent, MatCardModule, ChartPatientPageComponent, MatListModule],
  templateUrl: './dashboard-patient-page.component.html',
  styleUrl: './dashboard-patient-page.component.css'
})
export class DashboardPatientPageComponent {
  todaysMedications: any = [
    {
      name: 'Ibuprofen',
      description: '',
      amount: "200g",
      frequency: "once every 4 hours",
      sideeffects: "nausea, vomiting, diarrhea, dizziness, drowsiness, headache, ringing in the ears",
    }
  ];

  constructor(
    private dialog: MatDialog,
    public authService: AuthService,
  ) {

  }


  takeMedication(medication: any) {
    this.dialog.open(ApproveCancelDialogComponent, {
      data: {
        title: 'Take Medication',
        description: `Are you sure you want to take ${medication.name}?`,
        approveText: 'Take',
        cancelText: 'Cancel',
        approveColor: 'warn',
        onApprove: () => {
          this.todaysMedications = this.todaysMedications.filter((m: any) => m.name !== medication.name);
        },
        onCancel: () => {
        }
      }
    });
  }
}
