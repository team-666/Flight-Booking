
import { Component ,OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges , OnDestroy} from '@angular/core';
import {Flight} from '../../../../app/models/flight';
import {User} from '../../../../app/models/users';
import {Search} from '../../../../app/models/search';
import {Booking} from '../../../../app/models/booking';
import { FlightSearchService } from '../../service/flight-search.service';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  flight:Flight;

  public bookingForm = new FormGroup({
    originAirportCode :  new FormControl('', Validators.required),
    destinationAirportCode   : new FormControl('', Validators.required),
    departureDateTime: new FormControl('', Validators.required),
    arrivalDateTime: new FormControl(''),
    fName: new FormControl('', Validators.required),
    lName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    fare: new FormControl('', Validators.required),
    travelClass :  new FormControl('', Validators.required)
  });
 
  constructor(private flightSearchService: FlightSearchService,private router: Router,
    private route: ActivatedRoute) {
      
      //console.log(this.flight);
    }

  ngOnInit(): void {
   this.flight = this.flightSearchService.flight;
   
  }

  populateFlightDetails(){
    let x = this.flight.airlineCode;

  }
  ngOnDestroy(): void {
    //this.flightSearchService.selectedFlight.unsubscribe();
  }
  onSubmit(){
    //Save data to DB after Payment Confirmation
    console.log(this.bookingForm.value);
    let bookingFormVal = this.bookingForm.value;
    let searchModel =JSON.parse(sessionStorage.getItem("searchModel"));

    let userId = Math.floor((Math.random() * 100) + 1)+"";
    let user = new User(userId, bookingFormVal.fName, bookingFormVal.lName,  bookingFormVal.phone,  bookingFormVal.email,
    bookingFormVal.address, searchModel.adults, searchModel.children, bookingFormVal.travelClass, this.flight.seatsAvailable);


    let booking = new Booking(this.flight.flightNumber, userId,"","pending", user, this.flight.fare, this.flight);
    this.flightSearchService.saveBooking(booking).then(res=>{
      sessionStorage.setItem('booking', JSON.stringify(res));
      this.router.navigate(["./payment"]);
    });
  }

}
