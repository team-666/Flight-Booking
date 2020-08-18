import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Flight} from '../../../app/models/flight';
import {Search} from '../../../app/models/search';
import { Booking } from 'src/app/models/booking';


@Injectable({
  providedIn: 'root'
})
export class FlightSearchService implements OnDestroy{
  
  public flightlistUrl :string = 'http://localhost:8092/api/search';

   public selectedFlight:EventEmitter<Flight> = new EventEmitter<Flight>();
   flight:Flight;

   

  constructor(private httpClient: HttpClient ) {
    this.selectedFlight.subscribe(selectedflight =>{
      this.flight = selectedflight;
    });
   }

   public getFlights(searchModel) : Promise<Flight[] | void> {
    return this.httpClient.post(this.flightlistUrl+"/flights", searchModel).toPromise()
    .then(res => res as Flight[])
    .catch(this.handleError);

   }

  
   /**
   * Service CAll to get All the Flights
   */
  ///oneway/{sourceId}/{destinationId}/{departDate}

  public getFlightsOneWay(source, destination, departDate): Promise<Flight[] | void> {

    return this.httpClient.get(this.flightlistUrl+"/oneway/"+source+"/"+destination+"/"+departDate).toPromise().then(res => res as Flight[])
      .catch(this.handleError);
  }
///roundTrip/{sourceId}/{destinationId}/{departDate}/{arrivalDate}
  public getFlightsRoundTrip(source, destination, departDate, arrivalDate): Promise<Flight[] | void> {

    return this.httpClient.get(this.flightlistUrl+"/oneway/"+source+"/"+destination+"/"+departDate+"/"+arrivalDate).toPromise().then(res => res as Flight[])
      .catch(this.handleError);
  }

  public saveBooking(booking) : Promise<Flight[] | void> {
    return this.httpClient.post(this.flightlistUrl+"/bookings", booking).toPromise()
    .then(res => res as Flight[])
    .catch(this.handleError);

   }
  confirmPayment(booking){
    return this.httpClient.post(this.flightlistUrl+"/payment", booking).toPromise()
    .then(res => res as Flight[])
    .catch(this.handleError);
  }
  getFlightonFlightNumber(flightNumber: string): any {
    return this.httpClient.get(this.flightlistUrl+"/flight/"+flightNumber).toPromise()
    .then(res => res as Flight)
    .catch(this.handleError);
  }
  //  return this.http.get<any[]>(this.url); 

  private handleError(error: any){
    console.log("error");
  }

  ngOnDestroy(){
    this.selectedFlight.unsubscribe();
  }
}
