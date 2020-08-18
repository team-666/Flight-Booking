import { Component, OnInit } from '@angular/core';
import { FlightService } from './services/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(private flightService: FlightService) {
     // this.getFlights();
   }
  flight:any;
  flightsList:any;
  flightUpdated = false;

  ngOnInit(): void {
    
  }

   /*private async getFlights() {
    this.flightsList =[];
   const fs = await this.flightService.getFlights()
   console.log(fs);
   this.flightsList = fs;
  }*/

  onFlightSelected(data){
    console.log("Inside Flights Component ");
        this.flight = data;
  }

  onFlightModified(){
    //this.getFlights();
    this.flightUpdated = !this.flightUpdated;
  }
}
