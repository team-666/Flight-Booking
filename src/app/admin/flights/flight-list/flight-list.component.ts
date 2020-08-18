import { Component, OnInit , EventEmitter, Output, Input, OnChanges, SimpleChanges, AfterViewInit} from '@angular/core';
import { Flight } from '../models/flight';
import { FlightService } from '../services/flight.service';
import {ActivatedRoute, Router} from "@angular/router";

declare let $: any;

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit, OnChanges {

  @Output() flightSelected = new EventEmitter<Flight>();
  @Input() flights: any;
  @Input() flightUpdated: boolean;
  message: string;
  showloading = true;
  isDisplayMessage: boolean =false;
  table:any;

  constructor(private flightService: FlightService,private router: Router,
              private route: ActivatedRoute) {
    var $self = this;
    this.getFlights();
    var self = this;
    setTimeout(function() {
      self.isDisplayMessage =  false;
    }.bind(this), 5000);
  }


 refreshTableData(){
   if(this.table){
    this.table.destroy();
    this.getFlights();
   }
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if(changes.flightUpdated.currentValue!=undefined){
      this.refreshTableData();
    }
  }

  /***
   * gets all The Flights From Data base and Display it on UI
   */
  private getFlights() {
    
    this.flightService.getFlights().then(res =>
    {
      //this.flights =[];
      this.flights = res;
      this.isDisplayMessage =  this.flightService.isRecordUpdated;

      let self = this;
      setTimeout(function(event){
        self.showloading = false;
        self.populateDatatable( self.flights);
        }, 3000);
        return res;
    } );
  }
  ngOnInit() {
  
  }



  /**
   * Populates the Data table on browser using jquery datatable plugin
   * @param data
   */

  populateDatatable(data){
    this.table = $('#flightList').DataTable({

      data: data,
     /* 'language': {
        'loadingRecords': '&nbsp;',
        'processing': '<div class="spinner"></div>'
      },*/
      
      "processing": true,
        "language": {
            processing: `<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            <span class="sr-only">Loading...</span> `
          },
       
     // retrieve: true,
    
     /* "columnDefs": [ {
        "targets": 4,
        //"defaultContent": "<button  class='btn btn-primary edit'>Edit</button>"
        "defaultContent": `<img class='edit' src='../../../../assets/images/edit.png'
        width='20px' height='20px'>`,
        "defaultContent": `<img class='edit' src='../../../../assets/images/delete.png'
        width='20px' height='20px'>`
      }
        ],*/
      columns:[
        {data: "airlineCode", title: "Airline Code"},
        {data: "originAirportCode", title: "Origin"},
        {data: "destinationAirportCode", title: "Destination"},
        {data: "", title: "Edit", sortable:false,  
        "defaultContent": `<img class='edit' src='../../../../assets/images/edit.png'
        width='20px' height='20px'>`,},
        {data: "", title: "Delete", sortable:false,
        "defaultContent": `<img class='delete' src='../../../../assets/images/delete.png'
        width='20px' height='20px'>`},
      ],
      drawCallback: () => {
        $('.paginate_button.next').on('click', () => {
        });
      }
    });

   /* $('#flightList tbody').on( 'click', 'tr', event =>{
      if ( $(this).hasClass('selected') ) {
          $(this).removeClass('selected');
      }
      else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
      }
      /*
       var data = table.row( $(event.target).parents('tr') ).data();
      this.flightSelected.emit(data);
      
  } );*/

 /* $('#button').click( function () {
      table.row('.selected').remove().draw( false );
  } );*/

  $(".edit").on('click', event =>{
    var data = this.table.row( $(event.target).parents('tr') ).data();
    this.flightSelected.emit(data);
  });

  $(".delete").on('click', event =>{
    var data = this.table.row( $(event.target).parents('tr') ).data();
    this.flightService.deleteFlight(data).then(res =>{
      //this.flightService.isRecordUpdated = true;
     // this.router.navigate(["../list"]);
     this.refreshTableData();
     this.flightSelected.emit();
    })
  });
}
}
