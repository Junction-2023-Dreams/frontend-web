import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {AuthService} from "@app/_services/auth.service";

@Injectable({providedIn: 'root'})
export class ActivityService {


  constructor(
    private authService: AuthService,
    private http: HttpClient,
  ) {
  }

  readAll() {
    return this.http.get(`${environment.apiUrl}/Activities`);
  }

  readRecommendations() {
    return this.http.get(`${environment.apiUrl}/ActivityParticipations?$filter=patient_ID eq ${this.authService.userId}`);
  }

  signUp(activity: any) {
    const userId = this.authService.userId;
    if(!userId) return;
    if(!activity.ID) return;

    const data = {
      patient_ID: userId,
      activity_ID: activity.ID,
    }
    return this.http.post(`${environment.apiUrl}/ActivityParticipations`, data);
  }

  cancelParticipation(activity: any) {
    const userId = this.authService.userId;
    if(!userId) return;
    if(!activity.ID) return;

    return this.http.delete(`${environment.apiUrl}/ActivityParticipations(${activity.ID})`);
  }
}
