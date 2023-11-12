import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {ActivityService} from "@app/_services/activities.service";
import {PatientsService} from "@app/_services/patients.service";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatSort, MatSortModule, Sort} from "@angular/material/sort";
import {PatientsListComponent} from "@app/DoctorModule/patients-list/patients-list.component";

@Component({
  selector: 'app-patients-page',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule, FormsModule, MatTableModule, MatSortModule, PatientsListComponent],
  templateUrl: './patients-page.component.html',
  styleUrl: './patients-page.component.css'
})
export class PatientsPageComponent implements OnInit {
  allPatients: any = [];

  constructor(
    private patientService: PatientsService,
  ) {
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.allPatients = this.patientService.readAll();
    })
  }
}
