import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemActivityComponent } from './list-item-activity.component';

describe('ListItemActivityComponent', () => {
  let component: ListItemActivityComponent;
  let fixture: ComponentFixture<ListItemActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListItemActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListItemActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
