import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "@app/_services/auth.service";
import {environment} from "@environments/environment";

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
    private authService: AuthService,
  ) {
  }

  create(meds: any) {
    const userId = this.authService.userId;
    if(!userId) return;

    let data = {
      "patient_ID": userId,
      "name": meds.name,
      "amount": meds.amount ? meds.amount : meds.defaultAmount,
      "sideeffects": meds.sideeffects ? meds.sideeffects : "",
    } as any;
    if(meds.id) data['medication_ID'] = meds.id;
    return this.http.post(`${environment.apiUrl}/PatientMedications`, data);
  }
  delete(meds: any) {
    return this.http.delete(`${environment.apiUrl}/PatientMedications(${meds.ID})`, {});
  }

  readAll() {
    return this.http.get(`${environment.apiUrl}/PatientMedications`);
  }
}
