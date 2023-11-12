import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPatientPageComponent } from './chart-patient-page.component';

describe('ChartPatientPageComponent', () => {
  let component: ChartPatientPageComponent;
  let fixture: ComponentFixture<ChartPatientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartPatientPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartPatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
