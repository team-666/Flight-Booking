import { Component ,OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Flight} from '../../../app/models/flight';
import { FlightSearchService } from '../service/flight-search.service';
import {ActivatedRoute, Router} from "@angular/router";

declare let $: any;

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

 
 flights :Flight[];
  
  message: string;
  showloading = true;
  isDisplayMessage: boolean = false;
  //this.flights.length== 0;
  table:any;

  constructor(private flightSearchService: FlightSearchService,private router: Router,
              private route: ActivatedRoute) {
    this.flights =JSON.parse( sessionStorage.getItem("searchFlights"));
    var $self = this;
    //this.populateDatatable(this.flights); 
    let self = this;
      setTimeout(function(event){
        self.showloading = false;
        self.populateDatatable( self.flights);
        }, 3000);
  }


  refreshTableData(){
    if(this.table){
     this.table.destroy();
     this.populateDatatable(this.flights); 
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
  ngOnInit() {
  
  }
  backToSearch(){
    this.router.navigate(["./search"]);
  }
  bookNow(){
    this.router.navigate(["./booking"]);
  }

  populateDatatable(data){
    this.table = $('#searchList').DataTable({

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
        {data: "fare", title: "Price",  render: function (data, type, row) {
          return data+' $';
      }},
        {data: "", title: "Book Now", sortable:false,
        "defaultContent": `<button class="btn-primary details">Details</button>`
      },
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

  $("#searchList").on("click", ".details", event =>{
    var data = this.table.row( $(event.target).parents('tr') ).data();
    console.log(data);
   
    this.router.navigate(["./showDetails"], data.id);
    this.flightSearchService.selectedFlight.emit(data);
  });

  $(".delete").on('click', event =>{
    var data = this.table.row( $(event.target).parents('tr') ).data();
    })
  

 
}

}