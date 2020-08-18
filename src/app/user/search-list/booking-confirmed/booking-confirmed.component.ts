import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { FlightSearchService } from '../../service/flight-search.service';
import { Flight } from 'src/app/admin/flights/models/flight';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-confirmed',
  templateUrl: './booking-confirmed.component.html',
  styleUrls: ['./booking-confirmed.component.css']
})
export class BookingConfirmedComponent implements OnInit {

  booking:Booking;
  flight$:Observable<Flight>;
  
   constructor(private flightSearchService: FlightSearchService, private router:Router) { 
    this.booking = JSON.parse(sessionStorage.getItem('booking'));
    this.flight$ = this.flightSearchService.getFlightonFlightNumber(this.booking.flightNumber);
    setTimeout(function(){ console.log("hello"); }, 5000);

  }

  ngOnInit(): void {
    
  }
 
   backToSearch(){
    this.router.navigate(["./search"]);
  }
// sessionStorage.setItem('booking'
}
