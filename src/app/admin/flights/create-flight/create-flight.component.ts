import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { FlightService } from '../services/flight.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
  }

  public createForm = new FormGroup({
    flightNumber :  new FormControl('', Validators.required),
    airlineCode   : new FormControl('', Validators.required),
    aircraftTypeCode : new FormControl('', Validators.required),
    originAirportCode: new FormControl('', Validators.required),
    destinationAirportCode: new FormControl(''),
    departureDateTime: new FormControl('', Validators.required),
    arrivalDateTime: new FormControl(''),
    fare: new FormControl('', Validators.required),
    seats: new FormControl('', Validators.required),
    travelClass: new FormControl('economy'),
  });

  onSubmit(){
    this.flightService.createFlight(this.createForm.value).then(res => {
     // this.flightService.isRecordUpdated = true;
      this.router.navigate(["/list"]);
    });

  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }



}
