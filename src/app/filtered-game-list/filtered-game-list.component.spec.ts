import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredGameListComponent } from './filtered-game-list.component';

describe('FilteredGameListComponent', () => {
  let component: FilteredGameListComponent;
  let fixture: ComponentFixture<FilteredGameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredGameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
