import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPatientPageComponent } from './dashboard-patient-page.component';

describe('DashboardPatientPageComponent', () => {
  let component: DashboardPatientPageComponent;
  let fixture: ComponentFixture<DashboardPatientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPatientPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardPatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
