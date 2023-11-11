import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPainPositionComponent } from './select-pain-position.component';

describe('SelectPainPositionComponent', () => {
  let component: SelectPainPositionComponent;
  let fixture: ComponentFixture<SelectPainPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPainPositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectPainPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
