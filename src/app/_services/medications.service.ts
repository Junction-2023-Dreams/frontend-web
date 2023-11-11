import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class MedicationsService {

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
    {
      id: 2,
      name: 'Aspirin',
      amount: "100mg",
      sideeffects: [
        "nausea",
        "vomiting",
        "diarrhea",
        "drowsiness",
      ]
    },
    {
      id: 3,
      name: 'Morphine',
      amount: "50mg",
      sideeffects: [
        "diarrhea",
        "constipation",
        "drowsiness",
      ]
    },
    {
      id: 4,
      name: 'Methadone',
      amount: "10mg",
      sideeffects: [
        "nausea",
        "vomiting",
      ]
    }
  ];

  constructor(
    private http: HttpClient,
  ) {
  }

  create(meds: any) {
    this.meds = meds;
  }
  readAll() {
    return this.meds;
  }
}
