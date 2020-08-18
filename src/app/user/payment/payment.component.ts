import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FlightSearchService } from '../service/flight-search.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private httpClient: HttpClient, private flightSearchService: FlightSearchService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onPayment(){
    let booking = JSON.parse( sessionStorage.getItem('booking'));
   
    //Payment success , update payment sttus: completed, paymentId
    this.flightSearchService.confirmPayment(booking).then(res =>{
      sessionStorage.setItem('booking', JSON.stringify(res));
    });
    this.router.navigate(["./confirmBooking"]);

  }

}
