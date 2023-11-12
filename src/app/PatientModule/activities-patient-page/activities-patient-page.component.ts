import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {
  ListItemActivityComponent
} from "@app/PatientModule/activities-patient-page/list-item-activity/list-item-activity.component";
import {
  RecommendationActivityComponent
} from "@app/PatientModule/activities-patient-page/recommendation-activity/recommendation-activity.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {ActivityService} from "@app/_services/activities.service";

@Component({
  selector: 'app-activities-patient-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ListItemActivityComponent, RecommendationActivityComponent, MatDividerModule, MatInputModule, FormsModule],
  templateUrl: './activities-patient-page.component.html',
  styleUrl: './activities-patient-page.component.css'
})
export class ActivitiesPatientPageComponent implements OnInit {
  searchText: any;
  recommendations: any = [];
  registeredActivities: any = [];
  allActivities: any = [];
  searchedActivities: any = [];

  constructor(
    private activityService: ActivityService,
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.updateActivities();
    })
  }

  updateActivities() {
    console.log("Fetch activities")
    this.activityService.readAll().subscribe((data: any) => {
      this.allActivities = data.value || [];
      this.searchedActivities = this.allActivities;
      console.log("Fetch recommendations")

      this.activityService.readRecommendations().subscribe((data: any) => {
        this.registeredActivities = data.value || [];
        this.recommendations = this.allActivities.filter((item: any) => this.registeredActivities.find((rec: any) => rec.activity_ID === item.ID));
        this.allActivities = this.allActivities.filter((item: any) => !this.registeredActivities.find((rec: any) => rec.activity_ID === item.ID));
        this.searchedActivities = this.allActivities;
      });
    });
  }
  openFilter() {

  }

  search(searchText: any) {
    this.searchedActivities = this.allActivities.filter((item: any) => item.title.toLowerCase().includes(searchText.toLowerCase()))
      .filter((item: any) => !this.registeredActivities.find((rec: any) => rec.activity_ID === item.ID));
  }

  openActivity($event: any, activity: any) {
    if ($event.target.closest('button')) return
    console.log("Open", activity)
  }

  signUp(activity: any) {
    this.activityService.signUp(activity)?.subscribe((data: any) => {
      this.updateActivities()
    });
    this.searchedActivities = this.searchedActivities.filter((item: any) => item.ID !== activity.ID);
    this.recommendations.push(activity);
    this.registeredActivities.push({activity_ID: activity.ID});
  }

  cancelRegistration($event: any) {
    let activityParticipations = this.registeredActivities.find((item: any) => item.activity_ID === $event.ID);
    console.log("Cancel", activityParticipations)
    this.activityService.cancelParticipation(activityParticipations)?.subscribe((data: any) => {

    });
    this.recommendations = this.recommendations.filter((item: any) => item.ID !== $event.ID);
    this.registeredActivities = this.registeredActivities.filter((item: any) => item.activity_ID !== $event.ID);
    this.searchedActivities.push($event);
  }
}
