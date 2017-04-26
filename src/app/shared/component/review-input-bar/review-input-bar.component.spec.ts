import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewInputBarComponent } from './review-input-bar.component';

describe('ReviewInputBarComponent', () => {
  let component: ReviewInputBarComponent;
  let fixture: ComponentFixture<ReviewInputBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewInputBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewInputBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
