import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationsPatientPageComponent } from './medications-patient-page.component';

describe('MedicationsPatientPageComponent', () => {
  let component: MedicationsPatientPageComponent;
  let fixture: ComponentFixture<MedicationsPatientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationsPatientPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicationsPatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
