export class User{
    _id:string;
    userId: string;
    fname: string;
    lname: string;
    phone: string;
    email: string;
    address: string;
    adult: string;
    child: string;
    flightClass: string;
    seatNo: string;
    constructor( userId: string, fname: string, lname: string, phone: string,
        email: string, address: string, adult: string, child: string, flightClass: string, seatNo: string){
            this.userId = userId;
            this.fname = fname;
            this.lname = lname;
            this.phone = phone;
            this.email = email;
            this.address = address;
            this.adult = adult;
            this.child = child;
            this.flightClass = flightClass;
            this.seatNo = seatNo;

    }

}