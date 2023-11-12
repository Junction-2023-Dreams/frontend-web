import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";

@Component({
  selector: 'app-medications-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatExpansionModule],
  templateUrl: './medications-item.component.html',
  styleUrl: './medications-item.component.css'
})
export class MedicationsItemComponent implements OnInit {
  @Input() medication: any;
  panelOpenState = false;
  @Output() deleteMedicationEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateMedicationEvent: EventEmitter<any> = new EventEmitter<any>();

  getInformation() {

  }

  deleteMedication(medication: any) {
    this.deleteMedicationEvent.emit(medication);
  }

  editMedication(medication: any) {
    this.updateMedicationEvent.emit(medication);
  }

  ngOnInit(): void {
    console.log(this.medication)
  }
}
