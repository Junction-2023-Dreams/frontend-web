import { Routes } from '@angular/router';
import {NavDoctorComponent} from "./DoctorModule/nav-doctor/nav-doctor.component";
import {NavPatientComponent} from "./PatientModule/nav-patient/nav-patient.component";
import {LoginPageComponent} from "./SharedModule/login-page/login-page.component";
import {AuthGuard} from "./_helpers/guards/auth.guard";
import {PageNotFoundComponent} from "./SharedModule/page-not-found/page-not-found.component";
import {LoginGuard} from "./_helpers/guards/login.guard";
import {DoctorGuard} from "./_helpers/guards/doctor.guard";
import {PatientGuard} from "./_helpers/guards/patient.guard";
import {LogoutPageComponent} from "@app/SharedModule/logout-page/logout-page.component";
import {PatientsPageComponent} from "@app/DoctorModule/patients-page/patients-page.component";
import {DashboardPageComponent} from "@app/DoctorModule/dashboard-page/dashboard-page.component";
import {DetectionPageComponent} from "@app/DoctorModule/detection-page/detection-page.component";
import {
  DashboardPatientPageComponent
} from "@app/PatientModule/dashboard-patient-page/dashboard-patient-page.component";
import {
  MedicationsPatientPageComponent
} from "@app/PatientModule/medications-patient-page/medications-patient-page.component";
import {
  YourHealthPatientPageComponent
} from "@app/PatientModule/your-health-patient-page/your-health-patient-page.component";
import {
  ActivitiesPatientPageComponent
} from "@app/PatientModule/activities-patient-page/activities-patient-page.component";

const PATIENT_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardPatientPageComponent, data: { title: 'Dashboard'}},
  { path: 'medications', component: MedicationsPatientPageComponent, data: { title: 'Medications'}},
  { path: 'your-health', component: YourHealthPatientPageComponent, data: { title: 'Your Health'}},
  { path: 'activities', component: ActivitiesPatientPageComponent, data: { title: 'Activities'}},
]
const DOCTOR_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'patients', component: PatientsPageComponent, data: { title: 'Patients'}},
  { path: 'patients/:id', component: PatientsPageComponent, data: { title: 'Patients'}},
  { path: 'dashboard', component: DashboardPageComponent, data: { title: 'Dashboard'}},
  { path: 'detection', component: DetectionPageComponent, data: { title: 'Detection'}}
]

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'doctor', component: NavDoctorComponent, data: { title: 'Doctor'}, canActivate: [AuthGuard, DoctorGuard], children: DOCTOR_ROUTES},
  { path: 'patient', component: NavPatientComponent, data: { title: 'Patient'}, canActivate: [AuthGuard, PatientGuard], children: PATIENT_ROUTES},
  { path: 'login', component: LoginPageComponent, data: { title: 'Login'}, canActivate: [LoginGuard]},
  { path: 'logout', component: LogoutPageComponent, data: { title: 'Logout'}, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
]
