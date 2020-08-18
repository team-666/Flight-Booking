import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBookedFlightComponent } from './find-booked-flight.component';

describe('FindBookedFlightComponent', () => {
  let component: FindBookedFlightComponent;
  let fixture: ComponentFixture<FindBookedFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindBookedFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBookedFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
