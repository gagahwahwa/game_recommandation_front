import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitDataStep2Component } from './init-data-step-2.component';

describe('InitDataStep2Component', () => {
  let component: InitDataStep2Component;
  let fixture: ComponentFixture<InitDataStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitDataStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitDataStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
