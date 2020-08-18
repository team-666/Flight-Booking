import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FlightService } from '../services/flight.service';
import {Router, ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {

  @Input() flight: any;
  @Output() flightModified = new EventEmitter();
  message: string;
  constructor(private flightService: FlightService, private router: Router, private route: ActivatedRoute) {
    
  /*  let id =this.route.snapshot.paramMap.get('id');
     this.flightService.getFlight(id).then(res =>{
      this.flight = res;
    });*/
    
  }

  public updateForm = new FormGroup({
    flightNumber :  new FormControl('', Validators.required),
    airlineCode   : new FormControl('', Validators.required),
    aircraftTypeCode : new FormControl('', Validators.required),
    originAirportCode: new FormControl('', Validators.required),
    destinationAirportCode: new FormControl(''),
    departureDateTime: new FormControl('', Validators.required),
    arrivalDateTime: new FormControl(''),
    fare: new FormControl('', Validators.required),
    seats: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
  }

  /**
   * On Click of Update button.this method handles the Update of flight
   * @param event
   */
  onSubmit(event){
    this.flightService.updateFlight(this.flight).then(res =>{
      var self = this;
      setTimeout(function(event){
      },1000);
      //self.flightService.isRecordUpdated = true;
      self.flightModified.emit();

      //this.router.navigate(["/list"]);
    });
  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

  /**
   * Delete Flight
   * @param flight
   */
 /* deleteFlight(flight: any){
    this.flightService.deleteFlight(flight).then(res =>{
      this.flightService.isRecordUpdated = true;
      this.flightModified.emit();
     // this.router.navigate(["/list"]);
    });
  }*/


}
