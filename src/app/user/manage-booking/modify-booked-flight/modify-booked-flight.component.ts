import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { ManageService } from '../../service/manage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FlightSearchService } from '../../service/flight-search.service';
import { Booking } from 'src/app/models/booking';

@Component({
  selector: 'app-modify-booked-flight',
  templateUrl: './modify-booked-flight.component.html',
  styleUrls: ['./modify-booked-flight.component.css']
})
export class ModifyBookedFlightComponent implements OnInit {
 
  scheduleFlightId:any;
  modifiedMsg='';
  show:boolean=false;
  scheduleFlight$:Observable<Flight>;
dateError = false;
bookingId;
booking:Booking;
bookingModified = false;
bookedSeats =0;
showErorMsg = false;

  constructor(private service: ManageService, private router: Router, 
    private flightSearchService: FlightSearchService) { }

  ngOnInit(): void {
    //this.scheduleFlight=new ScheduledFlight();
  }
  searchScheduleFlight(bookingId:number):any{
    
   // console.log(scheduleFlightId);
    this.bookingId = bookingId;
    this.scheduleFlight$=  this.service.searchScheduledFlight(bookingId);
    this.service.getBookingInfo(this.bookingId).then(b=>{
      if(b){
        this.booking = b;
        
        this.show= this.booking.status !='Cancelled';
        if(this.show){
          this.showErorMsg = false;
          this.bookedSeats = parseInt(this.booking.users.adult)+parseInt( this.booking.users.child);
        }else{
          this.modifiedMsg = "Booking not existed";
          this.showErorMsg = true;
        }
      }
    });
   
  
}

cancelBooking(dep, arr){
  this.service.cancelBooking(this.bookingId);
  this.show=false;
  this.bookingModified = true;
}

  modifyScheduledFlight(dep, arr){
      var arrivalDate = Date.parse(arr);
      var depDate = Date.parse(dep);
      if (arrivalDate < depDate) {
         this.dateError = true;
         this.bookingModified = false;
         this.modifiedMsg = "arrival date should be prior to departure date";
         this.showErorMsg = true;
      }else{
       this.dateError = false;
       this.showErorMsg = false;
       this.service.getBookingInfo(this.bookingId).then(booking =>{
        this.booking = booking;
        this.booking.flightSchedule.arrivalDateTime = arr;
        this.booking.flightSchedule.departureDateTime = dep;
       // this.flightSearchService.getFlights(this.booking.flightSchedule).then(res =>{
          if(booking){
            
            this.service.modifyBooking(booking);
            this.bookingModified = true;
            this.modifiedMsg = "Record Updtaed Successfully";
            this.showErorMsg = true;
          }else{
            this.bookingModified = false;
            this.showErorMsg = false;
            //alert("No Flights Available");
          }
         
       // });
       // this.service.modifyBooking();
       });
    
      }
    
  }


  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }



   

    modify(){

        this.router.navigate(['/scheduledFlight/modify']);

    }



}
