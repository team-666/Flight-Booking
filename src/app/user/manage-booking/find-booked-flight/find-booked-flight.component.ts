
import { Component, OnInit } from '@angular/core';
import { ScheduledFlightService } from '../../service/scheduled-flight.service';
import { ScheduledFlight } from '../../../models/scheduled-flight';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-booked-flight',
  templateUrl: './find-booked-flight.component.html',
  styleUrls: ['./find-booked-flight.component.css']
})
export class FindBookedFlightComponent implements OnInit {

  scheduleFlight:ScheduledFlight;
  scheduleFlightId:number;
  show:boolean=false;

  constructor(private service: ScheduledFlightService, private router: Router) { }

  ngOnInit(): void {
    this.scheduleFlight=new ScheduledFlight();
  }

  searchScheduleFlight(scheduleFlightId:number):any{
    this.show=true;
    console.log(scheduleFlightId);
    this.service.searchScheduledFlight(scheduleFlightId).subscribe((scheduleFlight:ScheduledFlight)=>this.scheduleFlight=scheduleFlight);
}

idValid:boolean=false;
validateId(){
    if(this.scheduleFlightId>999){
        this.idValid=true;
    }
    else if(this.scheduleFlightId<1){
        this.idValid=true;
    }else{
        this.idValid=false;
    }
}

    add(){

        this.router.navigate(['/scheduledFlight/add']);

    }

    view(){
        this.router.navigate(['/scheduledFlight/show']);

    }

    search(){
        this.router.navigate(['/scheduledFlight/search']);
    }



}
