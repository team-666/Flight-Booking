import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms"
import { FlightSearchService } from '../service/flight-search.service';
import {Router} from "@angular/router";
import {Search } from "../../models/search";


@Component({
  selector: 'app-fligh-search',
  templateUrl: './fligh-search.component.html',
  styleUrls: ['./fligh-search.component.css']
})
export class FlighSearchComponent implements OnInit {

  //cities = (citiesData as any).default;;
  flightType:any ="roundtrip";
  cities:any=[];
  flights:any;
  airports:any=[];
  searchModel : Search;
  
 // searchTerm : FormControl = new FormControl();
public searchForm = new FormGroup({
    flightType   : new FormControl('roundtrip'),
    from : new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    departDate: new FormControl('', Validators.required),
    arrivalDate: new FormControl('', Validators.required),
    adults: new FormControl('1',[Validators.min(1)]),
    children: new FormControl('0'),
    travelClass: new FormControl('economy'),
    search: new FormControl(''),
  });

  validForm = true;
 
 

  constructor(private httpClient: HttpClient, private flightSearchService: FlightSearchService,
    private router:Router){}

  ngOnInit(): void {
   // this.searchForm.value.flightType="roundtrip";

    this.httpClient.get("../../../../assets/data/airports.json").subscribe(data =>{
      console.log(data);
      this.cities = data;
      //airports
      this.cities.forEach(object => {
        let name = object.name+"("+object.code+")";
        this.airports.push(name);
      });
    })
    
  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }
  validateInputs(){
   
    if(this.searchForm.value.departDate < this.searchForm.value.arrivalDate &&  
      this.searchForm.value.adults>0){
        return true;
      }
      return false;
  }

  showFlights(){
   // if(this.validateInputs()){
      console.log(this.searchForm.value);
      let source = this.searchForm.value.from;
      source = source.substring(source.indexOf("(")+1, source.indexOf(")"));
      let  to = this.searchForm.value.to;
      to = to.substring(to.indexOf("(")+1, to.indexOf(")"));
      let departDate = this.searchForm.value.departDate;
      let arrivalDate = this.searchForm.value.arrivalDate;
      let oneway= this.searchForm.value.flightType;
      let adults=this.searchForm.value.adults;
      let child =this.searchForm.value.children;
      let travelClass=this.searchForm.value.travelClass;
      this.searchModel= new Search(oneway, source, to, departDate, arrivalDate, adults, child, travelClass);

      
      this.flightSearchService.getFlights(this.searchModel).then(res =>
        {
          //alert("123");
          this.flights = res==undefined?[]:res;
          sessionStorage.setItem("searchFlights", JSON.stringify(this.flights));
          sessionStorage.setItem("searchModel", JSON.stringify(this.searchModel));
          this.router.navigate(["./searchList"]);
        });
        
    /*
     this.flightSearchService.getFlightsOneWay(source, to, departDate).then(res =>
        {
          this.flights = res==undefined?[]:res;
          let self = this;
          setTimeout(function(event){
          // self.showloading = false;
          // self.populateDatatable( self.flights);
          // }, 3000);
            return res;
        } );
        sessionStorage.setItem("searchFlights", JSON.stringify(this.flights));
        sessionStorage.setItem("searchModel", JSON.stringify(this.searchModel));
        this.router.navigate(["./searchList"]);
      });
      */
    /*}else{
      //show error message
    }*/
  }

 showFromDropDown = false;
 showToDropDown = false;
 toFocus = false;
 fromFocus = false;
 
 selectFromValue(value) {
  this.searchForm.patchValue({"from": value});
  this.showFromDropDown = false;
}
 closeFromDropDown() {
  // this.showFromDropDown = !this.showFromDropDown;
  this.showFromDropDown = false;
 }

 openFromDropDown() {
   this.showFromDropDown = true;
   
 }

 getSearchFromValue() {
   return this.searchForm.value.from;
 }


 selectToValue(value) {
  this.searchForm.patchValue({"to": value});
  this.showToDropDown = false;
}
 closeToDropDown() {
   //this.showToDropDown = !this.showToDropDown;
   this.showToDropDown = false;
 }

 openToDropDown() {
   this.showToDropDown = true;
 }

 getSearchToValue() {
   return this.searchForm.value.to;
 }
  
}