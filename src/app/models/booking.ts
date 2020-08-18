import {User} from './users';
import { Flight } from './flight';
export class Booking{
    _id:string;
    flightNumber: string;
    userId: string;
    paymentId: string;
    status: string;
    users:User;
     price:string;
     bookingReference:string;
     flightSchedule: Flight;
    
    constructor(   flightNumber: string, userId: string,  paymentId: string, status: string, users:User,
        price:string, flightSchedule: Flight, bookingReference?:string){
            this.flightNumber = flightNumber;
            this.userId = userId;
            this.paymentId = paymentId;
            this.status = status;
            this.users = users;
            this.price = price;
            this.bookingReference =bookingReference;
            this.flightSchedule = flightSchedule;
    }

}