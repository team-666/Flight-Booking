import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from 'src/app/models/flight';
import { Booking } from 'src/app/models/booking';



@Injectable({
  providedIn: 'root'
})
export class ManageService {
  modifyScheduledFlight(mScheduleFlight: Flight) {
    throw new Error("Method not implemented.");
  }

  constructor(private httpClient: HttpClient) { }


  manageUrl: string = 'http://localhost:8092/manage';
  searchScheduledFlight(bookingRefId: number) : any{
    return this.httpClient.get(this.manageUrl+'/search/'+bookingRefId).toPromise()
    .then(res => res as Flight)
    .catch(this.handleError);
  }


  getBookingInfo(bookingRefId: number) : any{
    return this.httpClient.get(this.manageUrl+'/find/'+bookingRefId).toPromise()
    .then(res => res as Booking)
    .catch(this.handleError);
  }

  modifyBooking(booking:Booking){
    return this.httpClient.post(this.manageUrl+'/modify', booking).toPromise()
    .then(res => res as Booking)
    .catch(this.handleError);
  }


  cancelBooking(bookingId){
    return this.httpClient.get(this.manageUrl+'/cancel/'+bookingId).toPromise()
    .then(res => res as Booking)
    .catch(this.handleError);
  }
  private handleError(error: any){
    console.log("error");
  }
  

}
