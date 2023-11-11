import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditActivitiesComponent } from './add-edit-activities.component';

describe('AddEditActivitiesComponent', () => {
  let component: AddEditActivitiesComponent;
  let fixture: ComponentFixture<AddEditActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
