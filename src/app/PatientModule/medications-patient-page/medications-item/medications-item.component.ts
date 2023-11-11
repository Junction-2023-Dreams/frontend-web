import {Component, Input} from '@angular/core';
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
export class MedicationsItemComponent {
  @Input() medication: any;
  panelOpenState = false;
  getInformation() {

  }
}
