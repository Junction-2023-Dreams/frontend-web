import {Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose, MatDialogContainer,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MedicationsService} from "@app/_services/medications.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-edit-medication',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatDialogClose, MatInputModule, MatDialogContainer, MatAutocompleteModule, FormsModule],
  templateUrl: './add-edit-medication.component.html',
  styleUrl: './add-edit-medication.component.css'
})
export class AddEditMedicationComponent implements OnInit {
  availableMedications: any;
  selectedMedication: any = {
    id: 0,
    name: '',
    amount: undefined,
  }
  medicationAmount = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private medicationService: MedicationsService,
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.medicationService.readAll().subscribe((data: any) => {
        this.availableMedications = data.value || [];
      });
    });
  }


  cancel() {
    if(this.data.onCancel) this.data.onCancel();
  }

  save() {
    if(this.data.onSave) this.data.onSave(this.selectedMedication);
  }

  select($event: any) {
    this.selectedMedication = $event.option.value;
  }
  displayMedicationFn(medication: any): string {
    return medication && medication.name ? medication.name : '';
  }

  changeAmount($event: KeyboardEvent) {
    this.selectedMedication.amount = this.medicationAmount;
  }
}
