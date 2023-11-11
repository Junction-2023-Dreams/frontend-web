import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SelectPainPositionComponent
} from "@app/PatientModule/your-health-patient-page/select-pain-position/select-pain-position.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {PainMapService} from "@app/_services/pain-map.service";

@Component({
  selector: 'app-your-health-patient-page',
  standalone: true,
  imports: [CommonModule, SelectPainPositionComponent, MatTabsModule, MatButtonModule],
  templateUrl: './your-health-patient-page.component.html',
  styleUrl: './your-health-patient-page.component.css'
})
export class YourHealthPatientPageComponent {
  painSpotsFront: any = [];
  painSpotsBack: any = [];
  constructor(
    private painMapService: PainMapService,
  ) {
    let painSpots = this.painMapService.readAll();
    this.painSpotsFront = painSpots.filter((spot: any) => spot.location === "front");
    this.painSpotsBack = painSpots.filter((spot: any) => spot.location === "back");
    console.log(this.painSpotsFront, this.painSpotsBack)
  }
  save() {
    this.painSpotsFront.forEach((spot: any) => spot.location = "front");
    this.painSpotsBack.forEach((spot: any) => spot.location = "back");
    this.painMapService.create(this.painSpotsFront.concat(this.painSpotsBack));
  }

  cancel() {
    this.painSpotsBack = [];
    this.painSpotsFront = [];
  }
}
