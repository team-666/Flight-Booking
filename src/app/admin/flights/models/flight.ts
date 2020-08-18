export class Flight{
    _id:string;
    flightNumber: string;
    airlineCode: string;
    aircraftTypeCode : string;
    originAirportCode : string;
    destinationAirportCode : string;
    departureDateTime : string;
    arrivalDateTime : string;
    fare: string;
    seatsAvailable: string;
    travelClass: string;

   constructor(flightNumber: string, airlineCode:string, aircraftTypeCode: string,
       originAirportCode: string, destinationAirportCode : string,  departureDateTime : string, 
       arrivalDateTime : string, fare: string,
       seatsAvailable: string , travelClass: string){
           this.flightNumber = flightNumber;
          this.airlineCode = airlineCode;
          this.aircraftTypeCode = aircraftTypeCode;
          this.originAirportCode = originAirportCode;
          this.destinationAirportCode = destinationAirportCode;
          this.departureDateTime = departureDateTime;
          this.arrivalDateTime = arrivalDateTime;
          this.fare = fare;
          this.seatsAvailable = seatsAvailable;
          this.travelClass = travelClass;
   }
}