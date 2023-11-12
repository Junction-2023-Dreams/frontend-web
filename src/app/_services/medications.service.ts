import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";

@Injectable({providedIn: 'root'})
export class MedicationsService {

  constructor(
    private http: HttpClient,
  ) {
  }

  create(meds: any) {

  }
  readAll() {
    return this.http.get(`${environment.apiUrl}/Medications`);
  }
}
