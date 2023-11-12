import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {PatientsService} from "@app/_services/patients.service";
import {PatientsListComponent} from "@app/DoctorModule/patients-list/patients-list.component";

@Component({
  selector: 'app-detection-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, PatientsListComponent],
  templateUrl: './detection-page.component.html',
  styleUrl: './detection-page.component.css'
})
export class DetectionPageComponent {
  allPatients: any = [];

  constructor(
    private patientService: PatientsService,
  ) {
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.allPatients = this.patientService.readAll();
      this.allPatients = this.allPatients.filter((item: any) => item.risk > 0.5).sort((a: any, b: any) => b.risk - a.risk)
    })
  }
}
