import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationActivityComponent } from './recommendation-activity.component';

describe('RecommendationActivityComponent', () => {
  let component: RecommendationActivityComponent;
  let fixture: ComponentFixture<RecommendationActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendationActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
