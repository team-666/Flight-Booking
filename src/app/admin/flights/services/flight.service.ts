import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Flight} from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  isRecordUpdated: boolean;
  public flightlistUrl :string = 'http://localhost:8092/api/flight_schedule';

  constructor(private httpClient: HttpClient ) { }

  /**
   * Service CAll to get All the Flights
   */

  public getFlights(): Promise<Flight[] | void> {

    return this.httpClient.get(this.flightlistUrl).toPromise().then(res => res as Flight[])
      .catch(this.handleError);
  }

  /**
   * Create Flight
   * @param flight
   */


  createFlight(flight: Flight):Promise< void |Flight> {
    return this.httpClient.post(this.flightlistUrl+"/",  flight).toPromise().then(res => res as Flight)
      .catch(this.handleError);
  }

  /**
   * get Flight API call based on input flight id
   * @param id
   */
  public getFlight(id :any): Promise<Flight | void> {

    return this.httpClient.get(this.flightlistUrl+"/"+id).toPromise().then(res => res as Flight)
      .catch(this.handleError);
  }


  /***
   * Update API call
   * @param flight
   */
  public updateFlight(flight: Flight): Promise<Flight | void> {

    return this.httpClient.put(this.flightlistUrl+"/"+flight._id, flight).toPromise()
    .then(res => res as Flight)
      .catch(this.handleError);
  }

  /**
   * Delete API call based on input flight
   * @param flight
   */
  public deleteFlight(flight: Flight): Promise<Flight | void> {
    return this.httpClient.delete(this.flightlistUrl+"/"+flight._id).toPromise().then(res => res as Flight)
      .catch(this.handleError);
  }


  private handleError(error: any){
    console.log("error");
  }

}
