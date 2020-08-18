import { Component, OnInit } from '@angular/core';
import { ManageService } from '../../service/manage.service';

import { Router } from '@angular/router';
import { Flight } from '../../../models/flight';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-show-booked-flight',
  templateUrl: './show-booked-flight.component.html',
  styleUrls: ['./show-booked-flight.component.css']
})
export class ShowBookedFlightComponent implements OnInit {

  scheduleFlight$:Observable<Flight>;

  scheduleFlightId:number;
  show:boolean=false;
  error= false;

  constructor(private service: ManageService, private router: Router) { }

  ngOnInit(): void {
    //this.scheduleFlight=new ScheduledFlight();
  }

  searchScheduleFlight(scheduleFlightId:number):any{
    this.show=true;
    console.log(scheduleFlightId);
    this.scheduleFlight$=  this.service.searchScheduledFlight(scheduleFlightId);
    if( this.scheduleFlight$ == null){
      this.error= true;
    }
  
}


    view(){

        this.router.navigate(['/scheduledFlight/show']);

    }

    modify(){

        this.router.navigate(['/scheduledFlight/modify']);

    }



}
