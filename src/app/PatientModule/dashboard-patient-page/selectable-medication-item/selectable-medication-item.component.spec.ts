import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableMedicationItemComponent } from './selectable-medication-item.component';

describe('SelectableMedicationItemComponent', () => {
  let component: SelectableMedicationItemComponent;
  let fixture: ComponentFixture<SelectableMedicationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectableMedicationItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectableMedicationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
