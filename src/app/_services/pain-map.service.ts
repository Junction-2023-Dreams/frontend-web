import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {AuthService} from "@app/_services/auth.service";

@Injectable({providedIn: 'root'})
export class PainMapService {

  painSpots: any = [];

  constructor(
    private authService: AuthService,
    private http: HttpClient,
  ) {
  }

  create(painSpot: any) {
    const userId = this.authService.userId;
    if(!userId) return;
    let data = {
      "patient_ID": userId,
      "isFront": painSpot.isFront,
      "posX": painSpot.posX,
      "posY": painSpot.posY,
    }
    console.log(data)
    return this.http.post(`${environment.apiUrl}/PainPoints`, data);
  }
  readAll() {
    const userId = this.authService.userId;
    if(!userId) return;
    return this.http.get(`${environment.apiUrl}/PainPoints?$filter=patient_ID eq ${userId}`);
  }
}
