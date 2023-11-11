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
    this.medications = this.medService.readAll();
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
            this.medService.create(item);
            this.updateMedications();
          }
        }
      });
  }
}
