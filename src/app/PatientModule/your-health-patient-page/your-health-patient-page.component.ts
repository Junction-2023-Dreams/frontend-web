import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SelectPainPositionComponent
} from "@app/PatientModule/your-health-patient-page/select-pain-position/select-pain-position.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {PainMapService} from "@app/_services/pain-map.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-your-health-patient-page',
  standalone: true,
  imports: [CommonModule, SelectPainPositionComponent, MatTabsModule, MatButtonModule],
  templateUrl: './your-health-patient-page.component.html',
  styleUrl: './your-health-patient-page.component.css'
})
export class YourHealthPatientPageComponent implements OnInit {
  painSpotsFront: any = [];
  painSpotsBack: any = [];
  constructor(
    private snackBar: MatSnackBar,
    private painMapService: PainMapService,
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.updatePainMap(10);
    }, 100)
  }

  updatePainMap(tries: number) {
    if(tries === 0) return;
    this.painMapService.readAll()?.subscribe((data: any) => {
      let painSpots = data.value || [];
      this.painSpotsFront = painSpots.filter((spot: any) => spot.isFront);
      this.painSpotsBack = painSpots.filter((spot: any) => !spot.isFront);
      if(this.painSpotsBack.length === 0 && this.painSpotsFront.length === 0) {
        this.updatePainMap(tries - 1);
      }
    });
  }
  save() {
    this.snackBar.open("Pain map saved.", "Close", {
      duration: 2000,
    });
    let newFront = this.painSpotsFront.filter((spot: any) => spot.isFront === undefined);
    let newBack = this.painSpotsBack.filter((spot: any) => spot.isFront === undefined)
    newFront.forEach((spot: any) => spot.isFront = true);
    newBack.forEach((spot: any) => spot.isFront = false);
    let numberOfSaved = 0;
    let allSpots = [...newFront, ...newBack];

    allSpots.forEach((spot: any) => {
      this.painMapService.create(spot)?.subscribe((data: any) => {
        numberOfSaved++;
        if(numberOfSaved === newFront.length + newBack.length) {
          console.log(data);
        }
      });
    });
  }

  cancel() {
    this.painSpotsBack = [];
    this.painSpotsFront = [];
  }
}
