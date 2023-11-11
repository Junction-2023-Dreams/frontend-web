import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PatientMedicationService {

  meds: any = [
    {
      id: 1,
      name: 'Ibuprofen',
      amount: "200mg",
      sideeffects: [
        "nausea",
        "vomiting",
        "diarrhea",
        "constipation",
        "drowsiness",
      ]
    },
  ];

  constructor(
    private http: HttpClient,
  ) {
  }

  create(meds: any) {
    this.meds.push(meds);
  }
  readAll() {
    return this.meds;
  }
}
