export class Search{
    roundTrip:string;
    from:string;
    to:string;
    departDate:string;
    arrivalDate:string;
    adults:string;
    children:string;
    travelClass:string;

   constructor( roundTrip:string, from:string, to:string, 
    departDate:string, arrivalDate:string, adults:string, children:string, travelClass:string){
        this.roundTrip = roundTrip;
        this.from = from;
        this.to =to;
        this.departDate = departDate;
        this.arrivalDate = arrivalDate;
        this.adults = adults;
        this.children = children;
        this.travelClass = travelClass;

   }
}