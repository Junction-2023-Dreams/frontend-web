import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourHealthPatientPageComponent } from './your-health-patient-page.component';

describe('YourHealthPatientPageComponent', () => {
  let component: YourHealthPatientPageComponent;
  let fixture: ComponentFixture<YourHealthPatientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourHealthPatientPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourHealthPatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
