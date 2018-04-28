import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreRatingComponent } from './more-rating.component';

describe('MoreRatingComponent', () => {
  let component: MoreRatingComponent;
  let fixture: ComponentFixture<MoreRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [MoreRatingComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
