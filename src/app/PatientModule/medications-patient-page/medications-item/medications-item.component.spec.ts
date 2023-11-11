import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationsItemComponent } from './medications-item.component';

describe('MedicationsItemComponent', () => {
  let component: MedicationsItemComponent;
  let fixture: ComponentFixture<MedicationsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationsItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicationsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
