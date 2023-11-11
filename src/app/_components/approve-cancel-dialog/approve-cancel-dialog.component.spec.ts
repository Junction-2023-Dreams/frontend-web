import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCancelDialogComponent } from './approve-cancel-dialog.component';

describe('ApproveCancelDialogComponent', () => {
  let component: ApproveCancelDialogComponent;
  let fixture: ComponentFixture<ApproveCancelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveCancelDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
