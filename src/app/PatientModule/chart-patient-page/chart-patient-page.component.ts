import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-chart-patient-page',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule],
  templateUrl: './chart-patient-page.component.html',
  styleUrl: './chart-patient-page.component.css'
})
export class ChartPatientPageComponent {

}
