import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBookedFlightComponent } from './modify-booked-flight.component';

describe('ModifyBookedFlightComponent', () => {
  let component: ModifyBookedFlightComponent;
  let fixture: ComponentFixture<ModifyBookedFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyBookedFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyBookedFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
