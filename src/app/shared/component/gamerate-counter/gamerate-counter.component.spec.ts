import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerateCounterComponent } from './gamerate-counter.component';

describe('GamerateCounterComponent', () => {
  let component: GamerateCounterComponent;
  let fixture: ComponentFixture<GamerateCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerateCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerateCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
