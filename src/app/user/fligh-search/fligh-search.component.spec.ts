import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlighSearchComponent } from './fligh-search.component';

describe('FlighSearchComponent', () => {
  let component: FlighSearchComponent;
  let fixture: ComponentFixture<FlighSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlighSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlighSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
