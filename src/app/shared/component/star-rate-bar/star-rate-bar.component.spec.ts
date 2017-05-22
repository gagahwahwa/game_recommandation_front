import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRateBarComponent } from './star-rate-bar.component';

describe('StarRateBarComponent', () => {
  let component: StarRateBarComponent;
  let fixture: ComponentFixture<StarRateBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarRateBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
