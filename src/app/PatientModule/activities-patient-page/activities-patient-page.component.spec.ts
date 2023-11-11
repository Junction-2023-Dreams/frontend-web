import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesPatientPageComponent } from './activities-patient-page.component';

describe('ActivitiesPatientPageComponent', () => {
  let component: ActivitiesPatientPageComponent;
  let fixture: ComponentFixture<ActivitiesPatientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesPatientPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivitiesPatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
