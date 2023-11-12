import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {
  MedicationsItemComponent
} from "@app/PatientModule/medications-patient-page/medications-item/medications-item.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDialog} from "@angular/material/dialog";
import {
  AddEditMedicationComponent
} from "@app/PatientModule/medications-patient-page/add-edit-medication/add-edit-medication.component";
import {PatientMedicationService} from "@app/_services/patient-medications.service";
import {ApproveCancelDialogComponent} from "@app/_components/approve-cancel-dialog/approve-cancel-dialog.component";

@Component({
  selector: 'app-medications-patient-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MedicationsItemComponent, MatExpansionModule],
  templateUrl: './medications-patient-page.component.html',
  styleUrl: './medications-patient-page.component.css'
})
export class MedicationsPatientPageComponent implements OnInit {
  medications: any = [
  ];

  constructor(
    private dialog: MatDialog,
    private medService: PatientMedicationService
  ) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.updateMedications();
    })
  }

  updateMedications() {
    this.medService.readAll().subscribe((data: any) => {
      this.medications = data.value || [];
    })
  }

  deleteMedication(medication: any) {
    this.dialog.open(ApproveCancelDialogComponent,
      {
        data: {
          title: `Delete medication ${medication.name}?`,
          description: `Are you sure you want to delete medication ${medication.name}?`,
          cancelColor: '',
          approveColor: 'warn',
          cancelText: 'Cancel',
          approveText: 'Delete',
          onApprove: (item: any) => {
            console.log(medication)
            this.medService.delete(medication).subscribe((data: any) => {

              this.updateMedications();
            })
          },
          onCancel: (item: any) => {
          }
        }
      });
  }

  addMedication() {
    this.dialog.open(AddEditMedicationComponent,
      {
        data: {
          title: 'Add Medication',
          cancelColor: '',
          saveColor: 'primary',
          cancelText: 'Cancel',
          saveText: 'Add',
          onSave: (item: any) => {
            if(item.id === 0) return
            this.medService.create(item)?.subscribe((data: any) => {
              this.updateMedications();
            })
          }
        }
      });
  }
}
