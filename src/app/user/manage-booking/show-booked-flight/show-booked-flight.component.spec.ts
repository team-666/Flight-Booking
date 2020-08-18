import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBookedFlightComponent } from './show-booked-flight.component';

describe('ShowBookedFlightComponent', () => {
  let component: ShowBookedFlightComponent;
  let fixture: ComponentFixture<ShowBookedFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBookedFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBookedFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
