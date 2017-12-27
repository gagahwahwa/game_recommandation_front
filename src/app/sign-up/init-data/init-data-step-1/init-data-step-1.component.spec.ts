import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitDataStep1Component } from './init-data-step-1.component';

describe('InitDataStep1Component', () => {
  let component: InitDataStep1Component;
  let fixture: ComponentFixture<InitDataStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitDataStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitDataStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
